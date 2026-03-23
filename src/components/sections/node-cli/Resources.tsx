import type { JSX } from 'react';

import SectionHeader from '@/components/composites/SectionHeader';
import SmartLink from '@/components/composites/SmartLink';
import Section from '@/components/layout/Section';
import Container from '@/components/primitives/Container';

/**
 * This component renders the installation section for the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Resources(): JSX.Element {
  return (
    <Section id="resources" aria-label="Tips, best practices, and additional resources for the Vegan Ipsum Node CLI">
      <Container>
        <SectionHeader
          heading={
            <>
              Tips, Best Practices & <span className="text-primary">Resources</span>
            </>
          }
          tagline="Workflow Optimization"
          icon="lightBulb"
        >
          <p>
            Optimize your development workflow by leveraging the full potential of the Vegan Ipsum CLI. The strategies
            below will help you integrate the tool efficiently for automation and prototyping.
          </p>

          <h3 className="mt-8 mb-2 text-lg">Tips & Best Practices:</h3>

          <ul className="list-disc space-y-2 pl-8">
            <li>
              <strong>Automate Workflows:</strong> Integrate the CLI into shell scripts or{' '}
              <SmartLink href="https://docs.github.com/en/actions" aria-label="Learn about GitHub Actions automation">
                CI/CD pipelines
              </SmartLink>{' '}
              to dynamically generate placeholder content during build processes.
            </li>

            <li>
              <strong>Efficiency:</strong> Use the <code>--copy</code> flag in conjunction with system clipboard
              managers to create a seamless, single-command copy-paste workflow.
            </li>

            <li>
              <strong>Advanced Processing:</strong> Pipe output directly into standard Unix tools like{' '}
              <SmartLink href="https://www.gnu.org/software/grep/" aria-label="Visit GNU Grep documentation">
                <code>grep</code>
              </SmartLink>
              ,{' '}
              <SmartLink href="https://www.gnu.org/software/gawk/manual/" aria-label="Visit GNU Awk documentation">
                <code>awk</code>
              </SmartLink>
              , or{' '}
              <SmartLink href="https://www.gnu.org/software/sed/manual/" aria-label="Visit GNU Sed documentation">
                <code>sed</code>
              </SmartLink>{' '}
              for custom text filtering and manipulation.
            </li>

            <li>
              <strong>Mock Data Variety:</strong> Experiment with varying counts and units to produce randomized,
              realistic content for UI mockups and client demonstrations.
            </li>

            <li>
              <strong>Rapid Prototyping:</strong> Utilize the <code>--format html</code> flag to generate semantic
              markup instantly, speeding up the initial stages of web development.
            </li>
          </ul>

          <h3 className="mt-8 mb-2 text-lg">Additional Resources:</h3>

          <p>
            For programmatic usage, refer to the <SmartLink href="/npm-package">Vegan Ipsum NPM Package</SmartLink>{' '}
            documentation for detailed API references and implementation examples.
          </p>

          <p>
            You can also visit the{' '}
            <SmartLink
              href="https://www.npmjs.com/package/vegan-ipsum"
              aria-label="View vegan-ipsum package statistics and history on npm"
            >
              official npm package page
            </SmartLink>{' '}
            to analyze download statistics, review version history, and assess community feedback.
          </p>

          <p>
            To contribute to the project or report issues, please visit the{' '}
            <SmartLink
              href="https://github.com/vijayhardaha/node-vegan-ipsum"
              aria-label="Visit the vegan-ipsum GitHub repository"
            >
              GitHub repository
            </SmartLink>{' '}
            to submit pull requests or open new issues.
          </p>
        </SectionHeader>
      </Container>
    </Section>
  );
}
