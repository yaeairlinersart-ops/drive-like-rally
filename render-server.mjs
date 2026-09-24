import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { extname, join, normalize, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";

const root = fileURLToPath(new URL(".", import.meta.url));
const introRoot = join(root, "public", "intro");
const clientRoot = join(root, "dist", "client");
const { default: worker } = await import("./dist/server/index.js");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

function safePath(base, requestPath) {
  const clean = normalize(requestPath.replace(/^\/+/, ""));
  const target = join(base, clean);
  const rel = relative(base, target);
  return rel && !rel.startsWith(".." + sep) && rel !== ".." ? target : null;
}

async function staticResponse(file) {
  try {
    const info = await stat(file);
    if (!info.isFile()) return null;
    return new Response(createReadStream(file), {
      headers: { "content-type": mime[extname(file).toLowerCase()] ?? "application/octet-stream" },
    });
  } catch {
    return null;
  }
}

async function assetsFetch(request) {
  const path = new URL(request.url).pathname;
  const file = path.startsWith("/intro/")
    ? safePath(introRoot, path.slice("/intro/".length))
    : safePath(clientRoot, path);
  return (file && await staticResponse(file)) || new Response("Not found", { status: 404 });
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const path = url.pathname;
    let response;

    if (path === "/" || path === "/index.html" || path === "/roadbook.html" || path === "/design.html" || path.startsWith("/assets/")) {
      const file = path === "/" || path === "/index.html"
        ? join(introRoot, "index.html")
        : safePath(introRoot, path.slice(1));
      response = file && await staticResponse(file);
    } else {
      response = await worker.fetch(new Request(url, { method: req.method, headers: req.headers }), { ASSETS: { fetch: assetsFetch } }, { waitUntil() {}, passThroughOnException() {} });
    }

    response ||= new Response("Not found", { status: 404 });
    res.writeHead(response.status, Object.fromEntries(response.headers));
    const body = Buffer.from(await response.arrayBuffer());
    res.end(body);
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end(error instanceof Error ? error.message : "Internal server error");
  }
});

const port = Number(process.env.PORT || 10000);
server.listen(port, "0.0.0.0", () => console.log(`Render server listening on ${port}`));
