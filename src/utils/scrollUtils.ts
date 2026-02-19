/**
 * 	Utility function to scroll an element into view by its ID.
 *
 * @param {string} id - The ID of the element to scroll into view.
 */
export const scrollIntoView = (id: string): void => {
	const element = document.getElementById(id);
	if (element) {
		const yOffset = -68; // offset in px
		const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

		window.scrollTo({
			top: y,
			behavior: "smooth",
		});
	}
};
