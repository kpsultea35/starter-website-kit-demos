# 🚀 START HERE — Your PCOS Planner Launch Guide

Everything is built. This is your exact, in-order checklist to go live.
I've done all the digital build work; the remaining steps need **your** accounts,
identity, and payment info — which only you can provide. Each takes minutes.

**Total time to launch: ~2–4 hours of your hands-on work.**

---

## ✅ What's already DONE for you (in this repo)

| File | What it is |
|---|---|
| `pcos-planner-assets/PCOS-Cycle-Symptom-Planner.pdf` | ⭐ **The finished 20-page product** (pink theme) — ready to sell |
| `pcos-planner-assets/PCOS-Planner-Sage-Theme.pdf` | Same planner in an earthy **Sage & Sand** theme — pick whichever look you prefer (or sell both) |
| `pcos-planner-assets/PMDD-Symptom-Tracker-Planner.pdf` | ⭐ **Second product** — 14-page PMDD planner (lavender), your first expansion |
| `pcos-planner-assets/FREE-PCOS-Daily-Tracker.pdf` | The finished free lead magnet |
| `pcos-planner-assets/listing-1.png` … `listing-6.png` | ⭐ **6 ready-to-upload Etsy listing images** (hero, what's-inside, features, etc.) |
| `pcos-planner-assets/listing-image-cover.png` | Extra cover image |
| `pcos-planner-assets/landing-page.html` | Ready-to-deploy email opt-in page |
| `pcos-planner-assets/planner.html` / `free-tracker.html` / `pmdd-planner.html` / `planner-sage-theme.html` | Editable source (re-render anytime) |
| `pcos-planner-assets/*.js` | Playwright scripts that regenerate the page captures + listing images |
| `pcos-planner-launch-kit.md` | Etsy title, tags, description, pricing |
| `pcos-planner-faceless-marketing-kit.md` | 6 video scripts + strategy |
| `pcos-planner-lead-magnet-funnel.md` | Landing copy + 3 welcome emails |
| `pcos-planner-brand-and-calendar.md` | Brand names, bios, 30-day calendar |
| `pcos-planner-canva-build-guide.md` | Page-by-page text (if you want to redesign in Canva) |

> The PDFs are **real and sellable as-is.** You can launch with them today, or
> re-style them in Canva later using the build guide. Don't wait for "perfect."

---

## 📋 YOUR launch checklist (in order)

### STEP 1 — Download the assets (2 min)
- Download `PCOS-Cycle-Symptom-Planner.pdf` and `FREE-PCOS-Daily-Tracker.pdf` from this repo to your computer.
- *(They were also sent to you in chat.)*

### STEP 2 — Pick your brand name (5 min)
- Open `pcos-planner-brand-and-calendar.md` → choose a name (my pick: **Cycle & Bloom**).
- Quick-check it's free on Etsy + as a TikTok/Instagram handle.

### STEP 3 — Create your Etsy shop (30–45 min) — *needs your ID + bank/card*
1. Go to **etsy.com/sell** → create account → "Open your shop."
2. Set shop name (Step 2), language, currency, country.
3. Add your bank details (for payouts) + a card (Etsy's small listing fees).
4. **Create the listing:**
   - Upload `PCOS-Cycle-Symptom-Planner.pdf` as a **Digital download**.
   - **Title / Tags / Description:** copy-paste from `pcos-planner-launch-kit.md` §3.
   - **Price:** $15 (set list price $19, run a sale to $12–15 — Etsy favors discounts).
   - Category: Paper & Party Supplies → Paper → Planners. Type: Digital.
5. **Make 5–8 listing images** in Canva (free): use the planner pages on a tablet/paper mockup. (Open `planner.html` screenshots or export pages as images.)
6. Add the "How to download & print" note in the listing description.
7. **Publish.** 🎉

### STEP 4 — Set up your free email funnel (30 min) — *needs your signup*
1. Create a free **MailerLite** account (free up to 1,000 subscribers).
2. **Landing page:** either rebuild `landing-page.html`'s layout in MailerLite's builder, OR deploy the HTML file free via **Netlify Drop** (drag-and-drop at app.netlify.com/drop) and connect the form (instructions are in the comment at the top of `landing-page.html`).
3. Upload `FREE-PCOS-Daily-Tracker.pdf` to MailerLite (or Google Drive) to deliver it.
4. **Automation:** new subscriber → send the 3 welcome emails. Copy is in `pcos-planner-lead-magnet-funnel.md` §4. Email 1 delivers the free PDF.
5. Grab your landing-page link.

### STEP 5 — Set up your bio link (10 min)
- Create a free **Linktree** (or Stan/Beacons).
- Two buttons: **🆓 Free tracker** (→ landing page) and **🛒 Full planner** (→ Etsy listing).

### STEP 6 — Create social accounts (15 min) — *needs your phone for verification*
- New **TikTok** + **Instagram** + **Pinterest** under your brand name.
- Paste the bios from `pcos-planner-brand-and-calendar.md` §3.
- Put your Linktree in each bio.

### STEP 7 — Make + post your first videos (1–2 hrs) — *faceless*
- Install **CapCut** (free) on your phone.
- Film the first 3 days of the calendar (`pcos-planner-brand-and-calendar.md` §4):
  - Day 1: Planner flip-through (screen-record the PDF scrolling)
  - Day 2: Free tracker promo
  - Day 3: "Things no one tells you about PCOS"
- Use the exact on-screen text from the scripts in `pcos-planner-faceless-marketing-kit.md`.
- Add trending audio + captions. Post to all 3 platforms.

### STEP 8 — Run it for 30 days
- Follow the 30-day calendar. Post daily. Reply to comments.
- Double down on what gets views. Don't judge before day 30.

---

## 💡 Reminders
- **Compliance:** never claim the planner treats/cures PCOS. It's a *tracking tool*. The disclaimer is already on every page + in the listing copy. ✅
- **All sales final** (digital) — that line is in your listing copy.
- **Cost to launch:** ~$0–20 (Etsy charges ~$0.20/listing + small fees on sales; everything else has a free tier).

---

## 🔁 Want to change the planner design?
The PDFs are generated from `planner.html` / `free-tracker.html`. Edit the HTML, then re-render with:
```
/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless --no-sandbox \
  --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=PCOS-Cycle-Symptom-Planner.pdf planner.html
```
Or rebuild from scratch in Canva using `pcos-planner-canva-build-guide.md`.

---

**You have a complete, real, launchable business. The product exists. Go publish it. 💪🌸**
