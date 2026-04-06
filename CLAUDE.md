# AGENTS.md

> **This file serves as the authoritative reference for AI agents working on the `vegan-ipsum` codebase.**

## Project Overview

Vegan Ipsum is a compassion-forward placeholder text generator for designers, developers, and teams who prefer plant-based, ethical sample content. This repository contains the **official website** — the central directory for all Vegan Ipsum tools and integrations.

### What This Website Provides

- **Interactive Generator**: Clean, accessible UI with adjustable length and structure for copy-ready vegan-themed placeholder text
- **JSON API**: REST-based endpoint for programmatic text generation (ideal for apps, automation, and custom tooling)
- **Ecosystem Hub**: Links to related developer tools including the npm package, Node CLI, and VS Code extension

### Tech Stack

- **Type**: Next.js website (App Router)
- **Lang**: TypeScript (strict mode)
- **UI**: React 19 + Tailwind CSS v4
- **Package Manager**: Bun

## Project Architecture

```
src/
├── app/                    # Next.js App Router - routing only
│   ├── api/               # API routes
│   │   └── route.ts       # CORS proxy endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── json-api/page.tsx
│   ├── npm-package/page.tsx
│   ├── node-cli/page.tsx
│   └── vscode-extension/page.tsx
│
├── components/
│   ├── composites/       # Higher-level composed components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── JsonLd.tsx
│   │   ├── PageHeader.tsx
│   │   ├── PageTags.tsx
│   │   └── Link.tsx
│   │
│   ├── layout/           # Layout components
│   │   ├── Layout.tsx
│   │   ├── Main.tsx
│   │   └── Section.tsx
│   │
│   ├── primitives/       # UI primitives (shadcn-style)
│   │   ├── Button.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Container.tsx
│   │   ├── Icon.tsx
│   │   ├── InfoBox.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   └── Select.tsx
│   │
│   └── sections/         # Page sections
│       ├── about/
│       ├── contact/
│       ├── home/
│       ├── json-api/
│       ├── node-cli/
│       ├── npm-package/
│       └── vscode-extension/
│
├── constants/            # Project-wide constants
│   ├── icons.ts
│   ├── navlinks.ts
│   └── seo.ts
│
├── styles/              # Global styles
│   └── globals.css
│
└── utils/               # Shared utilities
    ├── classnames.ts    # cn() utility
    ├── meta.ts
    ├── schema.ts        # JSON-LD schema builders
    └── seo.ts           # SEO utilities
```

## Available Commands

```bash
# Development
bun run dev              # Start development server (Turbopack)
bun run build            # Build for production
bun run start            # Start production server

# Linting & Formatting
bun run lint             # Lint all files
bun run lint:fix         # Fix auto-fixable issues
bun run format           # Format files
bun run format:check     # Check formatting

# Type Checking
bun run tsc              # TypeScript type check
```

## Utils Knowledge Base

### Utils (`src/utils/`)

**`classnames.ts`**

- `cn()` — Combines Tailwind classes (clsx + twMerge)

**`seo.ts`**

- `getBaseUrl()` — Returns normalized base URL for the application
- `safeCanonical(slug)` — Normalizes a slug by removing leading/trailing slashes
- `getCanonicalUrl(slug)` — Generates fully qualified canonical URL

**`schema.ts`**

- `personSchema()` — Builds Schema.org Person entity
- `websiteSchema()` — Builds Schema.org WebSite entity
- `getFullSchemaGraph()` — Returns complete JSON-LD graph

## Components

### Link Component

Use `Link` for both internal and external links — handles `target`/`rel` attributes and SEO automatically.

```tsx
import { Link } from "@/components/composites/Link";

// Internal link
<Link href="/about">About</Link>

// External link
<Link href="https://example.com" external>External</Link>
```

### Button Component

The Button component supports `asChild` prop for polymorphic rendering with the Slot pattern.

```tsx
import { Button } from "@/components/primitives/Button";

// Standard button
<Button variant="primary" size="md">Click me</Button>

// As child (polymorphic)
<Button asChild>
  <Link href="/about">About</Link>
</Button>
```

## Coding Conventions

### Comments

#### JSDoc (for exported functions and complex types)

```ts
/**
 * {Description of what the function does}
 *
 * @param {Type} name - {Description of parameter}
 * @returns {Type} - {Description of return value}
 * @throws {Type} - {Description of when error is thrown}
 */
```

#### Type/Interface Definitions

```ts
/* {Description of the type} */
type Foo = string;

/* {Description of the interface} */
interface Bar {
  prop: string;
}
```

#### Variable Definitions

```ts
/* {Description of the variable} */
const myVar = "value";
```

#### Conditional Check Descriptions

```ts
// check: if user is authenticated
if (isAuthenticated) {
  // do something
}
```

### Naming Conventions

- Components: `PascalCase` (`Button.tsx`)
- Functions/variables: `camelCase` (`getBaseUrl`)
- Files: `kebab-case` (`api-utils.ts`)
- Constants: `SCREAMING_SNAKE_CASE` (`MAX_RETRIES`)

### Imports

ESM imports with `moduleResolution: bundler`:

```ts
import { cn } from "@/utils/classnames";
import { Button } from "@/components/primitives/Button";
```

### TypeScript

- Strict mode, no `any` without `// eslint-disable` comment
- Use type imports: `import type { Foo } from './types'`
- Error handling pattern: `error instanceof Error ? error.message : String(error)`
- Use `interface` for object shapes, `type` for unions/tuples
- Avoid `!` — prefer optional chaining

## Rules

- Use `cn()` from `src/utils/classnames.ts` for combining Tailwind classes
- API routes: Use `NextResponse.json`, validate inputs with Zod, handle errors with try/catch
- Link component: Handles internal/external links automatically (sets `target`/`rel` attributes)
- Button component: Supports `asChild` prop via `@radix-ui/react-slot` for polymorphic rendering

## Git Workflow

**Before preparing git.md (after each task):**

1. Run `bun run tsc` — Type check
2. Run `bun run format:check` — Format check
3. Run `bun run lint` — ESLint check

**After completing a task:**

1. Check unstaged changes: `git status --porcelain` && `git diff`
2. Stage files: `git add <files>`
3. Create `.tmp/git.md` containing the staged files and commit command
4. Create separate commits for each logical change; group similar changes only if they modify the same type of files
5. Do NOT run git commands directly — only write to `.tmp/git.md`
6. Wait for user to verify and commit
7. Do NOT restore `.tmp/git.md` after it's cleared — clearing is intentional

Example `.tmp/git.md`:

```bash
git add src/components/primitives/Button.tsx src/components/composites/Header.tsx
git commit -m "feat: add button variants and header navigation

- support primary, secondary, ghost button styles
- render nav links with active state in header"
```

## Commit Conventions

**Format:** `<type>(<scope>): <summary>`

**Types:** `feat`, `fix`, `docs`, `test`, `refactor`, `style`, `build`, `chore`

**Rules:** Subject line ≤72 chars, blank line after subject, body wrapped at 100 chars.

## Notes

- Tailwind CSS v4 configuration — check `src/styles/globals.css` for theme variables
