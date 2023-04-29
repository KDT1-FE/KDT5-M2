const years = new Date().getFullYear();
const arr = Array.from({ length: years - 1984 }, (_, i) => 2023 - i);
arr.unshift('All years');
const selectItems = {
  genre: ['movie', 'series', 'episode'],
  loadPageNum: [10, 20, 30],
  years: arr,
};
export default selectItems;
