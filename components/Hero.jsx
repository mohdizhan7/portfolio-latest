// Hero section — big name, tagline, parallax morphing shapes
const { useEffect, useRef, useState } = React;

function MorphingBlob({ accent, variant = 0 }) {
  const pathRef = useRef(null);
  useEffect(() => {
    let raf, t = variant * 1000;
    const shapes = [
      "M44.7,-58.1C57.3,-48.7,66.5,-33.8,69.5,-17.9C72.5,-1.9,69.3,15.1,60.8,28.2C52.3,41.2,38.5,50.4,23.4,57.2C8.2,64,-8.3,68.5,-22.8,64.4C-37.3,60.3,-49.8,47.7,-57.8,33.1C-65.8,18.5,-69.3,1.9,-66.3,-13.5C-63.3,-28.9,-53.8,-43.1,-41.1,-52.9C-28.4,-62.6,-14.2,-68,1.4,-69.7C17,-71.4,34,-67.5,44.7,-58.1Z",
      "M38.2,-52.8C51.4,-45.3,65.8,-36.7,71.8,-23.7C77.8,-10.7,75.5,6.7,68.3,20.8C61.1,34.9,49,45.7,35.5,54.4C22,63,7.1,69.5,-8.9,69.6C-24.8,69.7,-41.9,63.4,-52.5,51.4C-63.1,39.4,-67.3,21.7,-68.1,3.8C-69,-14.1,-66.6,-32.2,-57.3,-42.1C-48,-52,-31.8,-53.8,-16.7,-56.7C-1.7,-59.6,12.3,-63.8,25.1,-61.3C37.9,-58.8,49.5,-49.6,38.2,-52.8Z",
      "M50.4,-61.7C62.3,-51.8,67.8,-34.2,70.1,-17C72.4,0.2,71.5,17.1,63.5,29.4C55.5,41.8,40.4,49.6,25.1,56.8C9.8,64,-5.8,70.5,-21.7,68.9C-37.6,67.3,-53.9,57.6,-62.8,43.3C-71.7,29,-73.3,10.2,-69.7,-6.8C-66.1,-23.8,-57.4,-38.9,-45,-49.3C-32.5,-59.7,-16.3,-65.4,0.9,-66.4C18,-67.5,36,-63.8,50.4,-61.7Z",
    ];
    const parse = (d) => d.match(/-?\d+(\.\d+)?/g).map(Number);
    const shapesN = shapes.map(parse);
    const toPath = (nums) => {
      const s = shapes[0];
      let i = 0;
      return s.replace(/-?\d+(\.\d+)?/g, () => nums[i++].toFixed(2));
    };
    const loop = () => {
      t += 0.004;
      const p = (Math.sin(t) + 1) / 2;
      const a = shapesN[Math.floor(t / Math.PI) % shapesN.length];
      const b = shapesN[(Math.floor(t / Math.PI) + 1) % shapesN.length];
      const mixed = a.map((v, i) => v * (1 - p) + b[i] * p);
      if (pathRef.current) pathRef.current.setAttribute('d', toPath(mixed));
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [variant]);
  return (
    <svg viewBox="-100 -100 200 200" style={{ width: '100%', height: '100%' }}>
      <path ref={pathRef} fill={accent} opacity="0.9" transform="translate(0 0)" />
    </svg>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setMouse({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouse);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('mousemove', onMouse); };
  }, []);

  const parallax = (depth) => ({
    transform: `translate(${mouse.x * depth}px, ${mouse.y * depth + scrollY * (depth/60)}px)`,
  });

  return (
    <section id="home" ref={heroRef} className="hero">
      {/* Floating morphing shape */}
      <div className="hero__blob" style={parallax(40)}>
        <MorphingBlob accent="var(--accent)" variant={0} />
      </div>

      {/* Index card top-left */}
      <div className="hero__index serif" style={parallax(10)}>
        <div className="eyebrow">Portfolio — Vol. I</div>
        <div style={{ marginTop: 12, fontStyle: 'italic', fontSize: 17, color: 'var(--ink-3)' }}>
          Bengaluru &nbsp;·&nbsp; Est. 2019
        </div>
      </div>

      {/* Meta top-right */}
      <div className="hero__meta" style={parallax(6)}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em' }}>
          <div>N 12° 58′ 19″</div>
          <div>E 77° 35′ 38″</div>
        </div>
      </div>

      <div className="hero__content">
        <div className="eyebrow reveal">The Issue · Supply Chain × Technology</div>

        <h1 className="hero__name serif">
          <span className="split-line"><span className="split-line__inner" style={{ '--d': '0.05s' }}>Mohd.</span></span>
          <span className="split-line"><span className="split-line__inner" style={{ '--d': '0.15s' }}>Izhan <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Shaikh</em></span></span>
        </h1>

        <div className="hero__tagline reveal">
          <p className="serif" style={{ fontSize: 28, lineHeight: 1.3, maxWidth: 760, fontStyle: 'italic', color: 'var(--ink-2)' }}>
            Designing warehouse systems that move <span style={{ color: 'var(--accent)' }}>faster</span> and break <span style={{ textDecoration: 'line-through', color: 'var(--ink-3)' }}>less</span> rarely.
          </p>
        </div>

        <div className="hero__rule reveal"></div>

        <div className="hero__lede reveal">
          <div className="hero__lede-col">
            <div className="mono eyebrow-sm">Role</div>
            <div>Assistant Project Manager, <i>Stackbox</i></div>
          </div>
          <div className="hero__lede-col">
            <div className="mono eyebrow-sm">Specialising in</div>
            <div>WMS &amp; TMS implementation, process design, enterprise rollouts</div>
          </div>
          <div className="hero__lede-col">
            <div className="mono eyebrow-sm">Years</div>
            <div>6+ across FMCG, SaaS &amp; e-commerce supply chains</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll reveal">
        <span className="mono" style={{ fontSize: 10, letterSpacing: '0.25em' }}>SCROLL</span>
        <div className="hero__scroll-line"></div>
      </div>

      {/* Ticker at bottom */}
      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="hero__ticker-group serif">
              <em>P&amp;G</em> · ITC · <em>Nestlé</em> · HUL Samadhan · DTDC · <em>Edgistify</em> · Mindseed · StackBOX ·&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.MorphingBlob = MorphingBlob;
