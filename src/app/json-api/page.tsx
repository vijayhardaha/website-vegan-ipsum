import React from "react";

import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import CodeBlock from "@/components/ui/CodeBlock";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the JSON API page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
  title: "JSON API",
  description:
    "Fetch vegan-inspired placeholder text for your apps and projects using the Vegan Ipsum JSON API.",
  slug: "json-api",
});

/**
 * The main page for the Vegan Ipsum JSON API documentation.
 *
 * @returns {React.JSX.Element} The rendered JsonApiPage component.
 */
export default function JsonApiPage(): React.JSX.Element {
  return (
    <SectionContainer>
      <PageHeader
        title="JSON API"
        subtitle="Fetch vegan-inspired placeholder text for your apps and projects. This API provides paragraphs, sentences, or words in plain or HTML format."
      />

      <section aria-labelledby="introduction">
        <h2 id="introduction" className="mb-1 text-2xl">
          Introduction
        </h2>
        <div className="space-y-4">
          <p>
            The Vegan Ipsum JSON API allows developers to generate placeholder text inspired by
            vegan themes. Whether you need paragraphs, sentences, or words, this API provides a
            simple and flexible way to integrate vegan-inspired content into your applications or
            projects.
          </p>
          <p>
            The API supports various formats, including plain text and HTML, and offers customizable
            parameters to suit your specific needs.
          </p>
        </div>
      </section>

      <section aria-labelledby="base-url">
        <h2 id="base-url" className="mb-1 text-2xl">
          Base URL
        </h2>
        <p>Use the following base URL to access the Vegan Ipsum API:</p>
        <CodeBlock language="bash">{`https://veganipsum.vercel.app/api/`}</CodeBlock>
      </section>

      <section aria-labelledby="request-methods">
        <h2 id="request-methods" className="mb-1 text-2xl">
          Request Methods
        </h2>
        <p>The Vegan Ipsum API supports the following HTTP request methods:</p>
        <ul className="mt-2 list-disc space-y-2 pl-8">
          <li>
            <strong>GET</strong> — Pass query parameters in the URL to retrieve data.
          </li>
          <li>
            <strong>POST</strong> — Send parameters in the JSON body for more complex requests.
          </li>
        </ul>
      </section>

      <section aria-labelledby="parameters">
        <h2 id="parameters" className="mb-1 text-2xl">
          Parameters
        </h2>
        <p>Below is a list of parameters you can use with the Vegan Ipsum API:</p>
        <table className="border-border mt-2 w-full table-auto border-collapse border text-left text-sm">
          <thead>
            <tr className="border-border border-b bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Required</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 font-mono">count</td>
              <td className="px-4 py-2">number</td>
              <td className="px-4 py-2">No (default: 3)</td>
              <td className="px-4 py-2">Number of units to generate (1–100)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">units</td>
              <td className="px-4 py-2">string</td>
              <td className="px-4 py-2">No (default: paragraphs)</td>
              <td className="px-4 py-2">
                Choose from <code>paragraphs</code>, <code>sentences</code>, <code>words</code>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono">format</td>
              <td className="px-4 py-2">string</td>
              <td className="px-4 py-2">No (default: plain)</td>
              <td className="px-4 py-2">
                Choose <code>plain</code> or <code>html</code>. If an invalid format is used, it
                defaults to <code>plain</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section aria-labelledby="get-example">
        <h2 id="get-example" className="mb-1 text-2xl">
          GET Example
        </h2>
        <p>Use the GET method to retrieve data by passing parameters in the URL:</p>

        <CodeBlock language="bash">
          {`GET https://veganipsum.vercel.app/api/?count=2&units=paragraphs&format=plain`}
        </CodeBlock>

        <CodeBlock language="bash">
          {`curl "https://veganipsum.vercel.app/api/?count=3&units=sentences&format=html"`}
        </CodeBlock>
      </section>

      <section aria-labelledby="post-example">
        <h2 id="post-example" className="mb-1 text-2xl">
          POST Example
        </h2>
        <p>Use the POST method to send parameters in the JSON body:</p>
        <CodeBlock language="bash">
          {`curl -X POST "https://veganipsum.vercel.app/api/" \\
  -H "Content-Type: application/json" \\
  -d '{"count": 5, "units": "sentences", "format": "plain"}'`}
        </CodeBlock>
      </section>

      <section aria-labelledby="response">
        <h2 id="response" className="mb-1 text-2xl">
          Response
        </h2>
        <p>Example successful JSON response:</p>
        <CodeBlock language="json">
          {`{
  "text": "Cucumber asparagus lentils smoothie harmony kind eggplant pancake laborum non brussels beetroot pepper plant sustain. Nostrud lettuce cillum cucumber celery positivity reprehenderit turmeric laboris chard voluptate eu comfort. Minim vegan-burger nutrients shallot ad humility okra."
}`}
        </CodeBlock>
      </section>

      <section aria-labelledby="error-handling">
        <h2 id="error-handling" className="mb-1 text-2xl">
          Error Handling
        </h2>
        <p>Invalid input returns a 400 status code with a helpful message:</p>
        <CodeBlock language="json">
          {`{
  "error": "Invalid count. Please provide a number between 1 and 100."
}`}
        </CodeBlock>
      </section>

      <section aria-labelledby="error-handling">
        <h2 id="error-handling" className="mb-1 text-2xl">
          Status Codes
        </h2>
        <ul className="list-disc pl-6 text-sm">
          <li>
            <strong>200</strong> – OK: Successful response.
          </li>
          <li>
            <strong>400</strong> – Bad Request: Invalid or missing parameters.
          </li>
          <li>
            <strong>404</strong> – Not Found: Invalid endpoint.
          </li>
          <li>
            <strong>500</strong> – Server Error: Something went wrong.
          </li>
        </ul>
      </section>
    </SectionContainer>
  );
}
