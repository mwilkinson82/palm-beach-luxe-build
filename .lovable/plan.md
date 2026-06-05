## About page — 2026 reframe: modern principal, extended bench

The current Story reads like an old-school craftsman in a truck. We're rewriting it as a modern principal who married old-world standards with new-world technology. We're also restructuring the team section so three faces clearly read as the **leadership** of a much larger network — not the entire company.

### 1. New AJ portrait
- Upload the attached `AJ_Hoover_Zoom_Profile_Full_View_Retina_1200.PNG` via `lovable-assets` to `src/assets/aj-hoover-v2.png.asset.json`.
- Swap the hero `<img>` to use the new asset. Keep the old file untouched as a fallback.
- The new photo is already presented in a square ivory mat with the AJ Hoover signature wordmark inset. To preserve that mat/signature treatment:
  - Drop the brass hairline border and offset seafoam wash from around the portrait (the photo already has its own ivory frame).
  - Switch the portrait frame from `aspect-[4/5]` to `aspect-square`.
  - Remove the small "AJ Hoover · Founder" caption beneath it — the signature in the image does that job.

### 2. Rewrite "The Story" — modern principal, not crusty craftsman
Keep the three-movement structure (it scans well). Rewrite the copy and the pull quote so the tone reads like a CEO of a $5–20M custom home firm in 2026, not a guy who learned framing from his dad.

**I. Origin** — keep current copy. It earns the work ethic without sounding rural-quaint.

**II. The Standard** — rewrite to lead with selection of partners + the standard he holds them to, not "the slow way."
> "AJ moved to Florida and spent two decades curating the artisans, engineers, and trade partners now behind every Beau Monde home — the masons, millworkers, mechanical and technology specialists who meet a standard most firms can't enforce. Beau Monde isn't a crew. It's a vetted network operating under one signature."

**Pull quote** — replace the current "old houses, by hand, by name" line. New quote:
> "Old-world standards. New-world tools. One signature on every house."

**III. Today** — rewrite to make it explicit: hands-on principal + modern operating system.
> "Three decades on, AJ still walks every job and signs every standard — now backed by a technology stack that gives owners full transparency into daily logs, CPM schedules, and the selection process from dream board through procurement and install. Old discipline. Modern instruments."

### 3. Reframe "The Team" → "Leadership"
The problem: three people on a page implies a three-person company building $20M homes. The fix is to clearly label this as the leadership team and visually anchor it inside a much larger network.

**Section eyebrow + headline**
- Change eyebrow from "The Bench" to "Leadership".
- Change headline from "The Beau Monde team." to "The principals. The bench is deeper than three."
- Add a short lede paragraph below the headline:
> "Three principals lead Beau Monde day-to-day. Behind them sits a vetted network of architects, masons, millworkers, mechanical specialists, technology partners, and project consultants — each invited by AJ, each held to the same standard."

**Role labels** — promote the three to the leadership tier so the titles match the framing:
- John Colaiacovo → **Senior Project Manager**
- Michelle Williams → **Director of Finance & Operations**
- Linda Lucas → **Senior Project Manager**

**The Extended Bench strip** (new, sits directly under the three cards)
A single full-width hairline-bordered band showing the network at a glance — counts + categories, no faces. Renders like an editorial colophon, not a logo wall.

```text
─────────────────────────────────────────────────
THE EXTENDED BENCH
Architects · Structural & Civil Engineers · Master Masons ·
Millwork & Cabinetry · Mechanical, Electrical, Plumbing ·
Smart-Home & Security · Landscape Architects · Interior Partners
─────────────────────────────────────────────────
   40+        20+          3
   Vetted    Years of      Florida
   Trade     Combined      Certified
   Partners  Leadership    Master Builder
─────────────────────────────────────────────────
```

- Three brass-numeral stats in Cormorant, labels in Fira small-caps.
- Hairline dividers above/below in `border-accent/20`.
- Numbers are intentionally conservative + verifiable (40+ trade partners, 20+ years combined leadership tenure, 1 FCMB). I'll flag any number you want me to change before publishing.
- No logos, no faces, no badges in this strip — keeps the "quiet luxury" rule.

**Closing micro-line under the strip**
> "Small on purpose. Resourced like a firm three times the size."

### 4. Files
- `src/assets/aj-hoover-v2.png.asset.json` — new (via `lovable-assets`).
- `src/pages/About.tsx` — Story copy rewrite, pull-quote rewrite, portrait frame/treatment change, team section reframe + Extended Bench strip + role title updates.
- Old `aj-hoover.png` stays in place as a fallback.

### Things I want you to confirm before I build
1. **The three new role titles** — OK to promote John/Linda to "Senior Project Manager" and Michelle to "Director of Finance & Operations"? Or do you want different titles?
2. **The bench numbers (40+ / 20+ / 1)** — say the word if you want different figures.
3. **The new pull quote** — "Old-world standards. New-world tools. One signature on every house." — keep or revise?

Once you greenlight (or edit) those three, I'll build it.