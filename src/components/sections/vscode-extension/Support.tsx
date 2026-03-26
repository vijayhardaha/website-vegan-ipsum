import type { JSX } from 'react';

import Link from '@/components/composites/Link';
import SectionHeader from '@/components/composites/SectionHeader';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

/**
 * This component renders the support section of the VS Code Extension page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Support(): JSX.Element {
  return (
    <Section id="support" aria-label="Support and feedback for the Vegan Ipsum VS Code Extension">
      <Container>
        <SectionHeader
          heading={
            <>
              Support & <span className="text-primary">Feedback</span>
            </>
          }
          tagline="Found a Bug?"
          icon="bug"
        >
          <p>
            As an independently developed extension, user feedback is vital for prioritizing updates and resolving bugs.
            If you encounter any issues or have suggestions for new features, please help improve the tool by submitting
            an issue on the{' '}
            <Link
              href="https://github.com/vijayhardaha/vscode-vegan-ipsum/issues"
              aria-label="GitHub repository — Open the Vegan Ipsum VS Code Extension issues page"
            >
              GitHub repository
            </Link>
            .
          </p>
        </SectionHeader>
      </Container>
    </Section>
  );
}
