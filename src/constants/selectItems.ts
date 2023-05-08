export const SHOWS = ['movie', 'series', 'episodes'];
export const PAGE = ['10', '20', '30'];

const YEARS: string[] = [];
for (let i = 2023; i >= 1985; i--) {
  YEARS.push(i.toString());
}
export const allYears = ['All Years', ...YEARS];
