import type { JSX, ReactNode } from 'react';

/**
 * Props for the Main component.
 */
interface MainProps {
  children: ReactNode;
}

/**
 * This component serves as the main content wrapper for the application.
 *
 * @param {MainProps} props - The component props
 * @param {ReactNode} props.children - The content to render inside main
 *
 * @returns {JSX.Element} The rendered main content area.
 */
export default function Main({ children }: MainProps): JSX.Element {
  return (
    <main id="main" className="overflow-hidden">
      {children}
    </main>
  );
}
