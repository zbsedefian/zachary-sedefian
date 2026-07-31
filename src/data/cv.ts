// Structured CV content that doesn't fit the existing content collections
// (publications/writing/courses live in src/content/ and are linked to, not duplicated here).

export interface DegreeEntry {
	degree: string;
	institution: string;
	year: string;
	detail?: string;
}

export const EDUCATION: DegreeEntry[] = [
	{
		degree: "M.A. Political Science",
		institution: "Brooklyn College, CUNY",
		year: "June 2026",
		detail: "Specialization: International Affairs and Global Justice",
	},
	{ degree: "B.A. Computer Science", institution: "University at Albany, SUNY", year: "2018" },
	{ degree: "B.A. Linguistics", institution: "University at Albany, SUNY", year: "2014" },
	{ degree: "B.A. Anthropology", institution: "University at Albany, SUNY", year: "2014" },
];

export interface ExperienceEntry {
	title: string;
	organization: string;
	location?: string;
	years: string;
	bullets?: string[];
}

export const PROFESSIONAL_EXPERIENCE_SUMMARY =
	"Worked as a platform and software engineer at various Fortune 500 firms, building autonomous vehicle and financial software over a period of six years (2018–2024).";

export const ADDITIONAL_EXPERIENCE: ExperienceEntry[] = [
	{
		title: "Behavioral Cybersecurity Study",
		organization: "University at Albany",
		years: "2017",
		bullets: [
			"Assisted in experimental research on behavioral factors in data security and geopolitical risk",
			"Collected, organized, and prepared data for analysis in controlled laboratory settings",
		],
	},
	{
		title: "Language Documentation Project",
		organization: "University at Albany",
		years: "2014",
		bullets: [
			"Conducted field data collection and developed a structured linguistic database",
			"Organized qualitative data for long-term research use and accessibility",
		],
	},
	{
		title: "Anthropological Fieldwork",
		organization: "University at Albany",
		years: "2013",
		bullets: [
			"Conducted independent ethnographic research using interview-based methods",
			"Synthesized qualitative findings into structured analytical outputs",
		],
	},
	{
		title: "Cognitive Psychology Lab Assistant",
		organization: "University at Albany",
		years: "2013",
		bullets: ["Assisted in participant testing and data collection for experimental research"],
	},
];

export const PEER_REVIEW: string[] = [
	"Peer Reviewer, Journal of Labor and Society (2026). Completed two anonymous peer reviews for manuscripts submitted to the journal.",
];

export const SKILLS: string[] = [
	"Data visualization for academic publication: created all figures and graphs for Ness (2026), Dialectics of Chinese Labor",
	"Data analysis and visualization: R, Python, Excel, Adobe Photoshop, Adobe Illustrator",
	"Data organization and database management: SQL, NoSQL",
	"Software engineering: Java, AWS, JavaScript, etc.",
	"Qualitative and comparative-historical analysis",
	"Ethnographic and interview-based research methods",
	"Technical writing and structured analytical reporting",
	"Experience producing policy briefs, presentations, and research summaries for mixed audiences",
	"Graduate courses in Global Governance, Modern International Politics, Comparative Politics, Human Rights in Theory and Practice, Global North-South Relations, U.S. Foreign Policy",
];

export interface HonorEntry {
	title: string;
	year: string;
}

export const HONORS: HonorEntry[] = [
	{ title: "Graduate Political Science Award", year: "2026" },
	{ title: "Most Outstanding Graduating Senior in Linguistics (Francine Frank Award)", year: "2014" },
	{ title: "Presidential Undergraduate Award for Research", year: "2014" },
	{ title: "Magna Cum Laude", year: "2014" },
	{ title: "Dean's List", year: "2011–2014, 2018" },
];

export interface LanguageEntry {
	language: string;
	level: string;
}

export const LANGUAGES: LanguageEntry[] = [
	{ language: "English", level: "Native" },
	{ language: "Spanish", level: "Fluent/Advanced" },
	{ language: "Chinese (Mandarin)", level: "Intermediate" },
	{ language: "Portuguese", level: "Reading proficiency only" },
	{ language: "French", level: "Reading proficiency only" },
];
