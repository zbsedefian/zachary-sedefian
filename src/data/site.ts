// Central site configuration. All pages and components should read from here
// rather than hardcoding titles, links, or copy.

export interface NavLink {
	label: string;
	href: string;
}

export interface SocialLink {
	label: string;
	href: string;
	/** Icon key used by the Footer/Contact components to render an inline SVG. */
	icon:
		| "email"
		| "scholar"
		| "orcid"
		| "researchgate"
		| "github"
		| "linkedin"
		| "bluesky"
		| "x";
}

export const SITE = {
	title: "Zachary Sedefian",
	shortTitle: "Z. Sedefian",
	description:
		"Zachary Sedefian is a political economist and lecturer in Political Science at Brooklyn College, CUNY, researching international and comparative political economy, imperialism, technology, war, and platform labor.",
	author: "Zachary Sedefian",
	email: "zbsedefian@gmail.com",
	locale: "en-US",
	url: "https://zacharysedefian.com",
	copyright: `© ${new Date().getFullYear()} Zachary Sedefian. All rights reserved.`,
};

export const SCHOLAR_URL = "https://scholar.google.com/citations?user=YteXs8gAAAAJ&hl=en";

// Replace this file directly to update the CV.
export const CV_PDF_HREF = "/cv/zachary-sedefian-cv.pdf";

export const NAV_LINKS: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "Research", href: SCHOLAR_URL },
	{ label: "Teaching", href: "/teaching/" },
	{ label: "Writing", href: "/writing/" },
	{ label: "CV", href: CV_PDF_HREF },
	{ label: "Contact", href: "/contact/" },
];

// TODO: replace placeholder profile URLs with real ones as accounts are created/confirmed.
export const SOCIAL_LINKS: SocialLink[] = [
	{ label: "Email", href: `mailto:${SITE.email}`, icon: "email" },
	{
		label: "Google Scholar",
		href: SCHOLAR_URL,
		icon: "scholar",
	},
	{ label: "ORCID", href: "https://orcid.org/0009-0003-0637-5938", icon: "orcid" },
	{
		label: "ResearchGate",
		href: "https://www.researchgate.net/profile/Zachary-Sedefian",
		icon: "researchgate",
	},
	{ label: "GitHub", href: "https://github.com/zbsedefian", icon: "github" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/zachary-sedefian-7a183340a/",
		icon: "linkedin",
	},
	{ label: "Bluesky", href: "https://bsky.app/profile/TODO", icon: "bluesky" },
	{ label: "X", href: "https://x.com/z_sedefian", icon: "x" },
];

export const RESEARCH_AREAS: string[] = [
	"International Political Economy",
	"Marxist Political Economy",
	"Imperialism",
	"Digital Labor",
	"China",
	"Political Economy of Technology",
	"Labor Movements",
	"Comparative Politics",
];
