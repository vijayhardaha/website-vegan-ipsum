"use client";

import React from "react";

import clsx from "clsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * Props for the CodeBlock component.
 */
interface CodeBlockProps {
	children: string;
	className?: string;
	[key: string]: any;
}

/**
 * Reusable component for displaying code blocks with syntax highlighting.
 * @param {CodeBlockProps} props - The props for the component.
 * @returns {React.JSX.Element} The CodeBlock component.
 */
export default function CodeBlock({
	children,
	className,
	...props
}: CodeBlockProps): React.JSX.Element {
	return (
		<SyntaxHighlighter
			style={prism}
			className={clsx("!font-mono !text-sm [&>*]:!font-mono", className)}
			{...props}
		>
			{children}
		</SyntaxHighlighter>
	);
}
