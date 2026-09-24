import type { Metadata } from "next";
import "./tfl.css";

export const metadata: Metadata = {
  title: "TU–BE｜耀天·董作品集",
  description: "通过旅程分析与行为假设，研究公交等待中的焦虑、掌控感与公共空间参与。",
  openGraph: { title: "TU–BE｜公共体验设计案例", description: "通过轻量运动、能量反馈与环境灯光，重新设计伦敦公交站的等待体验。", images: ["/projects/tube/cover.jpg"] },
};

const journey = [
  ["01", "走向站点", "检查时间，开始担心是否错过公交", "期待"],
  ["02", "进入等待", "到站信息有限，注意力转向手机", "不确定"],
  ["03", "反复确认", "持续看表与看路，等待被感知得更漫长", "焦虑"],
  ["04", "公交出现", "重新投入环境，准备登车", "放松"],
  ["05", "完成登车", "候车结束，但这段时间没有留下价值", "离开"],
];

export default function TflProject() {
  return <main className="tube-case">
    <header className="tube-nav"><a href="/" className="logo">YT<span>.</span></a><span>TU–BE · 公共体验设计</span><a href="/#work">← 返回项目</a></header>

    <section className="tube-page tube-hero" aria-label="TU-BE 项目封面">
      <div className="tube-kicker">01 · PUBLIC SPACE USER RESEARCH</div>
      <div className="tube-hero-copy"><p>YOUR PHONE WON’T MAKE<br/>THE BUS ARRIVE SOONER!</p><h1>TU<span>–</span>BE</h1><h2>让等待，不再是城市体验中的空白。</h2></div>
      <figure><img src="/projects/tube/cover.jpg" alt="TU-BE 原项目封面"/></figure>
      <div className="tube-meta"><span>探索性用户研究</span><span>旅程综合</span><span>概念验证</span><span>伦敦 · 2025</span></div>
    </section>

    <section className="tube-page tube-problem" aria-label="问题背景">
      <header className="tube-section-head"><span>02 · RESEARCH FRAMING</span><h2>研究的不是公交站，<br/>而是人在等待中失去什么。</h2><p>我们把候车视为一种高频、短时却情绪敏感的过渡情境，重点关注信息、行动与掌控感如何影响主观等待体验。</p></header>
      <div className="tube-problem-grid"><article><b>被动环境</b><p>站点主要承担遮蔽与信息功能，很少回应人的情绪和身体状态。</p></article><article><b>时间焦虑</b><p>不断看表、看路和刷新手机，放大了不确定感。</p></article><article><b>注意力逃离</b><p>手机成为默认消遣，却进一步切断人与周围空间的联系。</p></article></div>
      <figure className="tube-source-card"><img src="/projects/tube/matrix.jpg" alt="原研究中的体验矩阵"/><figcaption><span>探索性框架</span><strong>TfL 在“实用”层面成熟；“沉浸与参与”是否构成真实需求，还需要现场研究验证。</strong></figcaption></figure>
    </section>

    <section className="tube-page tube-user" aria-label="用户与旅程">
      <header className="tube-section-head light"><span>03 · JOURNEY HYPOTHESIS</span><h2>等待越不可控，<br/>时间可能越漫长。</h2><p>以日常通勤者为切口，我们把候车拆成连续的行为与情绪假设，明确后续观察和访谈需要验证的关键时刻。</p></header>
      <div className="tube-persona"><div><span>核心用户</span><h3>Neil · 22</h3><p>大学生，每天从伦敦二区前往 Canary Wharf。路线熟悉，但对延误和不确定等待非常敏感。</p></div><img src="/projects/tube/persona.jpg" alt="原项目中的用户画像"/></div>
      <div className="tube-journey">{journey.map(([n,t,d,e],i)=><article key={n} className={i===1||i===2?"is-pain":""}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>{e}</b></article>)}</div>
      <aside className="tube-insight"><span>待验证洞察</span><strong>影响等待体验的可能不只是时长，还包括反馈不足、无事可做与缺乏掌控感。</strong></aside>
    </section>

    <section className="tube-page tube-opportunity" aria-label="机会定义">
      <header className="tube-section-head"><span>04 · SYNTHESIS & CRITERIA</span><h2>把研究问题转化为<br/>可比较的设计准则。</h2><p>我们用参与门槛、包容性、维护成本与即时反馈筛选早期方向，将范围收敛为更小、可选、可嵌入既有站点的互动。</p></header>
      <div className="tube-choice"><div className="tube-rejected"><span>放弃的方向</span><article><b>大型绿化装置</b><small>维护与空间成本过高</small></article><article><b>固定游乐设施</b><small>容易排除部分年龄与身体条件</small></article><article><b>复杂数字屏幕</b><small>继续强化屏幕依赖</small></article></div><div className="tube-criteria"><span>设计准则</span><h3>微小、可选、会回应。</h3><ul><li>动作简单，不要求学习</li><li>参与自愿，旁观者同样受益</li><li>适配现有公交站，降低改造成本</li><li>反馈即时，让付出可以被看见</li></ul></div></div>
      <figure className="tube-wide-source"><img src="/projects/tube/opportunity.jpg" alt="原项目中的机会矩阵"/></figure>
    </section>

    <section className="tube-page tube-concept" aria-label="TU-BE 服务概念">
      <header className="tube-section-head light"><span>05 · RESEARCH PROBE</span><h2>用可体验的概念，<br/>测试行动与反馈是否有效。</h2><p>Concrete Garden 不是最终答案，而是一组研究刺激物：脚踏、手摇与环境灯光帮助我们观察人们是否愿意参与、如何理解反馈，以及旁观者是否同样受益。</p></header>
      <div className="tube-concept-visual"><img src="/projects/tube/concept.jpg" alt="TU-BE 互动公交站概念图"/><div><span>TU–BE</span><h3>人投入一点动作，<br/>基础设施给出一点回应。</h3><p>参与者获得短暂运动与可见反馈；不参与的人也共享更明亮、更有活力的候车环境。</p></div></div>
      <div className="tube-elements"><article><span>01</span><b>轻量运动</b><p>脚踏、手摇、发声，适配不同参与方式。</p></article><article><span>02</span><b>能量反馈</b><p>动作产生的能量通过灯光立即可见。</p></article><article><span>03</span><b>到站提示</b><p>灯光变化把公交接近变成环境信号。</p></article><article><span>04</span><b>共同受益</b><p>无需强制互动，整个站点都获得改善。</p></article></div>
    </section>

    <section className="tube-page tube-flow" aria-label="体验流程与服务机制">
      <header className="tube-section-head"><span>06 · TESTABLE EXPERIENCE</span><h2>把体验拆成行为节点，<br/>才能逐步验证。</h2><p>这条流程把看见、选择、行动、反馈与登车拆开，便于在原型测试中定位用户在哪一步犹豫、误解或退出。</p></header>
      <ol className="tube-flowline"><li><span>01</span><b>到达</b><p>看见可参与的装置</p></li><li><span>02</span><b>选择</b><p>自由选择脚踏、手摇或旁观</p></li><li><span>03</span><b>行动</b><p>短暂运动打断焦虑循环</p></li><li><span>04</span><b>反馈</b><p>灯光回应能量贡献</p></li><li><span>05</span><b>提示</b><p>灯光柔和提示公交接近</p></li><li><span>06</span><b>登车</b><p>带着完成感结束等待</p></li></ol>
      <div className="tube-system"><div><span>前台体验</span><strong>互动装置 · 环境灯光 · 到站提示</strong></div><div><span>后台支持</span><strong>车辆实时数据 · 能量储存 · 设施维护</strong></div><div><span>公共价值</span><strong>身心激活 · 社会可见性 · 更安全的夜间环境</strong></div></div>
      <figure className="tube-mockups"><img src="/projects/tube/mockup.jpg" alt="TU-BE 方案原型与效果展示"/></figure>
    </section>

    <section className="tube-page tube-validation" aria-label="试点验证与反思">
      <header className="tube-section-head light"><span>07 · RESEARCH PLAN & LIMITS</span><h2>下一步不是继续美化，<br/>而是进入真实站点研究。</h2><p>建议先在 Canary Wharf 周边开展短时观察与拦截访谈，再进行低保真现场测试，逐步验证体验价值、包容性与运营可行性。</p></header>
      <div className="tube-validation-grid"><article><span>体验</span><h3>等待是否变短了？</h3><p>比较参与前后的主观等待时长、焦虑程度与环境满意度。</p></article><article><span>行为</span><h3>谁愿意参与？</h3><p>观察不同年龄、身体条件与时间情境下的参与和旁观行为。</p></article><article><span>环境</span><h3>空间是否更安全？</h3><p>记录夜间可见度、停留分布与人们对站点氛围的评价。</p></article><article><span>运营</span><h3>能否长期维护？</h3><p>验证耐用性、清洁频率、能量贡献与维修成本。</p></article></div>
      <div className="tube-reflection"><span>项目反思</span><h3>原报告提出了有吸引力的概念，但研究仍偏解释性。下一步应通过现场观察、跟随访谈和可用原型，把“有趣”转化为可验证的公共价值。</h3></div>
      <div className="tube-end"><p>TU–BE / TRANSFORMING WAITING INTO EXPERIENCE</p><a href="/#work">查看其他项目 ↗</a></div>
    </section>
  </main>;
}
