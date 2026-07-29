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
	title: "Zachary B. Sedefian",
	shortTitle: "Z. Sedefian",
	description:
		"Zachary B. Sedefian is a political scientist and adjunct lecturer working on international political economy, imperialism, digital labor, and China.",
	author: "Zachary B. Sedefian",
	email: "zbsedefian@gmail.com",
	locale: "en-US",
	url: "https://zacharysedefian.com",
	copyright: `© ${new Date().getFullYear()} Zachary B. Sedefian. All rights reserved.`,
};

export const NAV_LINKS: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "Research", href: "/research/" },
	{ label: "Teaching", href: "/teaching/" },
	{ label: "Writing", href: "/writing/" },
	{ label: "CV", href: "/cv/" },
	{ label: "News", href: "/news/" },
	{ label: "Projects", href: "/projects/" },
	{ label: "Contact", href: "/contact/" },
];

// TODO: replace placeholder profile URLs with real ones as accounts are created/confirmed.
export const SOCIAL_LINKS: SocialLink[] = [
	{ label: "Email", href: `mailto:${SITE.email}`, icon: "email" },
	{
		label: "Google Scholar",
		href: "https://scholar.google.com/citations?user=TODO",
		icon: "scholar",
	},
	{ label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000", icon: "orcid" },
	{
		label: "ResearchGate",
		href: "https://www.researchgate.net/profile/Zachary-Sedefian",
		icon: "researchgate",
	},
	{ label: "GitHub", href: "https://github.com/TODO", icon: "github" },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/TODO",
		icon: "linkedin",
	},
	{ label: "Bluesky", href: "https://bsky.app/profile/TODO", icon: "bluesky" },
	{ label: "X", href: "https://x.com/TODO", icon: "x" },
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
