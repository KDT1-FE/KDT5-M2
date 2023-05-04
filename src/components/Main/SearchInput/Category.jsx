export const pages = ["10", "20", "30"];
export const type = ["Movie", "Series", "Episodes"];

const yearArr = [];
for (let i = 1985; i <= new Date().getFullYear(); i++) {
  yearArr.unshift(i);
}
const sortedYears = yearArr.map((v) => v + "");
export const year = ["All Years", ...sortedYears];
