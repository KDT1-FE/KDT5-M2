export const shows = ['movie', 'series', 'episodes'];
export const page = ['10', '20', '30'];

const years: number[] = [];
for (let i = 2023; i >= 1985; i--) {
  years.push(i);
}
export const allYears = ['All Years', ...years];
