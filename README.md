# 🚀 Vaibhav Mishra — Data Analyst Portfolio

A modern, premium, responsive personal portfolio website built for **Vaibhav Mishra** — Data Analyst | Business Analytics | Python | SQL | Power BI.

## 🌐 Live Demo

https://portfolio-vaibhavmishra-sde.vercel.app/

## 🛠️ Tech Stack

- **React 19 + TypeScript** — Component architecture
- **Vite** — Lightning-fast build tool
- **Tailwind CSS v4** — Utility-first styling
- **Lucide React** — Clean icon library
- **Plus Jakarta Sans / JetBrains Mono** — Premium typography

The project is intentionally dependency-light: Tailwind utilities handle layout
and responsive styling, while Framer Motion is used for focused page transitions.

## ✨ Features

- 🎨 Dark-first premium SaaS-style interface
- 📊 Interactive analytics dashboard widget in Hero
- 💡 From Data → Insight methodology pipeline (SQL, Python, Power BI)
- 📁 Featured Projects with expandable modal detail views
- 🔓 Open Source: GSSoC 2026 Contributor & OSCI Selection
- 🏆 Certifications: HackerRank SQL Advanced, Google Data Analytics, IBM Statistics 101
- 📋 Interactive Resume Viewer & Download Modal
- 🖱️ Custom glow cursor on desktop
- 📱 Fully responsive across all device sizes
- ⚡ Smooth scroll navigation with active section spy

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── DataPipeline.tsx
│   ├── Projects.tsx
│   ├── ProjectModal.tsx
│   ├── OpenSource.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Journey.tsx
│   ├── Contact.tsx
│   ├── ResumeModal.tsx
│   ├── CustomCursor.tsx
│   ├── SocialIcons.tsx
│   └── Footer.tsx
├── data/
│   └── portfolioData.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## 📬 Contact

- **Email**: vaibhavmishra9679@gmail.com
- **LinkedIn**: [linkedin.com/in/vaibhav-mishra-369488322](https://linkedin.com/in/vaibhav-mishra-369488322)
- **GitHub**: [github.com/vaibhavmishra-sde](https://github.com/vaibhavmishra-sde)

---

> Designed & built with curiosity, data, and code. © 2026 Vaibhav Mishra
## Portfolio notes

This is a component-driven React and TypeScript portfolio. Content lives in
`src/data/portfolioData.ts`, while sections in `src/components/` stay focused
on presentation and interaction. This keeps copy changes separate from UI
logic and makes new projects straightforward to add.

### Local workflow

```bash
npm install
npm run dev
npm run lint
npm run build
```

The contact form is configured for Netlify Forms and the production site is
deployable to either Netlify or Vercel using the included configuration files.

The interface keeps navigation and contact actions close to the content without
obscuring the page on smaller screens.

### Quality checks

Run `npm run check` before opening a pull request. It runs TypeScript checks,
Oxlint, and the production build in one command.
