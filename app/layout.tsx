import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"耀天·董｜服务与体验设计",description:"服务设计、体验策略与循环系统作品集",openGraph:{title:"耀天·董｜服务与体验设计作品集",description:"设计体验，也设计体验如何发生。",images:["/og.png"]},twitter:{card:"summary_large_image",title:"耀天·董｜服务与体验设计作品集",description:"设计体验，也设计体验如何发生。",images:["/og.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
