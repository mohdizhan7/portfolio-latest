// About section — editorial magazine intro
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__aside">
            <div className="eyebrow reveal">§ 01 — About</div>
            <div className="about__portrait reveal">
              {/* Placeholder portrait — warm tinted frame */}
              <div className="about__portrait-frame">
                <div className="about__portrait-inner">
                  <svg viewBox="0 0 200 240" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="var(--paper-2)" />
                        <stop offset="1" stopColor="var(--paper-3)" />
                      </linearGradient>
                    </defs>
                    <rect width="200" height="240" fill="url(#pg)" />
                    {/* Abstract figure */}
                    <circle cx="100" cy="90" r="42" fill="var(--ink-4)" opacity="0.35" />
                    <path d="M30 240 Q30 160 100 160 Q170 160 170 240 Z" fill="var(--ink-4)" opacity="0.35" />
                    <text x="100" y="228" textAnchor="middle" fontFamily="var(--serif)" fontStyle="italic" fontSize="12" fill="var(--ink-3)">portrait placeholder</text>
                  </svg>
                </div>
              </div>
              <div className="about__caption mono">
                Fig. 01 — <i className="serif">M. I. Shaikh</i>, photographed in a warehouse that wasn't there yet.
              </div>
            </div>
          </div>

          <div className="about__body">
            <div className="reveal">
              <span className="serif about__drop">I</span>
              <p className="serif about__lede">
                spend my days inside warehouses that don't exist yet — on whiteboards, in Excel models, and in the layouts of systems that will one day route thousands of shipments a shift. My job is to make sure, when the pickers arrive, the software is already waiting for them.
              </p>
            </div>

            <div className="about__cols reveal">
              <p>
                For the past six years I've been translating messy, human operations — forklifts, cartons, SLAs, exceptions — into software that scales. I've led WMS implementations at <em>P&amp;G, ITC,</em> and <em>Nestlé</em>, stabilised go-lives across India and the Philippines, and shipped workflows that squeezed <strong>25% more productivity</strong> out of warehouses that thought they were already running at the ceiling.
              </p>
              <p>
                Before that I ran one of Mumbai's largest DTDC branches at 26 — 50 staff, 70 vehicles, and a standing backlog of 150,000 shipments during COVID that we cleared in a week by inventing a last-mile network overnight. That job taught me more about systems design than any SaaS spec ever did.
              </p>
            </div>

            <div className="about__pullquote reveal">
              <span className="serif">
                &ldquo;Operations is not the messy place software lands. It's the place software is <em>tested</em>.&rdquo;
              </span>
            </div>

            <div className="about__meta reveal">
              <div><span className="mono eyebrow-sm">Based</span> Bengaluru, IN</div>
              <div><span className="mono eyebrow-sm">Working</span> Remote-friendly, global</div>
              <div><span className="mono eyebrow-sm">Open to</span> Senior PM · Solution Design · Ops Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.AboutSection = AboutSection;
