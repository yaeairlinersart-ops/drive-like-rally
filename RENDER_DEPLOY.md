# Render 部署

这个目录已经包含 Render 所需的 `render.yaml` 和 `render-server.mjs`。

在 Render 中创建 **Web Service**，连接包含本目录的 Git 仓库；如果仓库根目录不是 `portfolio-site`，把 Root Directory 设置为 `portfolio-site`。Render 会使用：

- Build Command：`npm ci && npm run build`
- Start Command：`node render-server.mjs`
- Health Check Path：`/`

部署完成后先用 Render 分配的 `onrender.com` 地址检查：

- `/`
- `/roadbook.html`
- `/projects/rally`

确认三个页面正常后，再在 Render 的 Custom Domains 中添加 `drivelikerally.fun`，按照 Render 给出的 DNS 记录更新 NameSilo。切换前不要删除当前 Cloudflare 的记录。
