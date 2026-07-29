const SEASON_ORDER: Record<string, number> = {
	winter: 0,
	spring: 1,
	summer: 2,
	fall: 3,
};

/** Converts a "Season Year" string (e.g. "Fall 2026") into a sortable number. */
export function parseSemester(semester: string): number {
	const [season, year] = semester.trim().split(/\s+/);
	const seasonRank = SEASON_ORDER[season?.toLowerCase() ?? ""] ?? 0;
	return Number(year ?? 0) + seasonRank / 10;
}
