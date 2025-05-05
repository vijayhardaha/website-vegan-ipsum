import React from "react";

/**
 * Props for the PageHeader component.
 * @property {string} title - The main title of the page.
 * @property {string} [subtitle] - An optional subtitle providing additional context.
 */
interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/**
 * A reusable page header component that displays a title and an optional subtitle.
 *
 * @param {PageHeaderProps} props - The props for the component.
 * @returns {React.JSX.Element} The rendered PageHeader component.
 */
export default function PageHeader({ title, subtitle }: PageHeaderProps): React.JSX.Element {
  return (
    <header className="mb-6">
      <h1 id="page-header-title" className="text-primary mb-1 text-4xl">
        {title}
      </h1>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
    </header>
  );
}
