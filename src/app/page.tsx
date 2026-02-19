import { ReactNode } from "react";

import {
	Hero,
	IpsumGenerator,
	HowToUse,
	Overview,
	Benefits,
	Audience,
	UseCases,
	ContactCTA,
} from "@/components/sections/home/";

/**
 * This component renders the home page.
 *
 * @returns {ReactNode} The rendered component.
 */
function Home(): ReactNode {
	return (
		<div>
			<Hero />

			<IpsumGenerator />

			<HowToUse />

			<Overview />

			<Benefits />

			<Audience />

			<UseCases />

			<ContactCTA />
		</div>
	);
}

export default Home;
