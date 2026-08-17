export const HOME_PAGE_FILTERS = [
  { name: "Newest", value: "newest" },
  { name: "Recommended Questions", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
] as const;

export type HomePageFilter = (typeof HOME_PAGE_FILTERS)[number]["value"];

export function isHomePageFilter(value: string): value is HomePageFilter {
  return HOME_PAGE_FILTERS.some((filter) => filter.value === value);
}
