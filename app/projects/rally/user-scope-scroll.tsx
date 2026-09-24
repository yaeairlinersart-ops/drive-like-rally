"use client";

import { useEffect, useRef, useState } from "react";

const groups = [
  {
    index: "01",
    level: "需求较低 / 暂不选择",
    title: "摩托车与旅行骑行者",
    scenario: "长途旅行、山路骑行与路线探索；更关注弯道乐趣、坡度和道路状态。",
    problem: "同样关注弯道、坡度与路线趣味，但两轮车辆的操控风险、观察方式和提示节奏与汽车不同。",
    reason: "现阶段若把两轮用户纳入，会混合两种差异很大的安全情境，研究结论难以直接用于汽车驾驶。",
    focus: "未来应单独研究头盔语音、骑行速度、天气暴露与两轮车辆的安全边界。",
    decision: "不进入首轮招募",
  },
  {
    index: "02",
    level: "情境需求高 / 暂缓选择",
    title: "陌生山路上的普通驾驶者",
    scenario: "假期自驾、夜间赶路或偶然进入陌生连续弯；需求强烈但出现频率不稳定。",
    problem: "夜间、连续弯或陌生道路会增加不确定感，但多数人接触山路频率较低，也未必愿意学习额外提示。",
    reason: "需求只在特定旅程中出现，使用频率和接受度尚不明确；应在核心价值成立后再验证大众化表达。",
    focus: "重点验证普通语言是否比专业弯级更容易理解，以及额外语音会带来安心还是干扰。",
    decision: "第二阶段扩展",
  },
  {
    index: "03",
    level: "需求明确 / 首轮选择",
    title: "山路自驾与驾驶爱好者",
    scenario: "主动规划景观路线、周末跑山或长途自驾，经常进入陌生、多弯和视线受限道路。",
    problem: "会主动进入陌生、多弯或视线受限道路，重视驾驶过程，也更频繁遇到普通导航无法表达弯道强度的问题。",
    reason: "痛点出现频率高，能理解弯级信息的价值，也更适合参与早期概念测试并给出具体反馈。",
    focus: "首轮研究关注播报提前量、弯级理解、误报容忍度，以及驾驶时是否减少看屏幕的需要。",
    decision: "核心研究用户",
  },
];

export default function UserScopeScroll() {
  const [active, setActive] = useState(0);
  const section = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const update = () => {
      if (!section.current) return;
      const rect = section.current.getBoundingClientRect();
      const distance = Math.max(section.current.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      setActive(progress < 0.3 ? 0 : progress < 0.58 ? 1 : 2);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={section} className="user-scope-scroll" aria-label="目标用户筛选过程">
      <div className="user-scope-sticky">
        <header className="scope-scroll-title">
          <span>04 / USER SCOPE</span>
          <h2>从需求最小开始，<br />逐步筛选研究对象。</h2>
          <p>不是谁都可能使用，就研究谁。我们比较问题强度、出现频率与研究适配度，明确每一次排除的原因。</p>
        </header>

        <div className="scope-card-stage" aria-live="polite">
          {groups.map((group, index) => (
            <article
              key={group.index}
              className={`scope-story-card ${index === active ? "is-active" : ""} ${index < active ? "is-past" : ""}`}
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <header><span>{group.index}</span><b>{group.level}</b></header>
              <h3>{group.title}</h3>
              <dl>
                <div><dt>典型情境</dt><dd>{group.scenario}</dd></div>
                <div><dt>有什么问题</dt><dd>{group.problem}</dd></div>
                <div><dt>{index === 2 ? "为什么选择" : "为什么不选择"}</dt><dd>{group.reason}</dd></div>
                <div><dt>研究关注</dt><dd>{group.focus}</dd></div>
              </dl>
              <strong>{group.decision}</strong>
            </article>
          ))}
        </div>

        <div className="scope-progress" aria-hidden="true">
          {groups.map((group, index) => <i key={group.index} className={index <= active ? "on" : ""} />)}
        </div>
      </div>

    </section>
  );
}
