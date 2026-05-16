# V S Ravi Sashank Dhulipala — Developer Portfolio

A premium, recruiter-ready full-stack developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

**Live URL:** _Add your Vercel URL here after deployment_

---

## ✨ Features

- **Premium dark-first design** with optional light mode toggle
- **Glassmorphism cards** with subtle gradient meshes and ambient blob lighting
- **Framer Motion** scroll-reveal animations and micro-interactions
- **All personal data is decoupled** into `/data/*.ts` files — no UI code edits needed for content updates
- **Sticky navbar** with active section highlighting and mobile slide-out menu
- **Project filter** by category (Full Stack, AI, Dashboard, Frontend, Backend)
- **Case Study modal** for every project with deep-dive architecture breakdown
- **Animated experience timeline** with impact metrics
- **Skill bars** grouped by category with animated fill on scroll-reveal
- **Contact form** with frontend validation, copy-to-clipboard for email/phone, and backend integration placeholders
- **Floating contact CTA** and **Back-to-Top** button
- **Resume download** CTA throughout the site
- **Toast notification** system
- **Full SEO metadata** and Open Graph tags
- **Accessible** — semantic HTML, aria-labels, keyboard navigation, reduced-motion respect
- **One-command Vercel deploy**

---

## 🗂 Project Structure

```
sashank-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API route (activate with Resend/Nodemailer)
│   ├── globals.css                # Global styles, custom properties, utility classes
│   ├── layout.tsx                 # Root layout — fonts, metadata, providers
│   ├── loading.tsx                # Global loading UI
│   ├── not-found.tsx              # Custom 404 page
│   └── page.tsx                   # Main page — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky nav with active section tracking
│   │   └── Footer.tsx             # Footer with socials
│   ├── sections/
│   │   ├── Hero.tsx               # Animated hero — name, headline, CTAs, badges
│   │   ├── About.tsx              # About me with pillar cards
│   │   ├── RecruiterSnapshot.tsx  # 10-second recruiter scan section
│   │   ├── Skills.tsx             # Skill bars grouped by category with tabs
│   │   ├── Projects.tsx           # Project cards with filter + case study modal
│   │   ├── Experience.tsx         # Animated work history timeline
│   │   ├── Education.tsx          # Education cards
│   │   ├── TechProof.tsx          # Technical depth proof cards
│   │   ├── AISection.tsx          # AI engineering capabilities
│   │   ├── ResumeSection.tsx      # Resume download CTA section
│   │   └── Contact.tsx            # Contact form + contact info cards
│   └── ui/
│       ├── Providers.tsx          # Client-side providers wrapper (Theme + Toast)
│       ├── ThemeProvider.tsx      # next-themes wrapper
│       ├── ThemeToggle.tsx        # Dark/light mode toggle button
│       ├── Toast.tsx              # Toast notification context + UI
│       ├── SectionReveal.tsx      # Framer Motion scroll-reveal wrapper
│       ├── FloatingCTA.tsx        # Floating contact/resume shortcut button
│       └── BackToTop.tsx          # Scroll-to-top button
│
├── data/
│   ├── profile.ts                 # Name, headline, availability, contact, badges
│   ├── projects.ts                # All project data — tech, metrics, case studies
│   ├── skills.ts                  # Skills grouped by category with levels
│   ├── experience.ts              # Work history with bullets and tech
│   ├── education.ts               # Degrees, schools, dates
│   └── socials.ts                 # Social links + nav link config
│
├── lib/
│   └── utils.ts                   # cn(), copyToClipboard(), scrollToSection()
│
├── public/
│   └── resume.pdf                 # ← ADD YOUR RESUME HERE
│
├── .env.local.example             # Environment variable template
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+ (or yarn / pnpm)

### 1. Clone / Extract the project

```bash
# If cloning from GitHub:
git clone https://github.com/YOUR_REPO_HERE
cd sashank-portfolio

# Or extract the downloaded zip and:
cd sashank-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your resume

Copy your resume PDF into the `/public` folder and name it `resume.pdf`:

```
public/
└── resume.pdf    ← your actual resume
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Customisation Guide

All content is stored in editable data files. **You never need to touch UI component code** for routine updates.

### Update Personal Info / Contact Details

Edit **`data/profile.ts`**:

```ts
export const profile = {
  name: "V S Ravi Sashank Dhulipala",
  email: "your@email.com",
  phone: "+1 (000) 000-0000",
  location: "Your City, TX",
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourusername",
  // ...
};
```

### Add or Edit Projects

Edit **`data/projects.ts`**. Each project follows the `Project` type. To add a new one:

```ts
{
  id: "my-new-project",
  title: "My New Project",
  subtitle: "Short descriptor",
  tagline: "One-line value proposition",
  category: ["Full Stack", "AI"],   // Used for filtering
  featured: true,
  tech: ["Next.js", "TypeScript", "PostgreSQL"],
  highlights: ["Key feature 1", "Key feature 2"],
  metrics: [
    { label: "Response Time", value: "<100ms" },
  ],
  liveDemo: "https://your-live-demo-url.com",
  github: "https://github.com/you/repo",
  // ... see full type definition in data/projects.ts
}
```

To add a new filter category, also add it to the `CATEGORIES` array at the top of `components/sections/Projects.tsx`.

### Add or Edit Skills

Edit **`data/skills.ts`**. Add a new skill inside an existing category:

```ts
{ name: "New Skill", level: 80 },   // level: 0–100
```

Or add a new category by following the `SkillCategory` type pattern.

### Update Work Experience

Edit **`data/experience.ts`**. Add a new entry at the top of the array (most recent first):

```ts
{
  id: "new-company",
  role: "Senior Software Engineer",
  company: "Acme Corp",
  period: "Jan 2026 – Present",
  current: true,
  bullets: ["Built X using Y, achieving Z."],
  tech: ["React", "TypeScript"],
  color: "sky",   // "sky" | "violet" | "emerald" | "amber"
}
```

### Update Education

Edit **`data/education.ts`** — add degrees or schools following the same pattern.

### Update Social Links / Nav Items

Edit **`data/socials.ts`**:

```ts
export const socials = {
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourusername",
  // ...
};
```

To change navigation items or order, update `navLinks` in the same file.

### Replace Resume

Drop your `resume.pdf` into `/public/resume.pdf`. The download button and all CTA links automatically use `/resume.pdf` via `profile.resume` in `data/profile.ts`.

---

## 📬 Activating the Contact Form

The form currently logs submissions to the console. To send real emails:

### Option A — Formspree (easiest, no backend)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a form and copy your endpoint URL
3. In `components/sections/Contact.tsx`, replace the simulated submission:

```ts
// Replace:
await new Promise((r) => setTimeout(r, 1800));
setStatus("success");

// With:
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) { setStatus("success"); setForm(initialForm); }
else setStatus("error");
```

### Option B — Resend + Next.js API Route (recommended)

1. `npm install resend`
2. Add `RESEND_API_KEY=re_...` to `.env.local`
3. Uncomment the Resend block in `app/api/contact/route.ts`
4. In `Contact.tsx` replace the simulated submission with:

```ts
const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) { setStatus("success"); setForm(initialForm); }
else setStatus("error");
```

### Option C — EmailJS (client-side)

1. `npm install @emailjs/browser`
2. Create a service + template at [emailjs.com](https://emailjs.com)
3. Call `emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)` inside `handleSubmit`

---

## ☁️ Deploying to Vercel

### One-click deploy (recommended)

1. Push the project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — no build config needed
5. Click **Deploy**

### Add environment variables on Vercel

If you activated the contact form backend:

1. Vercel Dashboard → your project → **Settings → Environment Variables**
2. Add `RESEND_API_KEY` (or your chosen vars from `.env.local.example`)
3. Redeploy

### Manual CLI deploy

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Custom domain

1. Vercel Dashboard → your project → **Settings → Domains**
2. Add your domain and follow DNS instructions
3. Update `NEXT_PUBLIC_SITE_URL` in environment variables
4. Update the `url` field in `app/layout.tsx` Open Graph metadata

---

## 🏗️ Build for Production

```bash
npm run build   # Builds the Next.js app
npm run start   # Starts the production server locally
```

---

## 🔍 SEO Checklist

Before going live:

- [ ] Replace `https://YOUR_PORTFOLIO_DOMAIN_HERE` in `app/layout.tsx` with your real URL
- [ ] Add `/public/og-image.png` (1200×630px) for Open Graph previews
- [ ] Replace placeholder resume with your actual `resume.pdf`
- [ ] Confirm all project `liveDemo` and `github` URLs are correct in `data/projects.ts`
- [ ] Update LinkedIn and GitHub URLs in `data/profile.ts` / `data/socials.ts`

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Syne + Plus Jakarta Sans (Google Fonts) |
| Theme | next-themes |
| Deployment | Vercel |

---

## 🧰 Common Troubleshooting

**`Module not found` errors after cloning**
```bash
rm -rf node_modules .next
npm install
npm run dev
```

**Fonts not loading**
The project uses Google Fonts via `next/font`. Ensure you have an internet connection on first build. Fonts are self-hosted automatically by Next.js after the first build.

**Dark mode flicker on first load**
This is handled by `next-themes` with `suppressHydrationWarning` on the `<html>` tag. If you still see it, ensure `defaultTheme="dark"` and `enableSystem={false}` are set in `Providers.tsx`.

**Framer Motion animations not working**
All animated components are marked `"use client"`. If you add new sections, ensure the file has `"use client"` at the top when using hooks or motion.

---

## 📄 License

This portfolio is personal and proprietary. Feel free to use it as inspiration, but please do not redistribute or deploy it as your own without modification.

---

Built with ♥ by **V S Ravi Sashank Dhulipala**  
[ravisashankdhulipala@gmail.com](mailto:ravisashankdhulipala@gmail.com)
