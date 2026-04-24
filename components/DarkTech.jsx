// Dark Tech Hero with animated grid and glitch effect
function HeroDarkTech() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const onMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMouse);
    return () => window.removeEventListener('mousemove', onMouse);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated grid background SVG */}
      <svg className="hero__grid" viewBox="0 0 500 500">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 6 }).map((_, i) =>
          Array.from({ length: 6 }).map((_, j) => (
            <g key={`${i}-${j}`} opacity={(6-i)/6 * 0.4}>
              <rect x={i*80} y={j*80} width="60" height="60" />
            </g>
          ))
        )}
      </svg>

      <div className="hero__content">
        <div className="hero__label">
          Supply Chain × Technology × Operations
        </div>

        <h1 className="hero__name">
          Mohd. Izhan<br/>
          <span className="accent">Shaikh</span>
        </h1>

        <p className="hero__tagline">
          I design warehouse systems that <span className="highlight">move faster</span> and stay <span className="highlight">visible</span>. Six years across FMCG, SaaS, and e-commerce supply chains.
        </p>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <div className="hero__meta-label">Current Role</div>
            <div className="hero__meta-val">Assistant Project Manager @ StackBOX</div>
          </div>
          <div className="hero__meta-item">
            <div className="hero__meta-label">Specialising in</div>
            <div className="hero__meta-val">WMS / TMS implementation, process design</div>
          </div>
          <div className="hero__meta-item">
            <div className="hero__meta-label">Based in</div>
            <div className="hero__meta-val">Bengaluru, India · Remote-friendly</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About section — code style
function AboutDarkTech() {
  return (
    <section id="about" className="about reveal">
      <div className="container">
        <div className="about__grid">
          <div className="about__code">
            <div className="about__code-line"><span className="about__code-keyword">const</span> izhan = {'{'}}</div>
            <div className="about__code-line"><span className="about__code-comment">  // 6+ years designing supply chains</span></div>
            <div className="about__code-line"><span className="about__code-keyword">  role:</span> <span className="about__code-string">"APM @ StackBox"</span>,</div>
            <div className="about__code-line"><span className="about__code-keyword">  expertise:</span> <span className="about__code-string">"WMS, TMS, process"</span>,</div>
            <div className="about__code-line"><span className="about__code-keyword">  clients:</span> ['P&G', 'ITC', 'Nestlé'],</div>
            <div className="about__code-line"><span className="about__code-keyword">  impact:</span> {'{'}}</div>
            <div className="about__code-line"><span className="about__code-comment">    // 25% productivity, 30% faster fulfillment</span></div>
            <div className="about__code-line"><span className="about__code-keyword">  {'}'}</span>,</div>
            <div className="about__code-line">{'}'};</div>
          </div>

          <div className="about__body reveal">
            <h2>Operations, <span className="accent">decoded.</span></h2>
            <p>
              I spend my days inside warehouses that don't exist yet — on whiteboards, in Excel, in the layouts of systems that will one day route thousands of shipments a shift. My job is to make sure, when the pickers arrive, the software is already waiting for them.
            </p>
            <p>
              For six years I've been translating messy human operations — forklifts, cartons, SLAs, exceptions — into software that scales. I've led WMS implementations at P&G, ITC, and Nestlé, stabilised go-lives across India and the Philippines, and shipped workflows that squeezed <strong>25% more productivity</strong> out of warehouses that thought they were already running at capacity.
            </p>
            <p>
              Before that I ran one of Mumbai's largest DTDC branches at 26 — 50 staff, 70 vehicles, standing backlog of 150,000 shipments during COVID. We cleared it in a week.
            </p>

            <div className="about__stat reveal">
              <div className="about__stat-item">
                <div className="about__stat-num">25%</div>
                <div className="about__stat-label">Productivity gain</div>
              </div>
              <div className="about__stat-item">
                <div className="about__stat-num">150K</div>
                <div className="about__stat-label">Cleared in 7 days</div>
              </div>
              <div className="about__stat-item">
                <div className="about__stat-num">6+</div>
                <div className="about__stat-label">Years in supply chain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience — collapsible dark-tech cards
function ExperienceDarkTech() {
  const exp = [
    { role: "Assistant Project Manager", company: "StackBOX", period: "Sep 2023 – Present", summary: "Leading WMS implementations for enterprise FMCG clients.", highlights: ["HUL Samadhan automation UAT & go-live", "25% productivity improvement", "Multi-warehouse PTL rollout in Philippines"] },
    { role: "Manager, Solution Design", company: "Edgistify", period: "Aug 2022 – Sep 2023", summary: "Designed end-to-end logistics solutions and supply-chain networks.", highlights: ["Nationwide operating model for solar manufacturer", "Infrastructure & manpower planning"] },
    { role: "Manager, Procurement & Supply Chain", company: "Mindseed Education", period: "Dec 2021 – Aug 2022", summary: "Centralised procurement across 45+ vendors.", highlights: ["15% cost savings via strategic sourcing", "Built inventory tracking system"] },
    { role: "Branch Manager", company: "DTDC Express", period: "Jan 2020 – Dec 2021", summary: "Ran one of Mumbai's largest logistics hubs — 45–60K shipments/day.", highlights: ["Cleared 150K shipment backlog in 7 days", "95–98% on-time delivery rate"] },
  ];
  const [open, setOpen] = React.useState(0);
  
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          Work <span className="accent">history</span>
        </h2>
        <div className="exp__list">
          {exp.map((e, i) => (
            <div key={i} className={`exp__item reveal ${open === i ? 'is-open' : ''}`}>
              <div className="exp__header">
                <div>
                  <div className="exp__title">{e.role}</div>
                  <div className="exp__company">{e.company}</div>
                </div>
                <button className="exp__toggle" onClick={() => setOpen(open === i ? -1 : i)}>+</button>
              </div>
              <div className={`exp__body ${open === i ? 'is-open' : ''}`}>
                <div className="exp__body-inner">
                  <p className="exp__summary">{e.summary}</p>
                  <ul className="exp__highlights">
                    {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills section
function SkillsDarkTech() {
  const skills = [
    { title: "Supply Chain & Ops", items: ["Warehouse Operations", "WMS Design", "TMS Integration", "Process Optimization", "Inventory Management"] },
    { title: "Implementation", items: ["BRD Documentation", "UAT Leadership", "System Configuration", "Go-live Management", "Stakeholder Alignment"] },
    { title: "Data & Analytics", items: ["Advanced Excel", "SQL / JSON", "Tableau", "Metabase", "KPI Dashboards", "Data Modeling"] },
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          Technical <span className="accent">toolkit</span>
        </h2>
        <div className="skills__grid">
          {skills.map((g, i) => (
            <div key={g.title} className="skills__col reveal">
              <h3 className="skills__title">{g.title}</h3>
              <ul className="skills__list">
                {g.items.map((s) => <li key={s} className="skills__item">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Achievements
function AchievementsDarkTech() {
  const achs = [
    { num: "25%", label: "Productivity gain" },
    { num: "99%+", label: "Order accuracy" },
    { num: "150K", label: "Shipments cleared (7 days)" },
    { num: "6+", label: "Years supply chain" },
    { num: "30%", label: "Faster fulfillment" },
    { num: "P&G · ITC · Nestlé", label: "Key clients" },
  ];
  
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          By the <span className="accent">numbers</span>
        </h2>
        <div className="ach__grid">
          {achs.map((a, i) => (
            <div key={i} className="ach__item reveal">
              <div className="ach__num">{a.num}</div>
              <div className="ach__label">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects — dark tech grid with case studies
const projects = [
  { id: "hul", title: "HUL Samadhan", subtitle: "Warehouse automation UAT & go-live", metric: "0→1", label: "Automated line", tags: ["WMS", "UAT", "PTL"] },
  { id: "ph", title: "PH Rollout", subtitle: "Multi-warehouse PTL implementation", metric: "N", label: "Sites across PH", tags: ["WMS", "PTL", "Rollout"] },
  { id: "25", title: "The 25% Project", subtitle: "Picking workflow redesign", metric: "25%", label: "Productivity gain", tags: ["Process", "Optimization"] },
  { id: "solar", title: "Solar Network", subtitle: "Nationwide supply-chain model", metric: "T2/T3", label: "Market coverage", tags: ["Strategy", "Network"] },
  { id: "backlog", title: "The Backlog", subtitle: "Crisis operations during COVID", metric: "150K", label: "Cleared in 7 days", tags: ["Last-Mile", "Crisis"] },
  { id: "vendor", title: "Vendor Consolidation", subtitle: "Centralized procurement", metric: "15%", label: "Cost savings", tags: ["Procurement", "Sourcing"] },
];

function ProjectsDarkTech() {
  const [open, setOpen] = React.useState(null);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal" style={{ marginBottom: 48 }}>
          Case <span className="accent">studies</span>
        </h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <div key={p.id} className="project reveal" onClick={() => setOpen(p)}>
              <div className="project__cover">
                <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id={`grad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'rgba(0,212,255,0.15)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'rgba(233,69,96,0.15)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect width="200" height="200" fill={`url(#grad-${p.id})`} />
                  {Array.from({ length: 4 }).map((_, i) => (
                    <line key={i} x1={i*50} y1="0" x2={i*50} y2="200" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <line key={i} x1="0" y1={i*50} x2="200" y2={i*50} stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
                  ))}
                  <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(233,69,96,0.2)" strokeWidth="1" />
                </svg>
                <div className="project__metric">{p.metric}</div>
              </div>
              <div className="project__meta">
                <h3 className="project__title">{p.title}</h3>
                <p className="project__subtitle">{p.subtitle}</p>
                <div className="project__tags">
                  {p.tags.map((t) => <span key={t} className="project__tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="case-overlay" onClick={() => setOpen(null)}>
          <article className="case" onClick={(e) => e.stopPropagation()}>
            <button className="case__close" onClick={() => setOpen(null)}>✕</button>
            <div className="case__hero" />
            <div className="case__body">
              <h2 className="case__title">{open.title}</h2>
              <p className="case__subtitle">{open.subtitle}</p>
              <div className="case__meta">
                <div><div className="case__meta-label">Metric</div><div className="case__meta-val">{open.metric} — {open.label}</div></div>
                <div><div className="case__meta-label">Type</div><div className="case__meta-val">{open.tags.join(' · ')}</div></div>
                <div><div className="case__meta-label">Status</div><div className="case__meta-val">Shipped & live</div></div>
              </div>
              <div className="case__content">
                <p>Full case study coming soon. This project is now live in production and delivering the promised impact.</p>
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

// Writing section
function WritingDarkTech() {
  const drafts = [
    { num: "I", title: "What I learned clearing 150,000 shipments in a week." },
    { num: "II", title: "The real cost of picker walking distance." },
    { num: "III", title: "Why UAT is a design problem, not a test problem." },
  ];
  
  return (
    <section id="writing" className="writing">
      <div className="container container--narrow">
        <h2 className="section-title reveal" style={{ marginBottom: 48, textAlign: 'center' }}>
          Dispatches <span className="accent">from the field</span>
        </h2>
        <p className="writing__intro reveal">Short notes from warehouses, go-lives, and the moments implementations go sideways. Coming soon.</p>
        <ul className="writing__list">
          {drafts.map((d, i) => (
            <li key={d.num} className="writing__item reveal">
              <span className="writing__num">{d.num}</span>
              <span className="writing__title">{d.title}</span>
              <span className="writing__status">In draft</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Credentials
function CredentialsDarkTech() {
  return (
    <section id="credentials" className="credentials">
      <div className="container">
        <div className="cred__grid">
          <div className="reveal">
            <h3>Education</h3>
            <p><strong>Mumbai University</strong><br/>B.E. Mechanical Engineering, 2015–2019</p>
          </div>
          <div className="reveal">
            <h3>Certifications</h3>
            <ul className="cred__list">
              <li>Lean Six Sigma Foundations</li>
              <li>SAP S/4HANA Essential Training</li>
              <li>Project Management Foundations</li>
              <li>Supply Chain Foundations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact
function ContactDarkTech() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__heading reveal">
          Let's <span className="accent">collaborate.</span>
        </h2>

        <a href="mailto:mohdizhan7@gmail.com" className="contact__email reveal">
          mohdizhan7@gmail.com →
        </a>

        <div className="contact__grid">
          <a href="tel:+919082229057" className="contact__link reveal">
            <div className="contact__link-label">Phone</div>
            <div className="contact__link-val">+91 9082 229057</div>
          </a>
          <a href="https://linkedin.com/in/mohmmedizhan" target="_blank" rel="noreferrer" className="contact__link reveal">
            <div className="contact__link-label">LinkedIn</div>
            <div className="contact__link-val">in/mohmmedizhan</div>
          </a>
          <div className="contact__link reveal">
            <div className="contact__link-label">Location</div>
            <div className="contact__link-val">Bengaluru, India</div>
          </div>
          <div className="contact__link reveal">
            <div className="contact__link-label">Open to</div>
            <div className="contact__link-val">Senior PM · Solution Design</div>
          </div>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Mohd. Izhan Shaikh</span>
          <span>Dark Tech Portfolio</span>
          <span>Built with React & neon</span>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, {
  HeroDarkTech, AboutDarkTech, ExperienceDarkTech, SkillsDarkTech, AchievementsDarkTech, CredentialsDarkTech, ContactDarkTech, ProjectsDarkTech, WritingDarkTech
});
