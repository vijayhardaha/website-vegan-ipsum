import { ReactNode } from "react";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cn } from "@/utils/classNameUtils";

/**
 * This component provides an overview of the HTTP status codes returned by the Vegan Ipsum JSON API.
 * It explains the meaning of common status codes such as 200 OK, 400 Bad Request, 404 Not Found,
 * and 500 Internal Server Error. Each status code is accompanied by a description to help
 * developers understand the outcome of their API requests and how to troubleshoot issues.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function StatusCodes(): ReactNode {
	return (
		<Section
			id="status-codes"
			aria-label="HTTP status codes returned by the Vegan Ipsum JSON API"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader heading="HTTP Status Codes">
					<p className="mb-8">
						The API uses standard HTTP status codes to indicate the success or failure
						of your requests. Here are the most common codes you may encounter:
					</p>

					<ul className="space-y-4">
						{[
							{
								statusCode: 200,
								status: "OK",
								description:
									"Request was successful. The response contains the requested vegan ipsum text.",
								class: "bg-green-100 text-green-500",
							},
							{
								statusCode: 400,
								status: "Bad Request",
								description:
									"Your request had invalid or missing parameters. Review the error message and try again.",
								class: "bg-amber-100 text-amber-500",
							},
							{
								statusCode: 404,
								status: "Not Found",
								description:
									"The endpoint you tried to access does not exist. Check the URL and request method.",
								class: "bg-red-100 text-red-500",
							},
							{
								statusCode: 500,
								status: "Internal Server Error",
								description:
									"Something went wrong on the server side. Try again later or contact support if the problem persists.",
								class: "bg-purple-100 text-purple-500",
							},
						].map((code, index) => (
							<li
								key={index}
								className="border-border flex items-start gap-4 rounded-2xl border bg-white p-4 transition-transform hover:translate-x-1"
							>
								<span
									className={cn(
										"inline-flex min-h-12 min-w-14 items-center justify-center rounded-xl px-0 py-1 text-center text-sm font-bold",
										code.class
									)}
								>
									{code.statusCode}
								</span>
								<div>
									<p className="text-primary-solid mb-0.5 text-base font-bold">
										{code.status}
									</p>
									<p className="text-sm leading-relaxed">{code.description}</p>
								</div>
							</li>
						))}
					</ul>
				</SectionHeader>
			</Container>
		</Section>
	);
}
