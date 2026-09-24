import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santander Cycles｜耀天·董作品集",
  description: "通过竞品研究、用户旅程与试点规划，探索用户为何难以信任共享单车服务。",
  openGraph: {
    title: "Santander Cycles｜服务设计案例",
    description: "从市场竞争与旅程不确定性出发，重构公共自行车服务体验。",
    images: ["/projects/santander-cover.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santander Cycles｜服务设计案例",
    description: "从市场竞争与旅程不确定性出发，重构公共自行车服务体验。",
    images: ["/projects/santander-cover.webp"],
  },
};

export default function SantanderProject() {
  return (
    <main className="case-page">
      <header className="case-nav">
        <a href="/" className="logo">YT<span>.</span></a>
        <a href="/#work" className="case-back">← 返回项目</a>
      </header>

      <section className="case-cover" aria-label="Santander Cycles 项目封面">
        <img src="/projects/santander-cover.webp" alt="伦敦公共交通服务：桩式共享单车如何在竞争中生存" />
      </section>

      <section className="case-competitor" aria-label="竞品分析">
        <img src="/projects/santander-competitor.webp" alt="Brompton、Santander Cycles 与 Lime 三种共享单车模式对比" />
        <div className="competitor-analysis">
          <div className="analysis-intro">
            <p>DESK RESEARCH · COMPETITOR LANDSCAPE</p>
            <h2>先研究不同模式，<br/>如何分配用户负担。</h2>
            <span>这一阶段用于建立研究假设：比较的不是功能多少，而是谁承担寻找车辆、规划路线和处理异常的成本。</span>
          </div>
          <div className="competitor-grid">
            <article className="competitor-card brompton">
              <header><span>01</span><b>Brompton Bike Hire</b></header>
              <h3>品质与明确用途</h3>
              <p>储物柜取车与折叠车体验适合更长时段使用，但站点较少、费用较高，服务范围相对集中。</p>
              <dl><div><dt>优势</dt><dd>车辆品质高</dd></div><div><dt>摩擦</dt><dd>地点少、成本高</dd></div></dl>
            </article>
            <article className="competitor-card santander">
              <header><span>02</span><b>Santander Cycles</b></header>
              <h3>清晰的公共网络</h3>
              <p>固定站点让服务结构容易理解，但空站、满站和调度压力会把不确定性留给正在赶时间的用户。</p>
              <dl><div><dt>优势</dt><dd>站点清晰、覆盖广</dd></div><div><dt>摩擦</dt><dd>可靠性依赖网络平衡</dd></div></dl>
            </article>
            <article className="competitor-card lime">
              <header><span>03</span><b>Lime</b></header>
              <h3>即时与空间灵活</h3>
              <p>无桩模式降低取还车限制，更适合临时决策；代价是车辆位置、可用性与街道管理持续变化。</p>
              <dl><div><dt>优势</dt><dd>取还灵活、决策快</dd></div><div><dt>摩擦</dt><dd>可用性与停放波动</dd></div></dl>
            </article>
          </div>
          <aside className="analysis-conclusion">
            <span>待验证的研究假设</span>
            <strong>固定站点未必只是限制；如果能够降低不确定性，它也可能成为用户信任服务的理由。</strong>
          </aside>
        </div>
      </section>

      <section className="journey-page" aria-label="用户旅程与关键痛点">
        <header className="journey-heading">
          <p>JOURNEY SYNTHESIS · 03</p>
          <h2>把零散摩擦放回旅程，<br/>寻找信心下降的时刻。</h2>
          <span>旅程图把竞品研究与已识别的服务摩擦组织成待验证的问题框架；它不是访谈结论，也不替代后续实地研究。</span>
        </header>

        <div className="journey-track">
          <article><span>01</span><b>计划出发</b><p>查看附近站点与车辆数量</p><i>期待</i></article>
          <article className="pain"><span>02</span><b>判断可用性</b><p>当前有车，不代表到达时仍然有车</p><i>不确定</i></article>
          <article><span>03</span><b>开始骑行</b><p>完成解锁并选择目的地</p><i>进入服务</i></article>
          <article className="pain"><span>04</span><b>选择路线</b><p>最快路线未必是更安心的路线</p><i>紧张</i></article>
          <article className="pain"><span>05</span><b>寻找空桩</b><p>满站意味着绕行、超时与额外成本</p><i>受挫</i></article>
        </div>

        <div className="journey-needs">
          <div><span>出发前</span><strong>显示到达时的可用信心，而不只是当前数量。</strong></div>
          <div><span>骑行中</span><strong>解释速度、舒适度与保护设施之间的差异。</strong></div>
          <div><span>还车前</span><strong>满站时主动重导，并保护因绕行增加的时间。</strong></div>
        </div>

        <aside className="journey-insight">
          <span>综合洞察</span>
          <strong>可靠性不是单个触点的表现，而是用户能否带着信心完成整段旅程。</strong>
        </aside>
      </section>

      <section className="ridesure-page" aria-label="RideSure 服务方案">
        <header className="ridesure-heading">
          <p>INSIGHT TO HYPOTHESIS · 04</p>
          <h2>把洞察转化为<br/>四个可验证假设。</h2>
          <span>RideSure 是研究综合后的概念载体：用原型检验预测、选择与补救能否提升用户信心，而不是把概念本身当作结论。</span>
        </header>

        <div className="ridesure-principles">
          <article><span>01</span><h3>预测</h3><p>估计用户到达时的车辆与空桩状态，而不只显示此刻数量。</p><b>信心范围 + 替代站点</b></article>
          <article><span>02</span><h3>准备</h3><p>条件可能失效时提前通知，让用户在出发前完成选择。</p><b>偏好路线 + 短时保留</b></article>
          <article><span>03</span><h3>引导</h3><p>解释路线在速度、舒适度与保护设施方面的差异。</p><b>透明标签 + 简洁更新</b></article>
          <article><span>04</span><h3>补救</h3><p>目的地满站时主动重新引导，减少异常造成的额外成本。</p><b>时间保护 + 公平收费</b></article>
        </div>

        <div className="service-flow">
          <header><span>前台旅程</span><b>用户看到和操作的内容</b></header>
          <ol><li>计划目的地</li><li>检查信心</li><li>开始骑行</li><li>路线更新</li><li>确认还车</li><li>一键反馈</li></ol>
        </div>

        <div className="service-backstage">
          <header><span>后台支持</span><b>让体验真正成立的系统</b></header>
          <div><p><strong>预测模型</strong>需求与站点状态</p><p><strong>运营调度</strong>车辆再平衡与维护</p><p><strong>路线数据</strong>道路与骑行设施</p><p><strong>治理机制</strong>偏差、公平与投诉审查</p></div>
        </div>

        <aside className="ridesure-rule"><span>服务原则</span><strong>表达不确定性，而不是隐藏它；提供补救，而不是把风险留给用户。</strong></aside>
      </section>

      <section className="community-page" aria-label="社区协作再平衡">
        <header className="community-heading">
          <p>BEHAVIOURAL HYPOTHESIS · 05</p>
          <h2>用户是否愿意用少量绕行，<br/>交换费用减免与共同价值？</h2>
          <span>当附近站点即将缺车或满站时，系统发布自愿调度任务，用费用减免补偿额外时间与距离。</span>
        </header>

        <div className="community-demo">
          <div className="task-card">
            <header><span>附近任务</span><b>距离你 300 米</b></header>
            <div className="station-route"><i>A</i><em>当前还车点</em><span>→</span><i>B</i><em>需要补充车辆</em></div>
            <h3>将车辆归还到前方站点</h3>
            <p>预计增加 4 分钟 · 帮助附近使用者更快找到车辆</p>
            <div className="reward"><span>任务奖励</span><strong>£0.50 骑行减免</strong></div>
            <button type="button">接受任务</button>
          </div>
          <div className="community-copy">
            <p>不是建立复杂的社交平台，<br/>而是形成轻量的任务型社区。</p>
            <ol><li><span>01</span><b>系统识别需求</b><small>预测即将缺车或满站的区域</small></li><li><span>02</span><b>邀请附近用户</b><small>显示距离、时间与明确补偿</small></li><li><span>03</span><b>完成重新分配</b><small>还车后自动发放减免或积分</small></li><li><span>04</span><b>形成共同目标</b><small>让街区看到集体贡献的结果</small></li></ol>
          </div>
        </div>

        <div className="community-values">
          <article><span>对用户</span><strong>额外付出得到即时、透明的回报。</strong></article>
          <article><span>对运营</span><strong>辅助车辆再平衡，减少部分调度压力。</strong></article>
          <article><span>对社区</span><strong>把个人骑行转化为街区共同改善。</strong></article>
        </div>

        <aside className="community-guardrail"><span>公平底线</span><strong>任务必须自愿，奖励应补偿额外时间与距离，不能把运营责任转移给低收入用户。</strong></aside>
      </section>

      <section className="validation-page" aria-label="试点验证与衡量">
        <header className="validation-heading">
          <p>RESEARCH PLAN · 06</p>
          <h2>方案必须通过真实行为验证，<br/>而不只是能够上线。</h2>
          <span>试点同时关注用户信心、运营效果、公平性与风险，避免单纯以功能完成度判断成功。</span>
        </header>

        <div className="pilot-roadmap">
          <article><span>0–6 周</span><h3>验证</h3><p>访谈骑行者、非骑行者和一线员工，建立信心与旅程完成率基线。</p></article>
          <article><span>6–12 周</span><h3>原型</h3><p>测试信心显示、路线标签和异常补救信息是否容易理解。</p></article>
          <article><span>3–6 个月</span><h3>试点</h3><p>在有限区域连接预测、车辆调度与维护决策，观察真实行为变化。</p></article>
          <article><span>6 个月后</span><h3>决策</h3><p>仅在服务可靠、公平且没有明显副作用时扩大实施范围。</p></article>
        </div>

        <div className="validation-columns">
          <div className="metric-panel">
            <header><span>成功指标</span><b>从体验到运营</b></header>
            <ul><li><strong>旅程完成率</strong><span>是否避免被迫更换交通方式</span></li><li><strong>补救时间</strong><span>满站或无车增加的分钟数</span></li><li><strong>使用者信心</strong><span>信息清楚度与路线安全感</span></li><li><strong>公平性</strong><span>不同地区和群体之间的差异</span></li><li><strong>运营表现</strong><span>调度投入与故障解决效率</span></li></ul>
          </div>
          <div className="risk-panel">
            <header><span>风险保护</span><b>上线之前必须回答</b></header>
            <ul><li><strong>错误信心</strong><span>显示范围，不作绝对保证</span></li><li><strong>利益不均</strong><span>按地区与群体持续审查</span></li><li><strong>隐私</strong><span>减少保留并聚合使用数据</span></li><li><strong>数字排斥</strong><span>终端与街边信息保持同步</span></li><li><strong>安全责任</strong><span>采用可验证的路线标签</span></li></ul>
          </div>
        </div>

        <aside className="final-reflection"><span>项目反思</span><strong>AI 只是支持机制；真正的价值，是让不确定性、选择与补救变得可理解，并让用户参与定义规则。</strong></aside>
      </section>

      <section className="case-next">
        <p>END OF CASE STUDY</p>
        <h2>从竞争压力出发，<br/>回到一次完整旅程。</h2>
        <a href="/#work">查看其他项目 ↗</a>
      </section>
    </main>
  );
}
