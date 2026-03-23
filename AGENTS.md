# AGENTS.md - Agentic Coding Guidelines

This document provides agentic coding guidelines for the Vegan Ipsum website project.

---

## Tech Stack

| Category        | Technology               |
| --------------- | ------------------------ |
| Framework       | Next.js 16 (App Router)  |
| Language        | TypeScript (Strict mode) |
| React           | React 19                 |
| Styling         | Tailwind CSS v4          |
| Package Manager | Bun                      |

---

## Project Structure

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
│   │   └── SmartLink.tsx
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

---

## Commit Message Format

- **Subject**: lowercase, max 50 characters
- **Body**: sentence-case or lower-case, max 72 characters per line
- Use conventional commits format (type: subject)

```
fix: standardize react types in components

Add react import for consistent type usage. Use React.JSX.Element for return types.
```

---

## Committing Changes

After completing a task:

1. Run `git status` and `git diff` to review changes
2. Group changes into logical commits:
   - **One file changed**: Single commit
   - **Multiple files with similar changes**: One commit per logical change
   - **Unrelated changes**: Separate commits
3. Prepare `git add` and `git commit` commands following commitlint rules:
   - Subject: lowercase, max 50 characters
   - Body: sentence-case or lower-case, max 72 characters per line
4. Update git.md with the prepared commands in this format:

```
git add <files>
git commit -m "type: subject

- body point goes here
- body point goes here"
```

5. Remove stale commits from git.md when changes are committed

---

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
bun run tsc              # TypeScript type check

# SEO
bun run postbuild        # Generate sitemap (next-sitemap)
bun run indexnow         # Submit sitemap to IndexNow
```

---

## Utils Knowledge Base

### Utils (`src/utils/`)

| File            | Function                | Description                                            |
| --------------- | ----------------------- | ------------------------------------------------------ |
| `classnames.ts` | `cn()`                  | Combines Tailwind classes (clsx + twMerge)             |
| `seo.ts`        | `getBaseUrl()`          | Returns normalized base URL for the application        |
| `seo.ts`        | `safeCanonical(slug)`   | Normalizes a slug by removing leading/trailing slashes |
| `seo.ts`        | `getCanonicalUrl(slug)` | Generates fully qualified canonical URL                |
| `schema.ts`     | `personSchema()`        | Builds Schema.org Person entity                        |
| `schema.ts`     | `websiteSchema()`       | Builds Schema.org WebSite entity                       |
| `schema.ts`     | `getFullSchemaGraph()`  | Returns complete JSON-LD graph                         |

---

## Coding Standards

### Naming

- Components: `PascalCase` (`Button.tsx`)
- Functions: `camelCase` (`fetchData`)
- Files: `kebab-case` (`api-utils.ts`)
- Constants: `SCREAMING_SNAKE_CASE` (`MAX_RETRIES`)

### Import Order

1. React/Next.js built-ins
2. External libraries
3. Internal aliases (`@/`)
4. Relative imports

### TypeScript

- Use `interface` for object shapes
- Use `type` for unions and tuples
- NO `any` - use `unknown` if uncertain
- Avoid `!` - use optional chaining

---

## Components

### SmartLink

Use `SmartLink` for both internal and external links - handles `target`/`rel` attributes and SEO automatically.

### Button

Supports `asChild` prop for polymorphic rendering using `@radix-ui/react-slot`.

---

## API Standards

- Use `NextResponse.json` for responses
- Check HTTP methods explicitly
- Handle errors with try/catch
- Return proper status codes (200, 400, 405, etc.)

---

## Validation

Validate all inputs from API requests and forms. Use Zod for schema validation.

---

## JSDoc Requirements

Add JSDoc to:

- Exported functions and hooks
- Complex utility functions
- Types and interfaces

Skip for:

- Obvious props (`className`, `children`)
- Simple interfaces
