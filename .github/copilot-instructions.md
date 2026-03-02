# GitHub Copilot Instructions

You are an expert Senior Developer in a Next.js 16 environment. Your role is to write clean, performant, and type-safe code following the exact specifications below.

## Tech Stack & Versions

- **Framework:** Next.js 16 (tested with ^16.1.6) - App Router
- **Language:** TypeScript (Strict mode enabled, TypeScript ^5)
- **React:** React 19 (installed version ^19.2.4)
- **Styling:** Tailwind CSS (v4) with PostCSS integration
- **Bundler / Dev Server:** Turbopack used in the `dev` script (`next dev --turbopack`)
- **Linting & Formatting:** ESLint (with Next/React plugins) and Prettier (installed ^3.8.1)
- **Other notable deps/tools:** `next-sitemap`, `husky`, `commitlint`, and `vegan-ipsum` package

## Project Architecture

The repository follows a Feature-Sliced Design adapted for the Next.js App Router. Confirmed layout and conventions:

- `app/`: Routing and layouts (App Router) only - pages and route handlers live here.
- `app/api/` (or `src/app/api/`): API route handlers and route.ts files for HTTP endpoints - keep server-side route handlers here and use `NextResponse`/route handlers for API logic.
- `src/components/`: Reusable UI primitives and composite components.
    - `primitives/`: UI primitives (shadcn-style) - avoid editing shared primitives unless necessary.
    - `composites/` and `sections/`: Higher-level composed UI and page sections.
    - **Links:** Use the `SmartLink` component for internal and external links to standardize behavior, SEO attributes, and accessibility (e.g., `target`/`rel` handling and `aria` labels).
- `src/lib/`: Utilities and configuration helpers (e.g., `lib/utils.ts`).
- `src/constants/`, `src/styles/`, and `src/utils/`: Project-wide constants, global styles, and utilities.
- `types/` and `actions/`: Type definitions and Server Actions respectively when used.
- `tsconfig.json` defines the `@/*` path alias pointing to `./src/*`.
- `tsconfig.json` has `strict: true` enabled and the project uses `reactStrictMode` in `next.config.ts`.
- Scripts include `dev` with Turbopack, and `postbuild`/`indexnow` using `next-sitemap`.

## Coding Style & Formatting

### General Rules

- **Language:** Use English for code and comments.
- **Naming:**
    - **Components:** PascalCase (e.g., `BlogCard.tsx`).
    - **Functions/Variables:** camelCase (e.g., `fetchPosts`).
    - **Files:** kebab-case for non-component files (e.g., `api-utils.ts`).
    - **Constants:** SCREAMING_SNAKE_CASE (e.g., `MAX_RETRIES`).

## Code Formatting (Prettier)

You must follow the formatting rules defined in our project configuration. Do not default to standard generic formatting.

1. **Prettier:** Always check the `.prettierrc` file in the project root before generating code. Match the existing formatting style of the project.
2. **ESLint:** Ensure generated code passes standard Next.js ESLint rules. Avoid patterns that trigger common warnings (like unused variables or missing dependencies in useEffect).

If You are unable to access the `.prettierrc` file, Fallback to these common Prettier settings used in Next.js projects:

**Rules for `.prettierrc`:**

- **Print Width:** 100 characters max.
- **Tab Width:** 4 tabs.
- **Use Tabs:** true (use tabs).
- **Semicolons:** Do not add semicolons.
- **Quotes:** Use double quotes.
- **Trailing Commas:** Add trailing commas in multi-line objects (es5).
- **Bracket Spacing:** Add spaces inside object literals `{ key: value }`.
- **Arrow Function Parentheses:** Always use parentheses `(x) => x`.
- **Operator Position:** Place operators at the start of lines in multiline expressions.
- **Object Wrapping:** Preserve existing wrapping of objects (do not force wrap or unwrap).

### Linting (ESLint)

- **Imports:** Group imports: React/Next first, External libraries second, Internal aliases third.
- **Unused Vars:** Do not leave unused variables; prefix with `_` if intentionally unused.

**Important:**
When writing code blocks, ensure they are pre-formatted according to these rules so I don't have to run the formatter manually.

## TypeScript Standards

### Types vs Interfaces

- Use **`interface`** for public API definitions and object shapes that might be extended.
- Use **`type`** for union types, tuples, or computed types.

```typescript
// GOOD
interface BlogPost {
	id: string;
	title: string;
}

type Status = "draft" | "published";
```

### Strictness

- **NO `any`**: Always define proper types. Use `unknown` if type is uncertain.
- **Non-null assertions:** Avoid `!`. Use optional chaining `?.` or logical checks.

## Documentation (JSDoc)

- Add JSDoc comments for all exported functions, hooks, and complex types.
- Do not add JSDoc for obvious props (e.g., a `className` prop).

```typescript
/**
 * Fetches a single blog post by its ID.
 * @param id - The UUID of the post.
 * @returns The post object or null if not found.
 * @throws {DatabaseError} If the connection fails.
 */
export async function getPostById(id: string): Promise<BlogPost | null> {
	// implementation
}
```

## API & Server Actions

### API Routes (`app/api/`)

- Handle errors using try/catch.
- Return standardized JSON responses:
    ```typescript
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    ```
- Check HTTP methods (GET, POST) explicitly.

### Server Actions (`actions/`)

- Prefer Server Actions for form mutations over API routes.
- Use `useActionState` or `useFormStatus` hooks for loading states.
- Revalidate cache after data mutation:
    ```typescript
    revalidatePath("/blog");
    ```

## React Best Practices

- **Components:** Functional components only.
- **Hooks:** Keep components small; extract logic to custom hooks (e.g., `useDebounce`).
- **Props:** Destructure props in the function signature.
- **Memoization:** Use `useMemo` for expensive calculations and `useCallback` for functions passed to child components only if necessary (avoid premature optimization).

## CI & Tests

- **CI:** Provide a GitHub Actions workflow that runs `lint:check`, `typecheck`, `build`, and tests on PRs. Place workflows under `.github/workflows/`.
- **Tests:** Specify the test runner (e.g., Vitest/Jest) and require tests for new features; fail CI on coverage regressions.

## Accessibility

- **A11y baseline:** All images must have meaningful `alt` text; interactive elements must be keyboard-focusable and use semantic HTML.
- **ARIA:** Use ARIA roles only when semantic HTML is insufficient and prefer descriptive `aria-label`/`aria-labelledby` for non-text controls.
- **Contrast & Focus:** Maintain WCAG AA contrast ratios and visible focus styles. Include a `skip to content` link where appropriate.
- **Auditing:** Run Lighthouse/accessibility audits and fix high/critical issues before merge.

## SEO Guidelines

- **Meta & Titles:** Ensure each page has a unique, descriptive `<title>` and `meta description` in the page head.
- **Internal linking:** Use contextual internal links and the `SmartLink` component for internal navigation.
- **External links:** Add `target="_blank" rel="noopener noreferrer"` for outbound links.
- **Structured Data & Sitemap:** Use JSON-LD for rich results and keep `next-sitemap` in sync; ensure canonical tags where needed.

## Validation & Errors

- **Validation pattern:** Centralize request validation and error handling. Keep schemas in a `schemas/` or `src/lib/schemas.ts` file.
- **Error responses:** Standardize JSON error shapes, e.g. `{ error: string, details?: unknown }`, and return proper status codes.

## Env & Secrets

- **Env files:** Provide `.env.example` for required variables and never commit secrets. Use `process.env` server-side and `NEXT_PUBLIC_` prefix for safe client vars.
- **Secret management:** Recommend storing secrets in a vault/hosted env (Vercel, Netlify, etc.) for production.

## Caching & Revalidation

- **Revalidation:** Use `revalidatePath` for server actions where necessary and set caching headers for API responses.
- **Strategy:** Document ISR/edge caching expectations and when to use `no-cache` vs long TTLs.

## API Conventions

- **Routes:** Keep `route.ts` handlers in `app/api/*` and use `NextResponse` helpers for JSON responses.
- **Methods:** Explicitly check and handle HTTP methods (GET/POST/PUT/DELETE) and return `405` for unsupported methods.
- **Shapes:** Document request and response shapes near the handler or in shared types under `types/`.

## Performance & Images

- **Images:** Serve appropriately sized images, use `loading="lazy"` and prefer optimized delivery (Next.js image handling or responsive `srcset`).
- **Budget:** Maintain a small performance budget; run Lighthouse and track regressions.

## Contributor / PR Checklist

- **Before PR:** Run `lint:check`, `typecheck`, and unit tests; include relevant screenshots and changelog notes.
- **Commit messages:** Follow conventional commits; use `husky` and commitlint to enforce rules.
- **Review:** Require at least one reviewer and passing CI before merge.

## Node / Tooling Versions

- **Node:** Recommend Node 18+ for local/dev; include `.nvmrc` or `engines` in `package.json` if desired.
- **Package manager:** Project contains a `pnpm-lock.yaml` - prefer `pnpm` for reproducible installs.

## Examples

### Correct Component Structure

```tsx
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
	children: ReactNode;
	variant?: "primary" | "secondary";
	onClick?: () => void;
}

export function Button({ children, variant = "primary", onClick }: ButtonProps) {
	return (
		<button
			className={cn(
				"rounded-md px-4 py-2",
				variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-200"
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
```
