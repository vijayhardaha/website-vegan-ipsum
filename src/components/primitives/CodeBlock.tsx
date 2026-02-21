"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX, CSSProperties } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/utils/classnames";

/**
 * Props for the CodeBlock component.
 */
interface CodeBlockProps {
	label: string;
	children: string;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

/**
 * Props for the CodeBlock component with custom styles.
 */
interface StyleProps {
	[key: string]: CSSProperties;
}

/**
 * Custom Prism style that overrides the default styles for code blocks and tokens.
 * This style is designed to match the design specifications for the code blocks in the project.
 */
export const prismCustom = {
	...style,
	// override container/pre styles
	'code[class*="language-"]': {
		...((style as StyleProps)['code[class*="language-"]'] ?? {}),
		background: "#1a2318", // code-bg from the design
		color: "#c8e6b8", // code-text - main text color
		fontFamily: "var(--font-mono)", // use the monospaced font defined in the design
		fontSize: "13px",
		lineHeight: "1.75",
		margin: "0",
	},
	'pre[class*="language-"]': {
		...((style as StyleProps)['pre[class*="language-"]'] ?? {}),
		background: "#1a2318",
		border: "1px solid #2d4028",
		borderRadius: "0",
		padding: "calc(var(--spacing) * 4.5) calc(var(--spacing) * 5)",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		margin: "0",
	},
	// override token colors
	"token.comment": {
		color: "#6a9960", // code-comment - muted green for comments
		fontStyle: "italic",
	},
	"token.prolog": { color: "#6a9960" },
	"token.doctype": { color: "#6a9960" },
	"token.cdata": { color: "#6a9960" },

	"token.keyword": {
		color: "#86efac", // code-key - bright green for keywords
		fontWeight: "600",
	},
	"token.selector": { color: "#86efac" },
	"token.important": { color: "#86efac", fontWeight: "700" },
	"token.atrule": { color: "#86efac" },

	"token.function": {
		color: "#fde68a", // code-str - yellow for functions
		fontWeight: "500",
	},
	"token.class-name": { color: "#fde68a" },

	"token.string": {
		color: "#fde68a", // code-str - yellow for strings
	},
	"token.char": { color: "#fde68a" },
	"token.attr-value": { color: "#fde68a" },
	"token.regex": { color: "#fde68a" },

	"token.number": {
		color: "#93c5fd", // code-num - blue for numbers
	},
	"token.boolean": { color: "#93c5fd" },
	"token.constant": { color: "#93c5fd" },

	"token.property": { color: "#86efac" },
	"token.tag": { color: "#86efac" },

	"token.punctuation": {
		color: "#94a3b8", // code-punct - slate for punctuation
	},
	"token.operator": { color: "#94a3b8" },

	"token.url": {
		color: "#67e8f9", // code-url - cyan for URLs
	},

	"token.variable": { color: "#c8e6b8" },
	"token.builtin": { color: "#7bbf6a" },

	"token.deleted": { color: "#fca5a5" },
	"token.inserted": { color: "#86efac" },
};

/**
 * Check if the Clipboard API is available and the context is secure (HTTPS).
 * This is necessary for the copy functionality to work properly.
 */
const canUseClipboard =
	typeof navigator !== "undefined" && !!navigator.clipboard && window.isSecureContext;

/**
 * Reusable component for displaying code blocks with syntax highlighting.
 *
 * @param {CodeBlockProps} props - The props for the component.
 * @returns {JSX.Element} The CodeBlock component.
 */
export default function CodeBlock({
	label,
	children,
	className,
	...props
}: CodeBlockProps): JSX.Element {
	const [copied, setCopied] = useState(false);
	const timerRef = useRef<number | null>(null);

	/**
	 * Cleanup function to clear the timer when the component unmounts to prevent memory leaks.
	 */
	useEffect(() => {
		return () => {
			if (timerRef.current) {
				window.clearTimeout(timerRef.current);
			}
		};
	}, []);

	/**
	 * Handles copying the code block content to the clipboard and provides user feedback.
	 * @param text 	- The text content to be copied to the clipboard.
	 */
	const handleCopy = async (text: string): Promise<void> => {
		// Check if the Clipboard API is available before attempting to copy. If not, log a warning and exit the function.
		if (!canUseClipboard) {
			console.warn("Clipboard API not supported in this environment.");
			return;
		}

		try {
			// Use the Clipboard API to write the text to the clipboard.
			// If successful, set the copied state to true to provide feedback to the user.
			await navigator.clipboard.writeText(text);
			setCopied(true);

			// Clear any existing timer to prevent multiple timers from running simultaneously.
			if (timerRef.current) window.clearTimeout(timerRef.current);
			// Then, set a new timer to reset the copied state after 1 second (1000 milliseconds).
			timerRef.current = window.setTimeout(() => setCopied(false), 1000);
		} catch (err) {
			console.error("Failed to copy text:", err);
		}
	};

	return (
		<div className="relative overflow-hidden rounded-xl">
			<div className="flex items-center justify-between bg-[#243020] px-5 py-2.5">
				<span className="font-mono text-xs font-semibold text-[#6a9960]">{label}</span>

				{/* Only enable button when clipboard features is available. */}
				{canUseClipboard && (
					<button
						onClick={() => handleCopy(children)}
						className={cn(
							"cursor-pointer rounded-lg border border-white/12 bg-white/8 px-3 py-1 font-mono text-xs font-semibold text-[#6a9960] transition-all",
							copied && "ok"
						)}
						aria-pressed={copied}
					>
						{copied ? "Copied!" : "Copy"}
					</button>
				)}
			</div>
			<SyntaxHighlighter style={prismCustom} className={cn("", className)} {...props}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
