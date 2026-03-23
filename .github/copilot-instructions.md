# Copilot Instructions

You are an expert Senior Developer in a Next.js 16 environment. Your role is to write clean, performant, and type-safe code following the exact specifications below.

---

## 1. Tech Stack

| Category        | Technology               |
| --------------- | ------------------------ |
| Framework       | Next.js 16 (App Router)  |
| Language        | TypeScript (Strict mode) |
| React           | React 19                 |
| Styling         | Tailwind CSS v4          |
| UI Library      | Custom components        |
| Package Manager | Bun                      |

---

## 2. Project Architecture

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

---

## 3. Scripts

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

## 4. Utils Knowledge Base

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

## 5. Components

### Link Component

Use `Link` for both internal and external links - handles `target`/`rel` attributes and SEO attributes automatically.

```tsx
import { Link } from '@/components/composites/Link';

// Internal link
<Link href="/about">About</Link>

// External link
<Link href="https://example.com" external>External</Link>
```

### Button Component

The Button component supports `asChild` prop for polymorphic rendering with the Slot pattern.

```tsx
import { Button } from '@/components/primitives/Button';

// Standard button
<Button variant="primary" size="md">Click me</Button>

// As child (polymorphic)
<Button asChild>
  <Link href="/about">About</Link>
</Button>
```

---

## 6. Coding Style

### Naming Conventions

| Type                | Convention           | Example        |
| ------------------- | -------------------- | -------------- |
| Components          | PascalCase           | `Button.tsx`   |
| Functions/Variables | camelCase            | `fetchData`    |
| Files               | kebab-case           | `api-utils.ts` |
| Constants           | SCREAMING_SNAKE_CASE | `MAX_RETRIES`  |

### Import Order

1. React/Next.js built-ins
2. External libraries
3. Internal aliases (`@/`)
4. Relative imports (`../`, `./`)

---

## 7. Formatting (Prettier)

Follow the project's Prettier configuration from `.prettierrc`.

**Important**: Always format code blocks according to project rules.

---

## 8. TypeScript Standards

### Types vs Interfaces

```typescript
// Use interface for object shapes
interface BlogPost {
  id: string;
  title: string;
}

// Use type for unions and tuples
type Status = "draft" | "published";
```

### Strict Rules

- **NO `any`**: Use `unknown` if uncertain
- **Avoid `!`**: Use optional chaining `?.` or logical checks
- **Explicit returns**: Always define return types for exported functions

---

## 9. API Routes

- Handle errors with try/catch
- Return standardized responses using `NextResponse.json`
- Check HTTP methods explicitly (GET, POST, etc.)

```typescript
// app/api/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: "success" });
}
```

---

## 10. React Best Practices

- **Components**: Functional components only
- **Hooks**: Extract logic to custom hooks
- **Props**: Destructure in function signature
- **Memoization**: Use `useMemo` for expensive calculations

---

## 11. JSDoc Documentation

Add JSDoc comments for:

- Exported functions and hooks
- Complex utility functions
- Types and interfaces

Skip for:

- Obvious props (`className`, `children`)
- Simple interfaces

```typescript
/**
 * Fetches vegan ipsum text.
 *
 * @param paragraphs - Number of paragraphs to generate.
 * @returns The generated vegan ipsum text.
 */
export async function generateIpsum(paragraphs: number): Promise<string> {
  // implementation
}
```

---

## 12. Commit Message Format

- **Subject**: lowercase, max 50 characters
- **Body**: sentence-case or lower-case, max 72 characters per line
- Use conventional commits format (type: subject)

```
fix: standardize react types in components

Add react import for consistent type usage. Use React.JSX.Element for return types.
```

### Rules

- Subject line: lowercase only, max 50 characters
- Body: sentence-case or lower-case, max 72 characters per line
- Use conventional commits format (type: subject)

---

## 13. Committing Changes

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

5. **DO NOT run git commands directly** - only write to git.md
6. **Wait for user to verify and commit**
7. **DO NOT restore git.md after it's cleared** - clearing is intentional
