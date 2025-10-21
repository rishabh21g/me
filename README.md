# Rishabh Gupta — Personal Portfolio

A fast, animated, and theme-aware personal portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, and Framer Motion. Content is driven by a single data file for easy customization.

- App Router with TypeScript and SEO metadata
- Tailwind CSS design tokens with dark mode via next-themes
- Animated Dock-style navbar with magnification hover effect
- Reusable motion components and cards
- GitHub contributions heatmap

## Tech Stack

- Framework: Next.js ([src/app](src/app))
- Language: TypeScript
- Styling: Tailwind CSS ([tailwind.config.ts](tailwind.config.ts), [src/app/globals.css](src/app/globals.css))
- UI: shadcn/ui + Radix Primitives (e.g., [`Button`](src/components/ui/button.tsx), [`Badge`](src/components/ui/badge.tsx), [`Card`](src/components/ui/card.tsx), [`Tooltip`](src/components/ui/tooltip.tsx), [`Separator`](src/components/ui/separator.tsx), [`Avatar`](src/components/ui/avatar.tsx))
- Animations: Framer Motion ([`BlurFade`](src/components/magicui/blur-fade.tsx), [`BlurFadeText`](src/components/magicui/blur-fade-text.tsx), [`Dock`](src/components/magicui/dock.tsx))
- Icons: Lucide + react-icons ([`Icons`](src/components/icons.tsx))
- Theming: next-themes ([`ThemeProvider`](src/components/theme-provider.tsx), [`ModeToggle`](src/components/mode-toggle.tsx))
- Data: Single source of truth ([`DATA`](src/data/resume.tsx))
- GitHub Heatmap: react-github-calendar ([`GitHubHeatmap`](src/components/github.tsx))

## Features

- Animated Dock navbar with magnification
  - [`Dock`](src/components/magicui/dock.tsx) and [`DockIcon`](src/components/magicui/dock.tsx)
- Smooth section and text reveals
  - [`BlurFade`](src/components/magicui/blur-fade.tsx), [`BlurFadeText`](src/components/magicui/blur-fade-text.tsx)
- Reusable content cards
  - [`ResumeCard`](src/components/resume-card.tsx), [`ProjectCard`](src/components/project-card.tsx)
- Centralized content management
  - [`DATA`](src/data/resume.tsx) for profile, links, experience, education, skills, and projects
- Theme toggle (dark/light) with persistence
  - [`ModeToggle`](src/components/mode-toggle.tsx)
- GitHub streak/heatmap display
  - [`GitHubHeatmap`](src/components/github.tsx)

## Project Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    github.tsx
    icons.tsx
    mode-toggle.tsx
    navbar.tsx
    project-card.tsx
    resume-card.tsx
    mdx.tsx
    magicui/
      blur-fade.tsx
      blur-fade-text.tsx
      dock.tsx
    ui/
      avatar.tsx
      badge.tsx
      button.tsx
      card.tsx
      separator.tsx
      tooltip.tsx
  data/
    resume.tsx
  lib/
    utils.ts
```

Key entry points:
- App shell and SEO: [src/app/layout.tsx](src/app/layout.tsx)
- Home page sections: [src/app/page.tsx](src/app/page.tsx)
- Theme tokens and prose styling: [src/app/globals.css](src/app/globals.css)
- Tailwind configuration: [tailwind.config.ts](tailwind.config.ts)

## Getting Started

Prerequisites:
- Node 18+
- pnpm (recommended), npm or yarn also work

Install dependencies:
```sh
pnpm install
```

Run the dev server:
```sh
pnpm dev
```

Build for production:
```sh
pnpm build
```

Start the production server:
```sh
pnpm start
```

No environment variables are required for basic usage.

## Customization

1) Edit profile/content
- All data lives in [`src/data/resume.tsx`](src/data/resume.tsx)
  - Name, bio, skills: `DATA.name`, `DATA.description`, `DATA.skills`
  - Navbar and social links: `DATA.navbar`, `DATA.contact.social`
  - Work experience: `DATA.work`
  - Projects: `DATA.projects`
  - Education: `DATA.education`

2) Update SEO metadata
- See [`src/app/layout.tsx`](src/app/layout.tsx) `export const metadata`

3) Change theme tokens and styling
- CSS variables (light/dark): [`src/app/globals.css`](src/app/globals.css)
- Tailwind tokens: [`tailwind.config.ts`](tailwind.config.ts)

4) Navbar Dock
- Items are derived from `DATA.navbar` and `DATA.contact.social` in [`src/components/navbar.tsx`](src/components/navbar.tsx)
- Dock props:
  - [`Dock`](src/components/magicui/dock.tsx): `magnification`, `distance`, `className`
  - [`DockIcon`](src/components/magicui/dock.tsx): inherits `magnification` and `distance` from Dock

5) Motion components
- Section reveal:
  - [`BlurFade`](src/components/magicui/blur-fade.tsx) props: `duration`, `delay`, `yOffset`, `inView`, `blur`
- Text reveal:
  - [`BlurFadeText`](src/components/magicui/blur-fade-text.tsx) props: `delay`, `yOffset`, `animateByCharacter`, `characterDelay`

6) Utilities
- Class merge helper: [`cn`](src/lib/utils.ts)
- Pretty dates: [`formatDate`](src/lib/utils.ts)

## Component Examples

- Dock in the navbar ([`src/components/navbar.tsx`](src/components/navbar.tsx)):
```tsx
import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

<Dock magnification={60} distance={140} className="bg-background">
  <DockIcon>
    <Link href="/" className={buttonVariants({ variant: "ghost", size: "icon" })}>
      {/* icon */}
    </Link>
  </DockIcon>
</Dock>
```

- Section and text animations:
```tsx
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

<BlurFade delay={0.1}>
  <h2>Work Experience</h2>
</BlurFade>

<BlurFadeText delay={0.04} text="Proof of Work" />
```

- Cards:
```tsx
import { ResumeCard } from "@/components/resume-card";
import { ProjectCard } from "@/components/project-card";

<ResumeCard
  logoUrl="/logo.png"
  altText="Company"
  title="Company"
  subtitle="Role"
  period="2023 - Present"
  description="What you did"
/>

<ProjectCard
  title="Project"
  description="Short description"
  dates="2024"
  tags={["Next.js", "Tailwind CSS"]}
/>
```

## Styling and Theming

- Colors and radii derive from CSS variables in [`src/app/globals.css`](src/app/globals.css) and are mapped in Tailwind via [`tailwind.config.ts`](tailwind.config.ts).
- Dark mode toggled via [`ModeToggle`](src/components/mode-toggle.tsx) and provided by [`ThemeProvider`](src/components/theme-provider.tsx).

## Deployment

This project is ready for Vercel:
- Build command: `pnpm build`
- Output: Next.js (Node server)
- Ensure `NODE_VERSION` is 18+ in your environment.

## Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)

## License

Add your preferred license file (e.g., MIT) at the repository root.