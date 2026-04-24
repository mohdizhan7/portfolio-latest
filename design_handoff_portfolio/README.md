# Handoff: Cinematic Supply Chain Portfolio

## Overview

A high-fidelity, fully responsive cinematic portfolio for Mohammed Izhan Shaikh — a supply chain and project management professional with 6+ years of experience. The design showcases work history, case studies, skills, and achievements with smooth animations, interactive modals, and Left Coast-inspired aesthetics.

**Purpose:** Professional portfolio for recruiting, networking, and showcasing supply chain expertise.

**Key Features:**
- Cinematic hero section with morphing blob animation
- Interactive timeline-based project cards (hover to expand)
- Work history with service-card styling and shimmer effects
- Modal case studies with detailed project information
- Responsive grid layouts that adapt to all screen sizes
- Built-in tweaks panel for theme/color/animation customization
- Scroll-triggered reveal animations
- Mobile-responsive navigation with hamburger menu

---

## About This Handoff

**Design Fidelity:** High-fidelity (hifi) pixel-perfect mockup

The files in this bundle are **HTML/CSS/JS design references** showing the final look, feel, and behavior. These are **not production code to copy directly**. 

**Your Task:** Recreate this design as a **standalone static HTML site** or integrate it into your preferred web framework (React, Vue, Next.js, etc.). The design is currently implemented in vanilla HTML/CSS/JS with no external dependencies — you can:

1. **Deploy the HTML as-is** (easiest) — Use the vercel.json and deployment scripts provided
2. **Migrate to a framework** — Convert components to React/Vue/Next.js if needed
3. **Use as reference** — Build from scratch using the specifications below

This handoff assumes you'll deploy as a **static site** (HTML/CSS/JS) to Vercel, Netlify, or GitHub Pages.

---

## Design Files

- `index.html` — Complete portfolio (7 sections + modals)
- `DEPLOYMENT.md` — Deployment instructions
- `CHECKLIST.md` — Pre-launch checklist
- `package.json` — Dependencies & scripts
- `vercel.json` — Vercel config

---

## Screens / Sections

### 1. Navigation (Fixed Header)

**Purpose:** Global navigation to all sections

**Layout:**
- Fixed position, top of viewport
- Flex layout: `justify-content: space-between`
- Height: 64px on desktop, 56px on mobile
- Background: `rgba(0,0,0,0.6)` with `backdrop-filter: blur(10px)`
- Border-bottom: `1px solid rgba(251,251,251,0.1)`

**Components:**
- **Logo/Mark** (left): "IZ" text
  - Font: 20px, weight 700
  - Color: #fbfbfb
  - Letter-spacing: -0.02em

- **Nav Links** (center, desktop only):
  - Links: About, Work, Projects, Contact
  - Font: 13px, weight 500
  - Gap: 48px
  - Hover effect: Underline appears with animation (width 0→100%, 0.4s cubic-bezier)
  - Letter-spacing: 0.05em

- **Hamburger Menu** (right, mobile only):
  - 3 horizontal lines, 24px wide
  - Display: flex (on mobile), none (on desktop)
  - Active state: Lines rotate 45°/-45° and hide middle line
  - Transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1)

- **Mobile Menu** (full-screen overlay, hidden by default):
  - Position: fixed, inset: 0
  - Background: `rgba(0, 0, 0, 0.95)` with blur
  - Flex layout: centered, column direction
  - Links: Same as desktop nav but 32px font
  - Close button: X icon, top-right (32px)
  - Display: none (hidden), flex (active)

**Responsive Breakpoints:**
- Desktop (1200px+): Show nav links, hide hamburger
- Tablet (768px-1199px): Show hamburger, hide nav links
- Mobile (<768px): Full hamburger menu

---

### 2. Hero Section

**Purpose:** First impression, headline, key stats

**Layout:**
- Full viewport height (100vh min)
- Padding: 140px 48px 120px (desktop), 80px 24px 60px (mobile)
- Background: `url('hero-background-placeholder.png')` center/cover with `background-attachment: fixed`
- Overlay: `rgba(0, 0, 0, 0.65)` with `backdrop-filter: blur(8px)`
- Relative positioned, z-index: 2 for content

**Components:**

1. **Label** (reveal animation, 0.05s delay)
   - Text: "Supply Chain × Project Management × Operations"
   - Font: 11px, letter-spacing 0.2em, uppercase
   - Color: `rgba(251,251,251,0.5)`
   - Margin-bottom: 40px

2. **Name** (reveal, 0.1s delay)
   - Text: "Mohammed Izhan Shaikh"
   - Font: clamp(72px, 15vw, 240px), weight 700
   - Color: #fbfbfb
   - Letter-spacing: -0.03em
   - Line-height: 0.95
   - Margin-bottom: 40px

3. **Tagline** (reveal, 0.15s delay)
   - Font: 18px, line-height 1.6
   - Color: `rgba(251,251,251,0.7)`
   - Max-width: 560px
   - Margin-bottom: 80px

4. **Meta Grid** (3 columns)
   - Gap: 48px
   - Each item has reveal animation with staggered delays (0.2s, 0.25s, 0.3s)
   
   **Meta Items:**
   - Label: 10px, uppercase, letter-spacing 0.15em, color `rgba(251,251,251,0.4)`
   - Value: 14px, color #fbfbfb
   - Example:
     - Role: "Project Manager"
     - Based: "Bengaluru, India"
     - Open to: "Senior PM · Solution Design"

**Animations:**
- **Morphing Blob** (background element):
  - Position: absolute, top 50%, right -100px
  - Size: 500px diameter circle
  - Background: `rgba(251,251,251,0.03)`
  - Filter: blur(80px)
  - Animation: `heroBlob 8s ease-in-out infinite`
  - Keyframes:
    - 0%, 100%: translate(0, 0) scale(1)
    - 33%: translate(80px, -80px) scale(1.1)
    - 66%: translate(-40px, 60px) scale(0.95)

- **Reveal Animation** (all text):
  - From: opacity 0, translateY(30px)
  - To: opacity 1, translateY(0)
  - Duration: 0.8s cubic-bezier(0.16, 1, 0.3, 1)
  - Staggered delays by child

---

### 3. About Section

**Purpose:** Bio and key stats

**Layout:**
- Grid: 2 columns (1fr 1fr)
- Gap: 80px
- Align-items: start

**Left Column:**
1. **Label** (reveal)
   - Text: "About"
   - Font: 11px, uppercase, letter-spacing 0.2em
   - Color: `rgba(251,251,251,0.5)`
   - Margin-bottom: 32px

2. **Title** (reveal)
   - Text: "Operations,\ndecoded."
   - Font: clamp(48px, 8vw, 120px), weight 700
   - Margin-bottom: 40px

3. **Body Text** (2 paragraphs, each reveal)
   - Font: 16px, line-height 1.8
   - Color: `rgba(251,251,251,0.7)`
   - Margin-bottom per paragraph: 20px

**Right Column:**
Three stat blocks (vertical flex, gap 32px)

1. **Stat Block** (each has reveal animation with delays)
   - Text-align: center
   - Hover: scale(1.08) on entire block

   **Number:**
   - Font: 64px, weight 700, line-height 1
   - Margin-bottom: 8px
   - Animation: `countUp 0.6s ease-out` (fade in + slide up)

   **Label:**
   - Font: 11px, uppercase, letter-spacing 0.15em
   - Color: `rgba(251,251,251,0.5)`

   **Examples:**
   - 25% — Productivity Gain
   - 150K — Cleared in 7 Days
   - 6+ — Years in Supply Chain

**Responsive:**
- Desktop (1200px+): 2-column grid
- Tablet/Mobile (768px-): 1 column

---

### 4. Experience / Work History

**Purpose:** Show work timeline

**Section Header:**
- Label: "Work" (reveal, 0.05s)
- Title: "History." (reveal, 0.1s)

**Layout:**
- Flex column, gap 60px
- Margin-top: 80px

**Work Items** (4 total, each has reveal with 0.1s staggered delays):

Each item is a service card with:
- Grid layout: 180px (image) | 1fr (content)
- Gap: 48px
- Padding: 40px
- Background: `rgba(251,251,251,0.03)`
- Border: `1px solid rgba(251,251,251,0.1)`
- Border-radius: 8px
- Align-items: flex-start

**On Hover:**
- Background: `rgba(251,251,251,0.06)`
- Border-color: `rgba(251,251,251,0.2)`
- Transform: translateY(-8px)
- Box-shadow: `0 20px 40px rgba(251,251,251,0.1)`
- Shimmer overlay appears (left-to-right gradient sweep, 2s linear)

**Image Block:**
- Width: 180px, height: 180px
- Background: `rgba(251,251,251,0.05)`
- Border: `1px solid rgba(251,251,251,0.15)`
- Border-radius: 8px
- Display: flex (center content)
- Font-size: 80px (emoji)
- Flex-shrink: 0
- On hover: border-color → `rgba(251,251,251,0.3)`, transform scale(1.04)

**Content Block:**
- Padding-top: 8px

  **Title:**
  - Font: 24px, weight 600
  - Margin-bottom: 8px
  - Line-height: 1.2

  **Company:**
  - Font: 12px, uppercase
  - Color: `rgba(251,251,251,0.4)`
  - Letter-spacing: 0.1em
  - Margin-bottom: 12px

  **Period:**
  - Font: 12px
  - Color: `rgba(251,251,251,0.4)`
  - Letter-spacing: 0.1em

  **Description:**
  - Font: 14px
  - Line-height: 1.6
  - Color: `rgba(251,251,251,0.5)`
  - Max-height: 0 (hidden by default)
  - On card hover: max-height expands to 100px, transition 0.4s
  - Margin-top: 12px

**Work Items Data:**

1. **StackBOX** | Assistant Project Manager
   - Period: Sep 2023 — Present
   - Emoji: 📦
   - Description: "Leading product and solution design for warehouse management platforms..."

2. **Edgistify** | Manager, Solution Design
   - Period: Aug 2022 — Sep 2023
   - Emoji: 🏭
   - Description: "Designed and delivered supply chain solutions for 3PL and e-commerce clients..."

3. **Mindseed Education** | Manager, Procurement & Supply Chain
   - Period: Dec 2021 — Aug 2022
   - Emoji: 📊
   - Description: "Built supply chain operations from scratch for an edtech startup..."

4. **DTDC Express** | Branch Manager
   - Period: Jan 2020 — Dec 2021
   - Emoji: 🚚
   - Description: "Managed branch operations for India's largest express courier network..."

---

### 5. Projects (Timeline Cards)

**Purpose:** Showcase 4 key case studies

**Section Header:**
- Label: "Projects" (reveal, 0.05s)
- Title: "Case studies." (reveal, 0.1s)

**Layout:**
- CSS Grid: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
- Gap: `clamp(16px, 3vw, 32px)`
- Margin-top: 80px
- Position: relative, z-index: 1

**Timeline Line** (::before pseudo-element):
- Position: absolute, top: 50%, left: 0, right: 0
- Height: 2px
- Background: `rgba(251,251,251,0.1)`
- Z-index: 0
- Hides on tablet/mobile (display: none)

**Project Cards** (4 total):

Each card:
- Min-height: `clamp(300px, 40vw, 450px)` (dynamic)
- Background: `rgba(251,251,251,0.04)`
- Border: `1px solid rgba(251,251,251,0.15)`
- Border-radius: 12px
- Flex column, centered
- Padding: `clamp(20px, 5vw, 32px)`
- Cursor: pointer
- Position: relative, z-index: 1
- Reveal animation with 0.1s staggered delays (0.1s, 0.2s, 0.3s, 0.4s)
- Transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1)

**On Hover:**
- Background: `rgba(251,251,251,0.08)`
- Border-color: `rgba(251,251,251,0.3)`
- Transform: translateY(-12px)
- Box-shadow: `0 30px 60px rgba(251,251,251,0.15)`
- Shimmer overlay appears

**Shimmer Overlay** (::after):
- Position: absolute, inset: 0
- Linear gradient: `90deg, transparent, rgba(251,251,251,0.08), transparent`
- Animation: `scanLight 2s linear infinite`
- Opacity: 0 (hidden), 1 (on hover)
- Pointer-events: none

**Project Number:**
- Font: `clamp(40px, 8vw, 72px)`, weight 700
- Color: `rgba(251,251,251,0.2)`
- Line-height: 1
- Margin-bottom: `clamp(16px, 3vw, 24px)`
- Text: "01", "02", "03", "04"

**Project Content** (hidden, expands on hover):
- Text-align: center
- Opacity: 0 → 1
- Max-height: 0 → 500px
- Overflow: hidden
- Transition: 0.4s cubic-bezier
- Pointer-events: none → auto (on hover)

  **Image:**
  - Width: 100%
  - Height: `clamp(120px, 25vw, 200px)`
  - Background: `rgba(251,251,251,0.08)`
  - Border: `1px solid rgba(251,251,251,0.2)`
  - Border-radius: 8px
  - Display: flex (center)
  - Font-size: `clamp(50px, 12vw, 80px)` (emoji)
  - Margin-bottom: `clamp(12px, 2vw, 16px)`
  - On card hover: border-color → `rgba(251,251,251,0.4)`, scale(1.03)

  **Title:**
  - Font: 18px, weight 700
  - Margin-bottom: 12px
  - Line-height: 1.2
  - Color: #fbfbfb

  **Subtitle:**
  - Font: 13px
  - Color: `rgba(251,251,251,0.6)`
  - Line-height: 1.5
  - Margin-bottom: 16px

  **Meta List:**
  - List style: none
  - Flex column, gap 8px
  - Font: 11px
  - Color: `rgba(251,251,251,0.5)`
  - Items start with "→" (color: `rgba(251,251,251,0.3)`)

**Projects Data:**

1. **HUL Samadhan** (01)
   - Emoji: 📦
   - Subtitle: "Warehouse automation UAT & go-live across 3 major distribution hubs..."
   - Meta:
     - 40% Throughput Increase
     - 3 Warehouses Deployed
     - Zero Downtime Launch

2. **The 25% Project** (02)
   - Emoji: 📈
   - Subtitle: "Picking workflow redesign through process optimization..."
   - Meta:
     - 25% Productivity Gain
     - 160 Additional Picks/Shift
     - ROI in 90 Days

3. **PH Rollout** (03)
   - Emoji: 🎯
   - Subtitle: "Multi-warehouse PTL implementation across 8 locations..."
   - Meta:
     - 8 Warehouses Synced
     - 99.2% Pick Accuracy
     - 18% Faster Fulfillment

4. **The Backlog** (04)
   - Emoji: ⚡
   - Subtitle: "Crisis operations during COVID-19. Built alternative last-mile network..."
   - Meta:
     - 150K Shipments Cleared
     - 98% On-Time Delivery
     - Network Case Study

**Responsive:**
- Desktop (1200px+): `minmax(280px, 1fr)` → 4 columns with timeline line
- Tablet (768px-1199px): `minmax(240px, 1fr)` → 2-3 columns, no timeline
- Mobile (480px-767px): `minmax(200px, 1fr)` → 2 columns
- Small mobile (<480px): 1 column

---

### 6. Skills Section

**Purpose:** List technical & soft skills

**Section Header:**
- Label: "Skills" (reveal)
- Title: "Toolkit." (reveal)

**Layout:**
- Grid: 3 columns (desktop), 1 column (mobile)
- Gap: 48px
- Margin-top: 80px

**Skill Columns** (3 total):

Each column has:
- **Title:** 20px, weight 700, margin-bottom 24px

- **Skill Tags:** Flex row wrap, gap 8px
  - Font: 12px
  - Padding: 8px 12px
  - Border: `1px solid rgba(251,251,251,0.2)`
  - Border-radius: 2px
  - Background: transparent
  - Color: inherit
  - Transition: 0.3s
  - Cursor: default
  - On hover:
    - Border-color: `rgba(251,251,251,0.5)`
    - Background: `rgba(251,251,251,0.08)`
    - Transform: translateY(-2px)

**Skill Categories:**

1. **Supply Chain & Ops**
   - Warehouse Operations
   - WMS Design
   - Process Optimization
   - Inventory Management

2. **Implementation**
   - BRD Documentation
   - UAT Leadership
   - Go-live Management
   - Stakeholder Alignment

3. **Data & Analytics**
   - Advanced Excel
   - SQL / JSON
   - Tableau
   - KPI Dashboards

---

### 7. Achievements Section

**Purpose:** Impact metrics at a glance

**Section Header:**
- Label: "By the Numbers" (reveal)
- Title: "Impact." (reveal)

**Layout:**
- Grid: 3 columns × 2 rows (6 total)
- Gap: 48px
- Margin-top: 80px
- Text-align: center

**Achievement Items** (6 total, each with reveal animation):

Each item:
- **Number/Value:**
  - Font: `clamp(48px, 8vw, 100px)`, weight 700
  - Line-height: 1
  - Margin-bottom: 12px

- **Label:**
  - Font: 12px
  - Letter-spacing: 0.1em
  - Uppercase
  - Color: `rgba(251,251,251,0.5)`

**Achievements:**
- 25% — Productivity Gain
- 99%+ — Order Accuracy
- 150K — Shipments (7 days)
- 30% — Faster Fulfillment
- 6+ — Years Supply Chain
- P&G · ITC · Nestlé — Key Clients

---

### 8. Credentials Section

**Purpose:** Education and certifications

**Section Header:**
- Label: "Background" (reveal)
- Title: "Education & Certs." (reveal)

**Layout:**
- Grid: 2 columns
- Gap: 80px
- Margin-top: 80px

**Left Column (Education):**
- **Title:** 24px, weight 700, margin-bottom 16px
- **School:** "Mumbai University"
  - Font: bold
- **Details:** "B.E. Mechanical Engineering\n2015 — 2019"
  - Font: 14px
  - Line-height: 1.7
  - Color: `rgba(251,251,251,0.7)`

**Right Column (Certifications):**
- **Title:** 24px, weight 700, margin-bottom 16px
- **List:** Unordered
  - Font: 14px
  - Line-height: 1.8
  - Color: `rgba(251,251,251,0.7)`
  - Gap: 8px between items
  - Items:
    - Lean Six Sigma Foundations
    - SAP S/4HANA Essential Training
    - Project Management Foundations
    - Supply Chain Foundations

---

### 9. Writing / Dispatches Section

**Purpose:** Blog/articles teaser

**Section Header:**
- Label: "Dispatches" (reveal, centered)
- Title: "From the field." (reveal, centered)
- Intro: "Short notes from warehouses, go-lives, and the moments implementations go sideways. Coming soon." (reveal, centered)
  - Font: 18px
  - Line-height: 1.6
  - Color: `rgba(251,251,251,0.6)`
  - Margin-top: 40px

**Writing List:**
- List style: none
- Flex column, gap 40px
- Margin-top: 80px

**Writing Items** (3 total, each with reveal animation):

Each item:
- Grid: `40px 1fr 100px` (number | title | status)
- Gap: 32px
- Align-items: center
- Padding: 32px
- Border: `1px solid rgba(251,251,251,0.1)`
- Border-radius: 4px
- Transition: 0.4s
- Cursor: pointer

**On Hover:**
- Border-color: `rgba(251,251,251,0.3)`
- Background: `rgba(251,251,251,0.02)`
- Transform: translateX(12px)

**Components:**
- **Number:** 28px, weight 700, color `rgba(251,251,251,0.3)` (Roman numerals: I, II, III)
- **Title:** 16px, line-height 1.6, color #fbfbfb
- **Status:** 11px, uppercase, letter-spacing 0.1em, text-align right, color `rgba(251,251,251,0.4)`

**Articles:**
1. I — What I learned clearing 150,000 shipments in a week. — In draft
2. II — The real cost of picker walking distance. — In draft
3. III — Why UAT is a design problem, not a test problem. — Outlined

---

### 10. Contact Section

**Purpose:** Call to action

**Section Header:**
- Label: "Get In Touch" (reveal)
- Title: "Let's talk." (reveal)

**Layout:**
- Grid: 2 columns
- Gap: 48px
- Margin-top: 80px

**Contact Links** (2 items):

Each link:
- Font: 20px, weight 500
- Padding: 16px 0
- Border-bottom: `1px solid rgba(251,251,251,0.2)`
- Transition: 0.3s
- Display: block

**On Hover:**
- Border-color: #fbfbfb
- Transform: translateX(8px)

**Links:**
- mohdizhan7@gmail.com (mailto:)
- LinkedIn (https://linkedin.com/in/mohdizhan)

---

### 11. Modal Overlays

**Purpose:** Full case study details when project card clicked

**Modal Container:**
- Position: fixed, inset: 0, z-index: 300
- Background: `rgba(0,0,0,0.8)` with `backdrop-filter: blur(4px)`
- Display: flex (center)
- Opacity: 0 → 1 (on active)
- Pointer-events: none → all (on active)
- Transition: 0.4s

**Modal Inner:**
- Background: #000
- Border: `1px solid rgba(251,251,251,0.2)`
- Padding: 60px (desktop), 40px 32px (mobile)
- Max-width: 800px
- Max-height: 80vh
- Overflow-y: auto
- Border-radius: 4px
- Animation: `modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)` (translateY 40px → 0, opacity 0 → 1)

**Modal Content:**

1. **Title:**
   - Font: 40px, weight 700
   - Margin-bottom: 8px

2. **Subtitle:**
   - Font: 16px
   - Color: `rgba(251,251,251,0.5)`
   - Margin-bottom: 40px

3. **Meta Grid:**
   - Grid: 3 columns
   - Gap: 32px
   - Padding: 40px 0
   - Border-top: `1px solid rgba(251,251,251,0.1)`
   - Border-bottom: `1px solid rgba(251,251,251,0.1)`
   - Margin-bottom: 40px

   **Meta Items:**
   - **Label:** 10px, uppercase, letter-spacing 0.15em, color `rgba(251,251,251,0.4)`, margin-bottom 8px
   - **Value:** 14px, color #fbfbfb

4. **Body:**
   - Font: 16px
   - Line-height: 1.8
   - Color: `rgba(251,251,251,0.7)`
   - Paragraphs: margin-bottom 20px
   - **Strong text** for outcomes/highlights

---

## Interactions & Behavior

### Scroll Animations
- **Reveal Animation:** Text/cards fade in + slide up when scrolling into view
  - Trigger: IntersectionObserver on `.reveal` elements
  - From: opacity 0, translateY(30px)
  - To: opacity 1, translateY(0)
  - Duration: 0.8s cubic-bezier(0.16, 1, 0.3, 1)
  - Staggered by child index (0.05s increments)

- **Count-up Animation:** Numbers in About section animate on scroll
  - Trigger: When stat enters viewport
  - From: opacity 0, translateY(20px)
  - To: opacity 1, translateY(0)
  - Duration: 0.6s ease-out

### Scroll Progress Bar
- Fixed bar at top, height 1px
- Width represents scroll progress (0% → 100%)
- `transform: scaleX(N)` where N = scrollTop / (docHeight - viewportHeight)
- Color: #fbfbfb
- Update on scroll event

### Hamburger Menu (Mobile)
- Click → Toggle `.active` class
- Active state: 3 lines transform (1st rotate 45°, hide 2nd, 3rd rotate -45°), all with translateY
- Transition: 0.3s cubic-bezier(0.16, 1, 0.3, 1)
- Mobile menu overlay: display none → flex (active)
- Click outside overlay → close menu
- Disable body scroll when menu open

### Project Card Hover
- Number: visible → hidden
- Content: hidden (max-height 0) → visible (max-height 500px)
- Transition: 0.4s on all properties
- Image: scale 1 → 1.03
- Shimmer overlay: opacity 0 → 1

### Work History Card Hover
- Background: dark → slightly lighter
- Border: subtle → more visible
- Description: max-height 0 → 100px
- Entire card: translateY 0 → -8px
- Shimmer overlay: opacity 0 → 1
- Transition: 0.4s cubic-bezier

### Writing Item Hover
- Background: transparent → `rgba(251,251,251,0.02)`
- Border-color: subtle → visible
- Transform: translateX 0 → 12px
- Transition: 0.4s

### Modal Behavior
- Click project card → open modal (opacity 0 → 1)
- Modal slides in from below (translateY 40px → 0)
- Click outside modal (on overlay) → close modal
- Scroll inside modal shows scrollbar
- Keyboard: ESC key closes modal

### Navigation Underline
- Links in nav: horizontal line below
- Width: 0% → 100%
- Appears on hover
- Smooth animation: 0.4s cubic-bezier(0.16, 1, 0.3, 1)

### Tweaks Panel (Settings)
- Fixed bottom-right corner, 280px wide
- Contains: Theme toggle, Accent color buttons, Animation speed
- Hidden by default, toggle with ⚙ button
- Slide-in animation: 0.3s cubic-bezier
- Close button or click outside to close
- Changes persist in localStorage

---

## State Management

### Local Component State
1. **Mobile Menu Open/Closed**
   - Toggle on hamburger click
   - Close on nav link click
   - Close on outside click

2. **Tweaks Panel Open/Closed**
   - Toggle on settings button click
   - Close on X button click

3. **Active Modal**
   - Opened when project/experience card clicked
   - Closed on X click or overlay click

4. **Scroll Progress**
   - Calculated on scroll event
   - Updates progress bar width

### LocalStorage
- **Tweaks Settings:** Theme, accent color, animation speed
- Key: `portfolio_tweaks`
- Value: JSON object with settings
- Persist on every tweak change
- Load on page load

---

## Design Tokens

### Colors
- **Primary BG:** #000000
- **Primary Text:** #fbfbfb
- **Border Light:** rgba(251,251,251,0.1)
- **Border Medium:** rgba(251,251,251,0.2)
- **Text Light:** rgba(251,251,251,0.7)
- **Text Lighter:** rgba(251,251,251,0.5)
- **Text Lightest:** rgba(251,251,251,0.3)
- **Overlay Dark:** rgba(0,0,0,0.6) to rgba(0,0,0,0.95)
- **Accent Colors (for tweaks):**
  - White: #fbfbfb
  - Gold: #d4af37
  - Cyan: #00d4ff

### Typography
- **Font Family:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif`
- **Font Size Scale:**
  - h1: clamp(72px, 15vw, 240px)
  - h2: clamp(48px, 8vw, 120px)
  - h3: 32px or 24px
  - body: 16px
  - small: 12px-14px
  - label: 10px-11px
- **Font Weights:**
  - Regular: 400
  - Medium: 500
  - Semi-bold: 600
  - Bold: 700
- **Letter Spacing:**
  - Normal: 0
  - Headings: -0.03em
  - Labels: 0.1em to 0.2em (uppercase)
- **Line Heights:**
  - Headings: 1.05 to 1.2
  - Body: 1.6 to 1.8
  - Tight: 1

### Spacing Scale
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 60px, 80px, 120px
- Use clamp() for responsive spacing on desktop/mobile

### Border Radius
- Subtle: 2px (tag buttons)
- Small: 4px
- Medium: 8px (cards, modals)
- Large: 12px (project cards)
- Full: 50% (circle, blob)

### Shadows
- Subtle: `0 4px 20px rgba(251,251,251,0.1)`
- Medium: `0 20px 40px rgba(251,251,251,0.1)`
- Large: `0 30px 60px rgba(251,251,251,0.15)`

### Animations/Transitions
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Left Coast custom curve)
- **Durations:**
  - Fast: 0.2s to 0.3s (transitions)
  - Medium: 0.4s to 0.5s (reveals)
  - Slow: 0.8s to 1s (page load reveals)
  - Loops: 2s to 8s (blob, shimmer)

### Responsive Breakpoints
- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** 480px to 767px
- **Small Mobile:** Below 480px

---

## Assets

### Images
- `hero-background-placeholder.png` — Hero section background (abstract/architectural image with dark overlay)

### Icons/Emojis
- Work items: 📦 🏭 📊 🚚
- Projects: 📦 📈 🎯 ⚡
- Settings: ⚙

### Fonts
- System fonts only (no external font imports needed)
- Uses OS defaults for optimal performance

---

## Files in This Handoff

- `index.html` — Complete portfolio (all sections + modals + tweaks)
- `DEPLOYMENT.md` — Step-by-step deployment guide
- `CHECKLIST.md` — Pre-launch verification checklist
- `package.json` — Node.js config + scripts
- `vercel.json` — Vercel deployment config
- `hero-background-placeholder.png` — Background image (if included)
- `README.md` — Project overview
- `README.md` (this file) — Design handoff specification

---

## Implementation Notes

1. **No External Dependencies:** The design is pure HTML/CSS/JS. No frameworks or libraries required.

2. **Static Site:** Ready to deploy as-is to Vercel, Netlify, or GitHub Pages.

3. **SEO Ready:** Includes meta tags for title, description, viewport, and Open Graph sharing.

4. **Accessible:** Semantic HTML, proper heading hierarchy, ARIA labels where needed.

5. **Mobile First:** Uses clamp() for responsive sizing, no media query breakpoints needed for most spacing.

6. **Performance:** Uncompressed file is ~45KB. No external assets to load. Instant page load.

7. **Customization:** All colors, fonts, and content are in the HTML/CSS. Easy to modify.

---

## Questions?

Refer to:
- **HTML file:** For exact implementation details, look at the code structure
- **DEPLOYMENT.md:** For deployment instructions
- **CHECKLIST.md:** For pre-launch verification

---

**Last Updated:** 2024  
**Status:** Ready for production deployment
