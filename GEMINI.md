# Portfolio Project - Instructional Context

This project is a personal portfolio built with Next.js 16, featuring internationalization (i18n), modern styling with Tailwind CSS v4, and a robust development workflow.

## Project Overview

- **Framework:** Next.js 16 (App Router)
- **Internationalization:** `next-intl`
  - **Configuration:** No-prefix routes (e.g., `/` for both English and Portuguese).
  - **Structure:** 
    - `src/app/[locale]`: Dynamic locale segment for internal routing.
    - `messages/`: Translation files (`en.json`, `pt.json`).
    - `src/i18n/`: Config and request handlers.
- **Styling:** Tailwind CSS v4 with `shadcn/ui`.
- **Icons:** `@phosphor-icons/react`.
- **Validation & Workflow:**
  - **Husky:** Git hooks.
  - **Commitlint:** Conventional Commits (`@commitlint/config-conventional`).
  - **lint-staged:** Runs ESLint on staged files.

## Building and Running

### Development
```bash
pnpm dev
```

### Production Build
```bash
pnpm build
```

### Linting
```bash
pnpm lint
```

### Prepare Husky
```bash
pnpm prepare
```

## Development Conventions

### Internationalization (i18n)
- **Route Prefixing:** The project is configured to **not** show the locale prefix in the URL (`localePrefix: 'never'`).
- **Adding Translations:** Add new keys to both `messages/en.json` and `messages/pt.json`.
- **Usage:**
  - **Server Components:** Use `getTranslations` from `next-intl/server`.
  - **Client Components:** Use `useTranslations` from `next-intl`.

### Styling & Components
- **Tailwind v4:** Uses the new `@import "tailwindcss"` syntax in `globals.css`.
- **shadcn/ui:** Components are located in `src/components/ui`. Use `npx shadcn@latest add [component]` to add more.
- **Design Tokens:** CSS variables are defined in `globals.css` using the OKLCH color space.

### Git Workflow
- **Commit Messages:** Must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification (e.g., `feat:`, `fix:`, `docs:`, `chore:`). This is enforced by `commitlint`.
- **Pre-commit Hooks:** `lint-staged` runs automatically to ensure code quality.

## Key Files & Directories
- `src/app/[locale]`: Root of the application with locale support.
- `src/middleware.ts`: Handles i18n routing logic.
- `src/i18n/config.ts`: Defines supported locales (`en`, `pt`).
- `messages/`: Directory for JSON translation files.
- `components.json`: Configuration for `shadcn/ui`.
- `next.config.ts`: Integrated with `next-intl` plugin.
