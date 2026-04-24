// Tweaks panel + main app
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "red",
  "pairing": "instrument-geist",
  "animation": "rich",
  "cardStyle": "editorial",
  "heroStyle": "editorial"
}/*EDITMODE-END*/;

// Apply tweaks to document
function applyTweaks(t) {
  const root = document.documentElement;
  root.setAttribute('data-theme', t.theme);
  root.setAttribute('data-accent', t.accent);
  root.setAttribute('data-pairing', t.pairing);
  root.setAttribute('data-animation', t.animation);
  root.setAttribute('data-card', t.cardStyle);
  root.setAttribute('data-hero', t.heroStyle);
}

function TweaksPanel({ state, setState, visible, onClose }) {
  if (!visible) return null;
  const set = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    applyTweaks(next);
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*'); } catch (e) {}
  };
  const accents = [
    ['red', '#c7422a'], ['indigo', '#2c3741'], ['blue', '#216fe5'],
    ['olive', '#6b7a2d'], ['plum', '#6b2a4c'], ['tangerine', '#e06a1c'],
  ];
  return (
    <div className="tweaks">
      <div className="tweaks__head">
        <span className="tweaks__title">Tweaks</span>
        <button className="tweaks__close" onClick={onClose}>✕</button>
      </div>

      <div className="tweaks__group">
        <span className="tweaks__label">Theme</span>
        <div className="tweaks__opts">
          {['light','dark'].map((m) => (
            <button key={m} className={`tweaks__opt ${state.theme===m?'is-active':''}`} onClick={()=>set('theme',m)}>{m}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__group">
        <span className="tweaks__label">Accent</span>
        <div className="tweaks__opts">
          {accents.map(([k, c]) => (
            <button key={k} className={`tweaks__swatch ${state.accent===k?'is-active':''}`} style={{ background: c }} onClick={()=>set('accent',k)} title={k} />
          ))}
        </div>
      </div>

      <div className="tweaks__group">
        <span className="tweaks__label">Font pairing</span>
        <div className="tweaks__opts">
          {[
            ['instrument-geist','Instrument · Geist'],
            ['fraunces-geist','Fraunces · Geist'],
            ['playfair-spacegrotesk','Playfair · Space Gro.'],
            ['dmserif-dmsans','DM Serif · DM Sans'],
          ].map(([k, lbl]) => (
            <button key={k} className={`tweaks__opt ${state.pairing===k?'is-active':''}`} onClick={()=>set('pairing',k)}>{lbl}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__group">
        <span className="tweaks__label">Animation</span>
        <div className="tweaks__opts">
          {['subtle','moderate','rich'].map((m) => (
            <button key={m} className={`tweaks__opt ${state.animation===m?'is-active':''}`} onClick={()=>set('animation',m)}>{m}</button>
          ))}
        </div>
      </div>

      <div className="tweaks__group">
        <span className="tweaks__label">Project cards</span>
        <div className="tweaks__opts">
          {[['editorial','Editorial'],['magazine','Magazine'],['index','Index']].map(([k,l]) => (
            <button key={k} className={`tweaks__opt ${state.cardStyle===k?'is-active':''}`} onClick={()=>set('cardStyle',k)}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Cursor + scroll progress + reveal observer
function EffectsLayer() {
  const cursorRef = React.useRef(null);
  const progressRef = React.useRef(null);

  React.useEffect(() => {
    // Cursor
    const c = cursorRef.current;
    const onMove = (e) => {
      if (!c) return;
      c.style.left = e.clientX + 'px';
      c.style.top = e.clientY + 'px';
    };
    const onOver = (e) => {
      if (!c) return;
      const t = e.target;
      if (t.closest && (t.closest('a, button, .project, .exp__item, .skills__list li'))) {
        c.classList.add('cursor--hover');
      } else if (t.matches && t.matches('h1, h2, h3, p, li, span, em, strong')) {
        c.classList.add('cursor--text');
      } else {
        c.classList.remove('cursor--hover');
        c.classList.remove('cursor--text');
      }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    // Scroll progress
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Reveal observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    const reveals = document.querySelectorAll('.reveal, .split-line__inner');
    reveals.forEach((el) => {
      io.observe(el);
      // Check initial visibility for elements already in viewport on load
      const rect = el.getBoundingClientRect();
      const inView = rect.top <= window.innerHeight - 80 && rect.bottom >= 0;
      if (inView) {
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="scroll-progress"><div ref={progressRef} className="scroll-progress__bar"></div></div>
      <div ref={cursorRef} className="cursor"></div>
      <div className="grain"></div>
    </>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <a className="nav__mark" href="#home">Izhan</a>
      <div className="nav__links">
        <a href="#about">About</a>
        <a href="#experience">Work</a>
        <a href="#projects">Projects</a>
        <a href="#writing">Writing</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function App() {
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = React.useState(false);

  React.useEffect(() => {
    applyTweaks(tweaks);
  }, []);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <>
      <EffectsLayer />
      <Nav />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
      <WritingSection />
      <ContactSection />
      <TweaksPanel state={tweaks} setState={setTweaks} visible={tweaksOpen} onClose={() => setTweaksOpen(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
