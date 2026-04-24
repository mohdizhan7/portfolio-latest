// Experience timeline — scroll-linked vertical timeline
const experiences = [
  {
    role: "Assistant Project Manager",
    company: "StackBOX",
    location: "Bengaluru, India",
    period: "Sep 2023 — Present",
    summary: "Designing warehouse and supply-chain process solutions for enterprise FMCG clients. Leading WMS implementations at P&G, ITC, and Nestlé across India and the Philippines.",
    highlights: [
      "Led HUL Samadhan warehouse automation — UAT & go-live for conveyors, PTL, sensors, WES monitoring",
      "Improved warehouse productivity ~25%, cut fulfillment cycle time by 30%",
      "Currently running nationwide multi-warehouse PTL rollout in the Philippines",
    ],
    tag: "Current",
  },
  {
    role: "Manager, Solution Design",
    company: "Edgistify",
    location: "Mumbai, India",
    period: "Aug 2022 — Sep 2023",
    summary: "Designed end-to-end logistics solutions — inbound ops, storage, inventory, outbound distribution. Architected scalable supply-chain networks for enterprise clients.",
    highlights: [
      "Designed nationwide supply-chain operating model for a solar-panel manufacturer across Tier 2/3 cities",
      "Built operational-cost, manpower & infrastructure models that shaped go-to-market plans",
    ],
    tag: "Architect",
  },
  {
    role: "Manager, Procurement & Supply Chain",
    company: "Mindseed Education",
    location: "Mumbai, India",
    period: "Dec 2021 — Aug 2022",
    summary: "Ran procurement and vendor operations across multiple school locations. Centralised purchasing and built inventory visibility from scratch.",
    highlights: [
      "~15% procurement cost savings via strategic sourcing",
      "Managed 45+ vendors nationally; built a Google Sheets inventory system still in use",
    ],
    tag: "Ops",
  },
  {
    role: "Branch Manager",
    company: "DTDC Express",
    location: "Mumbai, India",
    period: "Jan 2020 — Dec 2021",
    summary: "Ran one of Mumbai's largest DTDC branches — 45,000 to 60,000 shipments a day, 50 staff, 70 vehicles. One of the youngest BMs in the network.",
    highlights: [
      "Cleared a 150,000-shipment COVID backlog in one week via an ad-hoc last-mile network",
      "95–98% on-time delivery · 90–95% first-attempt success · <0.5% damage",
    ],
    tag: "Field",
  },
  {
    role: "Design Engineer",
    company: "Elite Finishing Systems",
    location: "Mumbai, India",
    period: "Jun 2019 — Oct 2019",
    summary: "Mechanical CAD work on industrial paint-booth systems. Where I learned that every real-world system has a spec and a very different reality.",
    highlights: [
      "AutoCAD & SolidWorks design for production",
      "Feasibility, material selection, design validation",
    ],
    tag: "Origin",
  },
];

function ExperienceSection() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">§ 02 — Chronicle</div>
          <h2 className="serif section-title">
            A résumé, <em>told in the first person</em>.
          </h2>
        </div>

        <div className="exp__list">
          {experiences.map((e, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className={`exp__item reveal ${open ? 'is-open' : ''}`}
                onClick={() => setOpenIdx(open ? -1 : i)}
              >
                <div className="exp__row">
                  <div className="exp__period mono">{e.period}</div>
                  <div className="exp__role">
                    <div className="serif exp__title">{e.role}</div>
                    <div className="exp__company">
                      <em className="serif">{e.company}</em> <span style={{ color: 'var(--ink-3)' }}>· {e.location}</span>
                    </div>
                  </div>
                  <div className="exp__tag">{e.tag}</div>
                  <div className="exp__plus" aria-hidden>{open ? '–' : '+'}</div>
                </div>

                <div className="exp__body" style={{ maxHeight: open ? 600 : 0 }}>
                  <div className="exp__body-inner">
                    <p className="serif exp__summary">{e.summary}</p>
                    <ul className="exp__highlights">
                      {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.ExperienceSection = ExperienceSection;
