export const shows = ['movie', 'series', 'episodes'];
export const page = ['10', '20', '30'];

const years: number[] = [];
for (let i = 1985; i <= new Date().getFullYear(); i++) {
  years.push(i);
}
const sortedYears = years.sort((a, b) => b - a).map((year) => year.toString());
export const allYears = ['All Years', ...sortedYears];
