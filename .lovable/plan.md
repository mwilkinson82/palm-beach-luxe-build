## What this plan covers

All work happens in the **BMB Central** project (the remix you created). Nothing in this Palm Beach project changes. When you're ready to execute, open BMB Central, paste the kickoff message I give you at the bottom, and the agent there will execute against this plan.

## Strategy

Palm Beach stays as-is and speaks to the $15M+ buyer. BMB Central becomes the Space Coast site (Cocoa Beach, Titusville, Melbourne Beach) speaking to the $2–5M buyer. Same design system, same level of production polish, different brand mark, different hero, different contact details, slightly softened copy.

## Scope of changes in BMB Central

### 1. Brand identity
- Wordmark: `"Beau Monde"` → `"Beau Monde Central"` (or `"Beau Monde Builders Central"` — confirm preference).
- Tagline / location strip: "Palm Beach, Florida" → "Space Coast, Florida" (used on the hero corner stamp and in the footer).
- Page title, meta description, OG tags, and JSON-LD `Organization`/`LocalBusiness` schema all repointed to Central.
- `sitemap.xml`, `robots.txt`, canonical URLs updated to the Central domain once we know it. Until then, leave canonicals relative.

### 2. Home hero — swap the cinematic video
- Replace the current Palm Beach drone footage in `src/components/VideoHero.tsx` with the **AJ Hoover walkthrough video** (already in the project as `src/assets/new-delivery.mp4.asset.json` + poster — same asset is reused on the home + delivery section here).
- Update the poster image and unmute pill behavior to point at the same swapped source.
- Keep the same layout, animations, and unmute UX — only the source changes.

### 3. Reusable media that stays
- `WalkthroughShowcase`, `WalkthroughGallery`, `DeliveryShowcase`, `InterviewShowcase` — all of these are Space Coast footage already. Keep them in place, rewrite captions/eyebrows to drop any "Palm Beach" framing.
- "The Shores at Tranquility" carousel: stays. Confirm whether to keep that exact community name on the Central site or rebrand it.

### 4. Renovations
- Keep the Renovations page structure. Swap the hero video/poster only if you have Space Coast renovation footage you want featured. Otherwise reuse the current asset with updated copy.

### 5. Projects / "Find My Style"
- Keep the entire portfolio grid + style book flow. These are aspirational style references, not literal builds, so they work for both markets. Only the page headline gets softened from "Palm Beach Design Studies" to a Space Coast equivalent (e.g. "Space Coast Design Studies").

### 6. Copy pass — soften the Palm Beach voice
Surgical rewrites across `Home.tsx`, `About.tsx`, `Process.tsx`, `Renovations.tsx`, `Contact.tsx`, `Footer.tsx`:
- Strip references to "Palm Beach island," "Worth Avenue," "the discerning Palm Beach client," "$15M+ estates," etc.
- Reframe AJ's story to lead with the Central Florida / Space Coast operation while keeping the Palm Beach legacy as credential, not the headline.
- Keep the FCMB credential, the "vetted network of 50+," the "old-world standards, new-world tools" line — those carry over cleanly.

### 7. Contact section
- Phone, email, and street address replaced with the Space Coast office values (need them from you — see questions below).
- Email forms in `supabase/functions/send-contact-email/index.ts` repointed to the right inbox if it's different from `ajhoover@mac.com`.
- 205 Worth Avenue references removed from `SEO.tsx`, `Footer.tsx`, `Contact.tsx`, and the structured data.

### 8. SEO / structured data
- `src/components/SEO.tsx` `businessInfo` block rewritten: name, geo coordinates (Cocoa Beach area), address, areaServed list, price range adjusted from `$$$$$` to `$$$$`.
- FAQ schema rewritten to reflect Space Coast questions.
- New favicon if you have a Central wordmark variant; otherwise reuse the existing emblem.

### 9. Color palette
Per your direction, the palette stays — Ivory, Sand, Atlantic Navy, Brass, Seafoam. Same typography rules. No design-system changes.

## What does NOT change

- Component architecture, animations, design tokens, motion system.
- The portfolio gallery rules (non-clickable, no hover overlays).
- The "Talk to Beau Monde" / "Find My Style" CTA vocabulary.
- The legal pages (Privacy, Terms, Unsubscribe) other than the office address line.

## Order of operations in BMB Central

1. Lock brand identity (wordmark text + tagline strip).
2. Swap the home hero video source.
3. Run the copy pass across all pages to remove Palm Beach voice.
4. Update Contact page + Footer + SEO.tsx with Space Coast details.
5. Rewrite sitemap, robots, structured data.
6. Visual QA on desktop + mobile.
7. Publish to the BMB Central preview URL so you can send AJ a link.

## Technical notes

- BMB Central is a true remix of this project, so file paths, components, and design tokens are identical. Every edit below is a search-and-replace or a localized component edit — no rebuilds.
- Memory in BMB Central will need its own Core block to reflect "Space Coast / $2–5M / Beau Monde Central" so future agent sessions there don't drift back into Palm Beach voice.
- Memories about the FCMB asset, font rules, palette, and CTA vocabulary all still apply and should be copied to BMB Central's memory.

## What I need from you before I can execute

1. **Space Coast contact details** — phone, email, street address (or "by appointment only" if no physical office yet).
2. **Wordmark** — "Beau Monde Central" or "Beau Monde Builders Central"?
3. **Domain** — is there a planned domain for the Central site (e.g. `bmbcentral.com`, `bmbspacecoast.com`)? If not yet, I'll leave canonicals relative and the agent will bake the domain in later.

Once you answer those three, the BMB Central agent can execute end-to-end.
