import type { JSX } from "react";

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
 * @returns {JSX.Element} The rendered component.
 */
function Home(): JSX.Element {
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
