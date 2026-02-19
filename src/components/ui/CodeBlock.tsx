"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/utils/classNameUtils";

/**
 * Props for the CodeBlock component.
 */
interface ICodeBlockProps {
	label: string;
	children: string;
	className?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}

/**
 * Props for the CodeBlock component with custom styles.
 */
interface IStyle {
	[key: string]: React.CSSProperties;
}

export const prismCustom = {
	...style,
	// override container/pre styles
	'code[class*="language-"]': {
		...((style as IStyle)['code[class*="language-"]'] ?? {}),
		background: "#1a2318", // code-bg from the design
		color: "#c8e6b8", // code-text - main text color
		fontFamily: "var(--font-mono)", // use the monospaced font defined in the design
		fontSize: "13px",
		lineHeight: "1.75",
		margin: "0",
	},
	'pre[class*="language-"]': {
		...((style as IStyle)['pre[class*="language-"]'] ?? {}),
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

// Copy handler will be implemented using React state inside the component
// so we can avoid direct DOM manipulation and clean up timers on unmount.

/**
 * Reusable component for displaying code blocks with syntax highlighting.
 * @param {ICodeBlockProps} props - The props for the component.
 * @returns {ReactNode} The CodeBlock component.
 */
export default function CodeBlock({
	label,
	children,
	className,
	...props
}: ICodeBlockProps): ReactNode {
	const [copied, setCopied] = useState(false);
	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				window.clearTimeout(timerRef.current);
			}
		};
	}, []);

	const handleCopy = (text: string): void => {
		navigator.clipboard.writeText(text).then(
			() => {
				setCopied(true);
				if (timerRef.current) window.clearTimeout(timerRef.current);
				timerRef.current = window.setTimeout(() => setCopied(false), 1000);
			},
			(err) => {
				console.error("Failed to copy text: ", err);
			}
		);
	};

	return (
		<div className="relative overflow-hidden rounded-xl">
			<div className="flex items-center justify-between bg-[#243020] px-5 py-2.5">
				<span className="font-mono text-xs font-semibold text-[#6a9960]">{label}</span>
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
			</div>
			<SyntaxHighlighter style={prismCustom} className={cn("", className)} {...props}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
