"use client";

import { useEffect, useRef, useState } from "react";

export default function PaceLanguageScroll() {
  const [active, setActive] = useState(0);
  const [system, setSystem] = useState<"wrc" | "crc">("wrc");
  const section = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const update = () => {
      if (!section.current) return;
      const rect = section.current.getBoundingClientRect();
      const distance = Math.max(section.current.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      setActive(progress < 0.45 ? 0 : 1);
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
    <section ref={section} className="pace-language-scroll" aria-label="专业与普通弯道提示切换">
      <div className="pace-language-sticky">
        <header className="pace-language-title">
          <span>06 / TRANSLATION</span>
          <h2>两种提示语言，<br />由驾驶者自己选择。</h2>
          <p>专业路书与普通弯型并列存在。用户可根据经验和习惯随时切换；滚动顺序只用于展示两种模式，不代表使用顺序。</p>
          <div className="pace-mode-switch" aria-label="选择弯道提示模式">
            <button type="button" className={active === 0 ? "on" : ""} onClick={() => setActive(0)}>专业路书</button>
            <button type="button" className={active === 1 ? "on" : ""} onClick={() => setActive(1)}>普通提示</button>
          </div>
        </header>

        <div className="pace-card-stage" aria-live="polite">
          <article className={`pace-story-card pro-card ${active === 0 ? "is-active" : "is-past"}`}>
            <header><span>模式 A</span><b>专业路书</b></header>
            <h3>方向、距离、弯级与连接关系</h3>
            <p className="professional-choice-copy">进入专业模式后，还可以根据个人习惯选择 WRC 或 CRC 编号体系。</p>
            <div className="professional-examples">
              <div><span>WRC 式示例</span><strong>左 2</strong><small>数字越小，弯道越急</small></div>
              <div><span>CRC 式示例</span><strong>左 5</strong><small>数字越大，弯道越急</small></div>
              <div><span>连续关系</span><strong>接右 3</strong><small>弯与弯之间恢复空间很短</small></div>
              <div><span>距离</span><strong>50 m</strong><small>在需要反应前提供准备时间</small></div>
            </div>
            <div className="professional-system-picker" aria-label="选择专业路书编号体系">
              <button type="button" className={system === "wrc" ? "selected" : ""} onClick={() => setSystem("wrc")}><span>选择 WRC 式</span><strong>小数字代表更急的弯</strong></button>
              <button type="button" className={system === "crc" ? "selected" : ""} onClick={() => setSystem("crc")}><span>选择 CRC 式</span><strong>大数字代表更急的弯</strong></button>
            </div>
            <p className="pace-safety">首次使用必须明确当前编号体系，不能让驾驶者猜测数字含义。</p>
          </article>

          <article className={`pace-story-card everyday-card ${active === 1 ? "is-active" : ""}`}>
            <header><span>模式 B</span><b>普通提示</b></header>
            <h3>不用理解数字，也能提前听懂弯型</h3>
            <div className="everyday-examples">
              <div><i>↰</i><strong>左缓弯</strong><small>转向变化较小</small></div>
              <div><i>↰</i><strong>左直角弯</strong><small>接近九十度</small></div>
              <div><i>↶</i><strong>左急弯</strong><small>弯道明显收紧</small></div>
              <div><i>↶</i><strong>左发卡弯</strong><small>接近回头弯</small></div>
            </div>
            <aside><span>普通播报</span><strong>“50 米，左急弯。”</strong></aside>
            <p className="pace-safety">普通名称减少学习成本，同时保留距离、方向和连续弯提示。</p>
          </article>
        </div>

        <div className="pace-language-progress" aria-hidden="true"><i className="on" /><i className={active === 1 ? "on" : ""} /></div>
      </div>
    </section>
  );
}
