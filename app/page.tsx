"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {no:"01",slug:"santander",title:"Santander Cycles",type:"出行用户研究",accent:"#ff4a35",image:"/projects/santander-cover.webp",statement:"用户为什么不相信一辆“看得见”的共享单车？",summary:"从竞品结构与端到端旅程入手，定位无车、满桩与路线不确定性如何共同破坏使用信心，并把洞察转化为可验证的服务假设。",skills:["竞品研究","用户旅程","试点设计"]},
  {no:"02",slug:"sewcial",title:"The Sewcial Club",type:"行为与文化研究",accent:"#d9a980",image:"/projects/sewcial.jpg",statement:"人们认同可持续时尚，为什么仍然很少参与？",summary:"围绕态度与行动之间的落差，梳理交换、维修和社交参与的阻力，探索如何让可持续行为更轻松、更有即时回报。",skills:["行为洞察","参与障碍","概念验证"]},
  {no:"03",slug:"lco",title:"LCO",type:"利益相关者研究",accent:"#b7f532",image:"/projects/lco.jpg",statement:"为什么仍有价值的商业构件，会在租约结束时成为废弃物？",summary:"从业主、租户、设计方与回收方的目标冲突出发，追踪材料在商业空间中的生命周期，寻找循环使用难以发生的系统原因。",skills:["利益相关者","系统映射","商业验证"]},
  {no:"04",slug:"tfl",title:"TU–BE",type:"公共空间用户研究",accent:"#8d8cff",image:"/projects/tfl.jpg",statement:"等待为何让人焦虑，而手机并没有让它更短？",summary:"把候车拆解为连续的行为与情绪变化，识别缺乏反馈、行动和掌控感带来的焦虑，并定义真实站点中的验证计划。",skills:["用户旅程","行为观察","研究计划"]},
  {no:"05",slug:"rally",title:"山路领航",type:"探索性用户研究",accent:"#35a6ff",image:"/projects/rally/icon.png",statement:"普通导航为什么无法帮助驾驶者提前理解弯道？",summary:"结合亲历问题、道路安全文献、用户范围与竞品研究，建立驾驶者的预判需求，并用可运行原型验证研究洞察能否被转化。",skills:["桌面研究","需求分层","原型验证"]},
];

export default function Home(){
  useEffect(()=>{ window.location.replace("/projects/rally") },[]);
  const [active,setActive]=useState(0);
  const items=useRef<(HTMLElement|null)[]>([]);
  useEffect(()=>{const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=Number((e.target as HTMLElement).dataset.index);setActive(i)}}),{rootMargin:"-38% 0px -38% 0px"});items.current.forEach(x=>x&&obs.observe(x));return()=>obs.disconnect()},[]);
  const p=projects[active];
  return <main>
    <nav><a href="#top" className="logo">YT<span>.</span></a><div className="navlinks"><a href="#work">项目</a><a href="#profile">简介</a><a href="#contact">联系</a></div><span className="availability">● 可接受合作</span></nav>

    <section id="top" className="hero">
      <p className="micro">用户研究 / 服务设计 / 体验策略</p>
      <h1>理解人如何行动，<br/>也解释<span>为什么。</span></h1>
      <div className="hero-bottom"><p>耀天·董是一名用户研究与服务设计师，擅长从复杂情境中识别真实需求，并把研究证据转化为清晰的产品与服务决策。</p><a href="#work">查看研究案例 <i>↓</i></a></div>
      <div className="hero-index">PORTFOLIO <b>2026</b></div>
    </section>

    <section id="work" className="work-intro"><p className="micro">SELECTED RESEARCH</p><h2>五个案例。<br/>五种真实情境。</h2><p>从城市出行、公共空间到驾驶安全，展示我如何定义问题、形成洞察并推动设计决策。</p></section>

    <section className="scroll-showcase">
      <aside className="sticky-stage" style={{"--accent":p.accent} as React.CSSProperties}>
        <div className="stage-top"><span>{p.no} / 05</span><span>{p.type}</span></div>
        <div className="image-stack"><div className="ghost-card one"/><div className="ghost-card two"/><img key={p.slug} src={p.image} alt={`${p.title} 项目视觉`}/><div className="scanline"/></div>
        <div className="stage-bottom"><h3>{p.title}</h3><div className="progress">{projects.map((_,i)=><span key={i} className={i===active?"on":""}/>)}</div></div>
      </aside>
      <div className="project-list">{projects.map((x,i)=><article key={x.slug} data-index={i} ref={el=>{items.current[i]=el}} className={i===active?"current":""} style={{"--accent":x.accent} as React.CSSProperties}>
        <header><span>{x.no}</span><span>{x.type}</span></header><h3>{x.statement}</h3><p>{x.summary}</p><ul>{x.skills.map(s=><li key={s}>{s}</li>)}</ul>
        <a className="project-link" href={x.slug==="santander"?"/projects/santander":x.slug==="tfl"?"/projects/tfl":x.slug==="rally"?"/projects/rally":"#work"} aria-label={`查看 ${x.title} 案例`}>进入案例 <span>↗</span></a>
      </article>)}</div>
    </section>

    <section id="profile" className="profile"><div className="profile-number">05</div><div><p className="micro">RESEARCH APPROACH</p><h2>不急着给答案，<br/>先找到值得回答的问题。</h2></div><ol><li><span>01</span>明确研究问题与决策目标</li><li><span>02</span>结合情境、行为与多方证据</li><li><span>03</span>把发现综合为可行动的洞察</li><li><span>04</span>通过原型与试点继续验证</li></ol></section>

    <footer id="contact"><p className="micro">LET'S WORK TOGETHER</p><h2>下一项研究，<br/>从一个好问题开始。</h2><a href="mailto:your.email@example.com">your.email@example.com <span>↗</span></a><div className="footerline"><span>耀天·董 / 用户研究与服务设计</span><span>London · 2026</span><a href="#top">回到顶部 ↑</a></div></footer>
  </main>
}
