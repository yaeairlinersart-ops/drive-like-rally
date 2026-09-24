import type { Metadata } from "next";
import "./rally.css";
import UserScopeScroll from "./user-scope-scroll";
import PaceLanguageScroll from "./pace-language-scroll";

export const metadata: Metadata = {
  title: "山路领航｜耀天·董作品集",
  description: "通过道路安全文献、用户范围与竞品研究，探索驾驶者如何在盲弯前建立正确预期。",
  openGraph: { title: "山路领航｜导航产品设计案例", description: "自动识别弯道等级，以中文语音提前播报，帮助驾驶者更早理解前方道路。", images: ["/projects/rally/icon.png"] },
};

export default function RallyProject(){
  return <main className="rally-case">
    <section className="rally-page rally-hero">
      <div className="rally-eyebrow">01 / EXPLORATORY USER RESEARCH · WORKING PROTOTYPE</div>
      <div className="rally-hero-copy"><p>RALLY NAVIGATOR</p><h1 className="sr-only">山路领航</h1><img className="rally-title-lockup" src="/projects/rally/rally-title-lockup.png" alt="山路领航"/><h2>让驾驶者在看见弯道之前，<br/>先理解弯道。</h2></div>
      <div className="rally-film"><video src="/projects/rally/night-drive.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="夜间山路驾驶画面"/><span>REAL ROAD · NIGHT DRIVE</span></div>
      <div className="rally-meta"><span>个人项目</span><span>桌面研究 + 需求综合</span><span>可运行原型验证</span><span>2026</span></div>
    </section>
    <section className="pdf-snapshot pdf-snapshot-2"><img src="/projects/rally/pdf-page-02.png" alt="项目起源：普通导航不会告诉驾驶者弯道有多急"/></section>
    <section className="pdf-snapshot pdf-snapshot-3"><img src="/projects/rally/pdf-page-03.png" alt="背景研究：弯道是道路风险最高的路段"/><div className="pdf-source-links" aria-label="研究来源链接"><a className="source-1" href="https://www.fhwa.dot.gov/publications/research/safety/12073/index.cfm" target="_blank" rel="noreferrer" aria-label="打开美国联邦公路管理局研究来源"/><a className="source-2" href="https://doi.org/10.11175/easts.15.2367" target="_blank" rel="noreferrer" aria-label="打开连续水平曲线辨识研究来源"/><a className="source-3" href="https://doi.org/10.1016/j.jsr.2017.10.001" target="_blank" rel="noreferrer" aria-label="打开乡村双车道弯道事故研究来源"/><a className="source-4" href="https://doi.org/10.1177/03611981231208901" target="_blank" rel="noreferrer" aria-label="打开弯道几何与单车事故研究来源"/></div></section>
    <section className="rally-page pdf-origin">
      <div className="pdf-origin-copy"><span>02 / RESEARCH FRAMING</span><h2>普通导航只告诉你该往哪走，<br/>但不会告诉你弯会有多急。</h2><p>我从自己的长途驾驶经历形成初始问题，再把“盲弯焦虑”拆解为视觉信息、地图表达与注意力占用三个可研究因素，避免直接从个人感受跳到解决方案。</p></div>
      <figure className="pdf-origin-photo"><img src="/projects/rally/origin-road.jpg" alt="森林中的连续山路弯道俯视图"/></figure>
      <div className="pdf-origin-problems"><article><b>01</b><h3>视觉信息滞后</h3><p>驾驶者往往在进入弯道后，才真正意识到弯道有多急；部分限速路标缺少，无法判断以什么速度进入弯道。</p></article><article><b>02</b><h3>导航信息表达扁平</h3><p>导航只会指挥路口的行进方向；遇到弯道只会说有急弯，所以，到底有多急？</p></article><article><b>03</b><h3>注意力被占用</h3><p>想要知道弯道的弯度，驾驶者只能在行车时看一眼导航地图。</p></article></div>
      <aside className="pdf-origin-question">研究问题：驾驶者在进入陌生盲弯前，需要什么信息、在什么时机、以何种方式出现，才能建立预期而不增加分心？</aside>
    </section>
    <section className="rally-page rally-research">
      <div className="research-heading"><span>03 / DESK RESEARCH</span><h2>用道路安全证据<br/>校准个人经验</h2></div>
      <figure className="research-photo"><img src="/projects/rally/curve-warning.jpg" alt="山路旁的连续弯道事故易发路段警示牌"/></figure>
      <div className="research-grid">
        <article><strong>弯道半径、道路熟悉度和警示时机会影响驾驶者的速度选择与车辆控制。</strong><p>来源：美国联邦公路管理局<br/>《使用驾驶模拟器评估乡村双车道水平弯曲道路上的驾驶员表现》</p><a href="https://www.fhwa.dot.gov/publications/research/safety/12073/index.cfm" target="_blank" rel="noreferrer">打开来源页面 ↗</a></article>
        <article><strong>驾驶员可能无法准确判断弯道急缓程度，尤其是在连续弯道路段。</strong><p>Atif, M., Sil, G., &amp; Maji, A. (2024). Influence of socio-demographic, experience, and geometric factors on drivers&apos; ability to distinguish sharpness of consecutive horizontal curves.</p><a href="https://doi.org/10.11175/easts.15.2367" target="_blank" rel="noreferrer">打开来源页面 ↗</a></article>
        <article><strong>车速过快是弯道事故最常见的原因之一。<br/>视觉分心会使弯道碰撞的可能性增加 3 倍。</strong><p>Wang, B., Hallmark, S., Savolainen, P., &amp; Dong, J. (2017). Crashes and near-crashes on horizontal two-lane highways.</p><a href="https://doi.org/10.1016/j.jsr.2017.10.001" target="_blank" rel="noreferrer">打开来源页面 ↗</a></article>
        <article><strong>复合弯道和反向弯道相比单一弯道，风险更高。<br/>左转弯道相比右转弯道，单车事故风险更高。</strong><p>Chakraborty, M., &amp; Gates, T. J. (2023). Relationship between horizontal curve geometry and single-vehicle crash occurrence.</p><a href="https://doi.org/10.1177/03611981231208901" target="_blank" rel="noreferrer">打开来源页面 ↗</a></article>
      </div>
      <aside className="research-goal"><span>研究综合</span><strong>风险并非只来自“弯道”，而来自急缓判断、连续关系、道路熟悉度与提示时机的共同作用。</strong></aside>
    </section>
    <section className="rally-page rally-origin"><header className="rally-head"><span>02 / ORIGIN</span><h2>普通导航告诉你往哪走，<br/>却很少告诉你弯有多急。</h2><p>项目源于我作为拉力赛爱好者的真实长途驾驶经历：山路弯道经常被地形遮挡，地图上的一条折线无法传达弯道强度、连续关系和即将到来的驾驶负荷。</p></header><div className="rally-problems"><article><span>01</span><h3>视觉信息滞后</h3><p>驾驶者往往进入弯道后，才真正意识到弯有多急。</p></article><article><span>02</span><h3>地图表达扁平</h3><p>普通转向提示无法区分缓弯、急弯、直角弯与发卡弯。</p></article><article><span>03</span><h3>注意力被占用</h3><p>在复杂道路上频繁查看屏幕，会增加驾驶负担。</p></article></div><aside className="rally-question"><span>设计问题</span><strong>如何把拉力赛中“提前读路”的能力，转化为安全、易懂、适合日常驾驶的导航辅助？</strong></aside></section>
    <PaceLanguageScroll />
    <section className="rally-page rally-system"><header className="rally-head"><span>04 / HOW IT WORKS</span><h2>把地图路线，转换成<br/>可以被播报的路书。</h2><p>原型不是静态界面：路线会被重新采样、分析转向角度与曲率，再根据驾驶位置持续选择接下来两条路书。</p></header><div className="system-flow">{[["01","获取路线","Google / 高德路线点"],["02","重新采样","统一为约 8 米间隔"],["03","识别弯道","方向、角度、长度与半径"],["04","生成弯级","1–6 / SQ / HP"],["05","实时播报","结合车辆沿路线的位置"]].map((x,i)=><div className="flow-wrap" key={x[0]}><article><span>{x[0]}</span><b>{x[1]}</b><p>{x[2]}</p></article>{i<4&&<i>→</i>}</div>)}</div><div className="curve-demo"><div className="curve-line"><span/><span/><span/></div><div><span>算法原型</span><h3>让道路形状成为可计算、可解释的信息。</h3><p>同方向连续曲线会被合并；普通转弯不会因采样误差被误判成发卡弯；偏离路线时重新搜索最近位置。</p></div></div></section>
    <section className="rally-page rally-experience"><header className="rally-head light"><span>05 / EXPERIENCE</span><h2>既能自动领航，<br/>也支持两个人协作。</h2><p>同一套产品同时照顾独自驾驶和双人出行：系统可自动播报，副驾驶也能切换领航员模式，手动触发弯级。</p></header><div className="experience-grid"><article><span>AUTO ROADBOOK</span><h3>自动路书</h3><p>根据 GPS 位置持续更新前方弯道，自动用中文或英文播报。</p><div className="mini-roadbook"><b>50 m</b><strong>左 3</strong><small>接 · 右 2</small></div></article><article><span>CO-DRIVER MODE</span><h3>领航员模式</h3><p>副驾驶可以选择左右方向与弯级，点击后立即播报，保留真实拉力协作感。</p><div className="grade-pad">{["1","2","3","4","5","6","SQ","HP"].map(x=><i key={x}>{x}</i>)}</div></article></div><div className="feature-strip"><span>左右舵布局</span><span>横竖屏切换</span><span>白天 / 夜间模式</span><span>地图图钉选点</span><span>途经点规划</span><span>中英双语</span></div></section>
    <section className="rally-page rally-build"><header className="rally-head"><span>06 / PROTOTYPE</span><h2>从想法到可安装的<br/>Android 原型。</h2><p>项目经历了浏览器交互原型、路线算法测试、Android 封装与真机安装包构建。设计决策通过可运行产品验证，而不是停留在效果图。</p></header><div className="build-grid">{[["01","地图接入","Google Maps 与高德双地图，根据中英文场景切换。"],["02","路线引擎","实现弯道分析、路线定位、连续弯合并与彩色曲线分段。"],["03","语音系统","使用设备 TTS 播报自动路书，并审查社区语音包版权。"],["04","移动端交付","完成 Expo / Android 构建，形成可安装测试版本。"]].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div><div className="testing"><span>已验证</span><strong>路书格式、距离格式、路线重采样、弯级分类、连续弯合并、即将到来路书与地图朝向。</strong></div></section>
    <section className="rally-page rally-competitors"><header className="rally-head"><span>COMPETITOR LANDSCAPE</span><h2>现有工具各自擅长一段，<br/>却没有连接完整体验。</h2><p>我们没有只比较功能数量，而是观察驾驶者在出发前、进入山路和连续弯中，如何获得路线选择、弯道预判与低干扰提示。</p></header><div className="competitor-table"><div className="competitor-labels"><span>方案类型</span><span>路线规划</span><span>弯道强度</span><span>提前语音</span><span>领航协作</span><span>日常可用</span></div><article><div><h3>通用地图导航</h3><p>Google Maps / 高德</p></div><b>强</b><b>弱</b><b>转向提示</b><b>无</b><b>强</b></article><article><div><h3>山路路线应用</h3><p>景观路线 / 摩托路线工具</p></div><b>强</b><b>部分</b><b>有限</b><b>无</b><b>中</b></article><article><div><h3>专业拉力工具</h3><p>路书制作与赛事系统</p></div><b>专项</b><b>强</b><b>依赖领航员</b><b>强</b><b>弱</b></article><article className="rally-position"><div><h3>山路领航</h3><p>日常导航 × 拉力路书</p></div><b>强</b><b>1–6 / SQ / HP</b><b>自动播报</b><b>自动 / 手动</b><b>强</b></article></div><div className="competitor-insights"><article><span>市场空白 01</span><strong>通用导航缺少对“弯有多急”的表达。</strong></article><article><span>市场空白 02</span><strong>专业拉力工具准确，但学习与使用门槛高。</strong></article><article><span>设计机会</span><strong>把专业路书语言翻译成日常驾驶者能听懂的实时辅助。</strong></article></div><div className="rally-end"><span>COMPETITOR LANDSCAPE · POSITIONING</span><a href="/">返回产品首页 ↗</a></div></section>
    <UserScopeScroll />

    <section className="rally-page market-page market-positioning">
      <header className="market-title"><span>RESEARCH SYNTHESIS</span><h2>机会假设位于大众导航<br/>与专业路书之间。</h2><p>竞品证据说明现有产品分别解决抵达、路线乐趣或赛事精度；下一步需要通过用户研究判断，日常驾驶者是否真正需要弯级表达、提前语音与领航协作。</p></header>
      <div className="position-map"><div className="axis-y">专业道路表达 ↑</div><div className="position-dot maps"><b>Google / 高德</b><small>到达效率</small></div><div className="position-dot moto"><b>calimoto / Garmin</b><small>曲线路线</small></div><div className="position-dot pro"><b>专业拉力工具</b><small>精确但门槛高</small></div><div className="position-dot ours"><b>山路领航</b><small>日常使用 × 路书预判</small></div><div className="axis-x">日常可用性 →</div></div>
      <div className="market-gap"><article><span>市场信号</span><h3>用户愿意为“更有驾驶感的路线”付费。</h3><p>calimoto 官方披露超过100万用户；Garmin也持续提供偏好弯道与丘陵的摩托导航。</p><a href="https://calimoto.com/" target="_blank" rel="noreferrer">来源 ↗</a></article><article><span>产品空白</span><h3>选出弯路，不等于解释每一个弯。</h3><p>差异化重点不是复制曲线路线，而是实时表达前方弯道强度与连接关系。</p></article><article className="gap-blue"><span>建议定位</span><h3>驾驶爱好者的弯道预判导航。</h3><p>把拉力路书翻译成简短、低干扰、适合日常山路驾驶的语音辅助。</p></article></div>
      <div className="market-mvp"><div><span>第一阶段市场</span><strong>有山路或长途自驾经验、使用手机导航、重视驾驶过程的18–40岁驾驶爱好者。</strong></div><ol><li>规划或导入路线</li><li>自动识别弯道</li><li>播报方向、弯级与距离</li><li>调整播报提前量</li><li>普通语言 / 专业弯级切换</li><li>明确驾驶辅助边界</li></ol></div>
      <aside className="market-position-statement"><span>POSITIONING</span><strong>不是替代道路观察，而是在视线到达之前，用声音建立预期。</strong></aside>
    </section>
  </main>;
}
