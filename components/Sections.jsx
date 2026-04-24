// Skills, Achievements, Certifications, Writing placeholder, Contact
const skillGroups = [
  { title: "Supply Chain & Ops", items: ["Warehouse Operations", "Inventory Management", "Order Fulfillment", "Layout Planning", "Slotting Optimization", "Process Standardization"] },
  { title: "Implementation", items: ["WMS Implementation", "TMS Integration", "BRD Documentation", "Requirement Discovery", "UAT", "System Configuration"] },
  { title: "Process", items: ["Process Mapping", "Pick-Path Optimization", "Productivity Benchmarking", "KPI Design", "Continuous Improvement"] },
  { title: "Data & Analytics", items: ["Advanced Excel", "Tableau", "Metabase", "SQL", "JSON Querying", "KPI Dashboards"] },
  { title: "Systems & Tech", items: ["WMS", "TMS", "ERP / SAP", "API Testing", "Postman", "Setu"] },
  { title: "Leadership", items: ["Stakeholder Mgmt", "Client Engagement", "Vendor Mgmt", "Change Management", "Cross-functional Coord."] },
];

function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">§ 04 — Toolkit</div>
          <h2 className="serif section-title">The tools I reach for, <em>sorted by the kind of day it is.</em></h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <div key={g.title} className="skills__col reveal">
              <div className="skills__num mono">0{i + 1}</div>
              <h3 className="serif skills__title">{g.title}</h3>
              <ul className="skills__list">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const achievements = [
  { val: 150000, suffix: "", label: "Shipments cleared in 7 days during COVID" },
  { val: 60000, suffix: "/day", label: "Shipments handled at peak branch volume" },
  { val: 25, suffix: "%", label: "Warehouse productivity gain from system-led picking" },
  { val: 30, suffix: "%", label: "Faster order fulfillment cycle" },
  { val: 99, suffix: "%+", label: "Order & inventory accuracy via system-guided workflows" },
  { val: 15, suffix: "%", label: "Procurement cost savings through strategic sourcing" },
];

function AchievementsSection() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">§ 05 — On the record</div>
          <h2 className="serif section-title">Numbers I'd stand behind <em>in a deposition.</em></h2>
        </div>
        <div className="ach__grid">
          {achievements.map((a, i) => (
            <div key={i} className="ach__item reveal">
              <div className="ach__num serif">
                <AnimatedCounter to={a.val} suffix={a.suffix} />
              </div>
              <div className="ach__lbl">{a.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const certifications = [
  "Lean Six Sigma Foundations",
  "SAP S/4HANA Essential Training",
  "Project Management Foundations",
  "Root Cause Analysis",
  "Supply Chain Foundations: Project Management",
];

function CertificationsSection() {
  return (
    <section id="credentials" className="credentials">
      <div className="container">
        <div className="cred__grid">
          <div className="cred__col reveal">
            <div className="eyebrow">§ 06 — Education</div>
            <h3 className="serif cred__title">Mumbai University</h3>
            <p className="cred__meta">B.E., Mechanical Engineering · 2015 — 2019</p>
            <p className="serif cred__note"><em>Where I learned that every design compromises with reality — a lesson that kept paying off.</em></p>
          </div>
          <div className="cred__col reveal">
            <div className="eyebrow">§ 07 — Certifications</div>
            <ul className="cred__list">
              {certifications.map((c, i) => (
                <li key={c}><span className="mono cred__num">0{i+1}</span>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingSection() {
  const drafts = [
    { num: "I", title: "What I learned clearing 150,000 shipments in a week.", status: "Drafting" },
    { num: "II", title: "The real cost of picker walking distance.", status: "Outlined" },
    { num: "III", title: "Why UAT is a design problem, not a test problem.", status: "Notes" },
  ];
  return (
    <section id="writing" className="writing">
      <div className="container container--narrow">
        <div className="section-head reveal">
          <div className="eyebrow">§ 08 — Dispatches</div>
          <h2 className="serif section-title">Writing, <em>soon.</em></h2>
        </div>
        <p className="writing__intro serif reveal">
          Short field notes from warehouses, go-lives, and the moments implementations go sideways. The first essays are in drafts — subscribe, or come back.
        </p>
        <ul className="writing__list">
          {drafts.map((d, i) => (
            <li key={d.num} className="writing__item reveal">
              <span className="serif writing__num"><em>{d.num}.</em></span>
              <span className="serif writing__title">{d.title}</span>
              <span className="mono writing__status">{d.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  const [hover, setHover] = React.useState(null);
  const email = "mohdizhan7@gmail.com";
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="eyebrow reveal">§ 09 — Get in touch</div>
        <h2 className="serif contact__hed reveal">
          <span className="split-line"><span className="split-line__inner">Let's talk</span></span>
          <span className="split-line"><span className="split-line__inner" style={{ '--d': '0.15s' }}>about <em>what's next.</em></span></span>
        </h2>

        <a className="contact__email serif reveal" href={`mailto:${email}`}>
          {email} <span className="contact__arrow">→</span>
        </a>

        <div className="contact__grid reveal">
          <a href="tel:+919082229057" className="contact__link" onMouseEnter={() => setHover('phone')} onMouseLeave={() => setHover(null)}>
            <span className="mono eyebrow-sm">Phone</span>
            <span className="serif">+91 90822 29057</span>
          </a>
          <a href="https://linkedin.com/in/mohmmedizhan" target="_blank" rel="noreferrer" className="contact__link">
            <span className="mono eyebrow-sm">LinkedIn</span>
            <span className="serif">in/mohmmedizhan</span>
          </a>
          <div className="contact__link">
            <span className="mono eyebrow-sm">Location</span>
            <span className="serif">Bengaluru, Karnataka · IN</span>
          </div>
          <div className="contact__link">
            <span className="mono eyebrow-sm">Open to</span>
            <span className="serif">Senior PM · Solution Design · Ops</span>
          </div>
        </div>

        <footer className="footer">
          <div className="mono footer__row">
            <span>© {new Date().getFullYear()} Mohd. Izhan Shaikh</span>
            <span>Set in Instrument Serif &amp; Geist</span>
            <span>Designed &amp; built by hand</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

Object.assign(window, {
  SkillsSection, AchievementsSection, CertificationsSection, WritingSection, ContactSection, AnimatedCounter
});
