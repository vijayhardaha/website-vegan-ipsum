import { ReactNode } from "react";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import SmartLink from "@/components/common/SmartLink";
import { Button } from "@/components/ui/button";

export default function CTA(): ReactNode {
	return (
		<Section id="ready-to-get-started">
			<Container>
				<div className="from-secondary-100 to-secondary-200 relative overflow-hidden rounded-3xl bg-gradient-to-br p-12 text-center md:p-16">
					<div className="relative z-10">
						<h2 className="text-secondary-solid mb-4 text-3xl md:text-4xl">
							Ready to Get Started?
						</h2>
						<p className="mx-auto mb-8 max-w-xl leading-relaxed">
							Start using Vegan Ipsum today and bring ethical, plant-based placeholder
							text to your projects. Choose the tool that fits your workflow best.
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							<Button asChild variant="white" size="md">
								<SmartLink href="/json-api">Try the API</SmartLink>
							</Button>
							<Button asChild variant="secondary" size="md">
								<SmartLink href="/npm-package">NPM Package</SmartLink>
							</Button>
							<Button asChild variant="secondary-outline" size="md">
								<SmartLink href="https://github.com/vijayhardaha/node-vegan-ipsum">
									View on GitHub
								</SmartLink>
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
