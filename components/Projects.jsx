// Projects — grid of case-study cards with expand overlay
const projects = [
  {
    id: "hul-samadhan",
    title: "HUL Samadhan",
    subtitle: "Warehouse Automation, end-to-end UAT & go-live",
    role: "Project Lead",
    year: "2024",
    scale: "Automation hardware · PTL · WES",
    metric: { val: "0→1", label: "Automated line stood up" },
    accent: "red",
    cover: "warehouse",
    summary: "Initiation through go-live on a full-automation warehouse retrofit — conveyors, sensors, Pick-to-Light, Spring Logic, and a WES control plane.",
    body: [
      "Owned the initiation, UAT, and go-live phases of HUL Samadhan — the largest automation-hardware integration Stackbox had shipped at that point.",
      "Supervised hardware commissioning: conveyor calibration, sensor alignment, PTL mapping, Spring Logic routing, WES monitoring. Ran parallel UAT cycles so each subsystem could fail loudly before cutover.",
      "Trained floor operators on PTL workflows and SBL strategies; built a one-page cheat sheet still in circulation on the wall.",
    ],
    tags: ["WMS", "UAT", "Automation", "PTL", "WES"],
  },
  {
    id: "ph-rollout",
    title: "Nationwide PTL Rollout",
    subtitle: "Multi-warehouse implementation, Philippines",
    role: "Implementation Lead",
    year: "2024 — 2026",
    scale: "Multi-site · Multi-vendor · In flight",
    metric: { val: "N", label: "Warehouses across PH" },
    accent: "indigo",
    cover: "map",
    summary: "Running a nationwide PTL implementation and partner network for a Philippines-based FMCG client — layout, hardware, manpower, WMS, and day-to-day consultant supervision.",
    body: [
      "Designed warehouse layouts and PTL hardware plans site-by-site. Calculated manpower and infrastructure envelopes that dictated hiring and capex.",
      "Built and manage the local implementation-partner network: wrote the training manuals, delivered the system and process training, and supervise each consultant's day-to-day work.",
      "Currently the single point of accountability for rollout pace across all sites.",
    ],
    tags: ["WMS", "PTL", "Partner Network", "Training"],
  },
  {
    id: "productivity-25",
    title: "The 25% Project",
    subtitle: "Picking workflow redesign for FMCG clients",
    role: "Process Designer",
    year: "2023 — 2024",
    scale: "Multi-client rollout",
    metric: { val: "25%", label: "Productivity gain" },
    accent: "olive",
    cover: "chart",
    summary: "Replaced handwritten pick lists with system-guided task allocation, batch picking, and optimised pick paths across several FMCG warehouses.",
    body: [
      "Instrumented baseline picking performance: tasks-per-hour, walk distance, order aging. Discovered up to 40% of picker time was routing, not picking.",
      "Rolled out system-guided task allocation with batch picking and path optimisation. Result: ~25% productivity gain, ~30% faster fulfillment cycle, ~15–20% reduction in operational overhead.",
      "Achieved 99%+ order and inventory accuracy via barcode validation and cycle-count workflows.",
    ],
    tags: ["Process", "Productivity", "Analytics"],
  },
  {
    id: "solar-network",
    title: "Solar Panel Supply Network",
    subtitle: "Nationwide Tier-2/3 distribution model",
    role: "Solution Architect",
    year: "2022 — 2023",
    scale: "India-wide · Greenfield",
    metric: { val: "T2/T3", label: "Coverage model" },
    accent: "tangerine",
    cover: "nodes",
    summary: "Designed the end-to-end supply-chain operating model for a solar panel manufacturer scaling into Tier-2 and Tier-3 Indian cities.",
    body: [
      "Built the network plan from cold start: warehouse locations, manpower, last-mile strategy, and infrastructure capex — modeled top-down in Excel and validated with distributor interviews.",
      "Ran scenario simulations across demand curves so the client could see tradeoffs between cost-per-unit-delivered and SLA commitments before signing leases.",
      "Delivered process redesign alongside the network — not just the map, but the playbook to run it.",
    ],
    tags: ["Network Design", "Modeling", "Strategy"],
  },
  {
    id: "dtdc-backlog",
    title: "The Backlog",
    subtitle: "Clearing 150,000 shipments in 7 days",
    role: "Branch Manager",
    year: "2020",
    scale: "COVID · Mumbai",
    metric: { val: "150K", label: "Shipments cleared in a week" },
    accent: "plum",
    cover: "grid",
    summary: "During the first COVID wave, Mumbai's last-mile collapsed. 150,000 shipments stacked up at my branch. I built an alternative last-mile network in 48 hours and we cleared the lot in seven days.",
    body: [
      "Signed local partners who had idle two-wheelers, negotiated daily per-shipment rates, and stood up routing sheets in Google Sheets because the mainline TMS couldn't see them.",
      "Held 95–98% on-time delivery and <0.5% damage rate through the operation — during a pandemic, with a skeleton crew.",
      "I reference this project more than any other in interviews because it's the one where theory met a street with no power and no manpower, and we shipped anyway.",
    ],
    tags: ["Last-Mile", "Crisis Ops", "Field"],
  },
  {
    id: "procurement-15",
    title: "Vendor Consolidation",
    subtitle: "Centralised procurement across school network",
    role: "Manager",
    year: "2021 — 2022",
    scale: "45+ vendors · Nationwide",
    metric: { val: "15%", label: "Procurement savings" },
    accent: "blue",
    cover: "ledger",
    summary: "Consolidated a sprawling, location-led procurement function into a central desk. Renegotiated supplier terms and built the tracker that runs it.",
    body: [
      "Audited 45+ vendors, cut the tail, standardised SKUs across schools, and renegotiated the top 20 contracts.",
      "Built a Google Sheets inventory + procurement tracker that gave leadership their first real-time view of spend across locations.",
      "Outcome: ~15% cost savings and a procurement motion that scaled with the business instead of ad-hoc firefighting.",
    ],
    tags: ["Procurement", "Sourcing", "Systems"],
  },
];

function ProjectCover({ kind, accent }) {
  // Abstract SVG covers, styled by "kind"
  const A = `var(--accent)`;
  switch (kind) {
    case "warehouse":
      return (
        <svg viewBox="0 0 400 300" className="project__cover-svg">
          <rect width="400" height="300" fill="var(--paper-2)" />
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke="var(--line)" strokeWidth="0.5" />
          ))}
          <rect x="40" y="180" width="60" height="80" fill={A} />
          <rect x="120" y="140" width="60" height="120" fill="var(--ink-2)" opacity="0.9" />
          <rect x="200" y="200" width="60" height="60" fill={A} opacity="0.5" />
          <rect x="280" y="160" width="80" height="100" fill="var(--ink-2)" />
          <line x1="0" y1="260" x2="400" y2="260" stroke="var(--ink-2)" strokeWidth="1" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 400 300" className="project__cover-svg">
          <rect width="400" height="300" fill="var(--paper-2)" />
          <path d="M60 220 Q120 120 200 150 T360 80" stroke={A} strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
          {[[80, 210],[160, 160],[240, 140],[320, 100],[130, 240],[280, 200]].map(([x,y],i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill={A} />
              <circle cx={x} cy={y} r="12" fill="none" stroke={A} opacity="0.4" />
            </g>
          ))}
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 400 300" className="project__cover-svg">
          <rect width="400" height="300" fill="var(--paper-2)" />
          {[220, 180, 200, 150, 130, 90, 110, 60].map((h, i) => (
            <rect key={i} x={30 + i * 45} y={h} width="30" height={280 - h} fill={i < 4 ? 'var(--ink-3)' : A} />
          ))}
          <line x1="20" y1="280" x2="380" y2="280" stroke="var(--ink-2)" />
        </svg>
      );
    case "nodes":
      return (
        <svg viewBox="0 0 400 300" className="project__cover-svg">
          <rect width="400" height="300" fill="var(--paper-2)" />
          <circle cx="200" cy="150" r="30" fill={A} />
          {[[80,80],[320,80],[80,220],[320,220],[200,40],[200,260]].map(([x,y],i) => (
            <g key={i}>
              <line x1="200" y1="150" x2={x} y2={y} stroke="var(--ink-3)" strokeWidth="0.8" />
              <circle cx={x} cy={y} r="10" fill="var(--ink-2)" />
            </g>
          ))}
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 400 300" className="project__cover-svg">
          <rect width="400" height="300" fill="var(--paper-2)" />
          {Array.from({ length: 10 }).map((_, r) =>
            Array.from({ length: 14 }).map((_, c) => {
              const filled = (r * 14 + c) % 7 < 5;
              return <rect key={`${r}-${c}`} x={c * 28 + 8} y={r * 28 + 10} width="20" height="20" fill={filled ? (Math.random() > 0.85 ? A : 'var(--ink-3)') : 'transparent'} opacity="0.9" />;
            })
          )}
        </svg>
      );
    case "ledger":
    default:
      return (
        <svg viewBox="0 0 400 300" className="project__cover-svg">
          <rect width="400" height="300" fill="var(--paper-2)" />
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1="40" y1={40 + i * 24} x2={360 - (i % 3) * 40} y2={40 + i * 24} stroke="var(--ink-3)" strokeWidth="0.6" />
          ))}
          <rect x="40" y="40" width="4" height="220" fill={A} />
        </svg>
      );
  }
}

function ProjectCard({ p, i, style, onOpen }) {
  return (
    <article
      className={`project project--${style}`}
      style={{ '--i': i }}
      onClick={() => onOpen(p)}
    >
      <div className="project__cover" data-accent-local={p.accent}>
        <ProjectCover kind={p.cover} accent={p.accent} />
        <div className="project__metric serif">
          <div className="project__metric-val">{p.metric.val}</div>
          <div className="project__metric-lbl mono">{p.metric.label}</div>
        </div>
      </div>
      <div className="project__meta">
        <div className="project__meta-row mono">
          <span>№ {String(i + 1).padStart(2, '0')}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="serif project__title">{p.title}</h3>
        <p className="project__subtitle">{p.subtitle}</p>
        <div className="project__tags">
          {p.tags.map((t) => <span key={t} className="project__tag">{t}</span>)}
        </div>
        <div className="project__read mono">Read case study →</div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const [open, setOpen] = React.useState(null);
  const [style, setStyle] = React.useState(
    (document.documentElement.getAttribute('data-card') || 'editorial')
  );

  React.useEffect(() => {
    const obs = new MutationObserver(() => {
      setStyle(document.documentElement.getAttribute('data-card') || 'editorial');
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-card'] });
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">§ 03 — Case Studies</div>
          <h2 className="serif section-title">
            Six projects. <em>Each one broke something worth mentioning.</em>
          </h2>
        </div>

        <div className={`projects__grid projects__grid--${style}`}>
          {projects.map((p, i) => (
            <div key={p.id} className="reveal">
              <ProjectCard p={p} i={i} style={style} onOpen={setOpen} />
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="case-overlay" onClick={() => setOpen(null)}>
          <article className="case" onClick={(e) => e.stopPropagation()}>
            <button className="case__close" onClick={() => setOpen(null)}>Close ✕</button>
            <div className="case__hero">
              <ProjectCover kind={open.cover} accent={open.accent} />
            </div>
            <div className="case__body">
              <div className="eyebrow">Case Study · {open.year}</div>
              <h2 className="serif case__title">{open.title}</h2>
              <p className="serif case__sub"><em>{open.subtitle}</em></p>

              <div className="case__meta-grid">
                <div><div className="mono eyebrow-sm">Role</div>{open.role}</div>
                <div><div className="mono eyebrow-sm">Scale</div>{open.scale}</div>
                <div><div className="mono eyebrow-sm">Headline</div>{open.metric.val} — {open.metric.label}</div>
              </div>

              <div className="case__summary serif">{open.summary}</div>

              <div className="case__content">
                {open.body.map((para, i) => <p key={i}>{para}</p>)}
              </div>

              <div className="project__tags">
                {open.tags.map((t) => <span key={t} className="project__tag">{t}</span>)}
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

window.ProjectsSection = ProjectsSection;
