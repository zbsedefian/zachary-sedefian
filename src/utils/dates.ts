/**
 * Formats a date-only value (e.g. from YAML frontmatter like `2026-09-01`)
 * without local-timezone drift. `Date` parses bare date strings as UTC
 * midnight, so formatting must also use UTC or the displayed day/month can
 * shift backward for timezones behind UTC.
 */
export function formatDate(
	date: Date,
	options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" },
): string {
	return date.toLocaleDateString("en-US", { ...options, timeZone: "UTC" });
}
