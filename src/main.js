import { request, renderMovies, fetchMovies } from "./movie.js";

const inputEl = document.querySelector(".search input");
const typeEl = document.querySelector(".movie_type");
const yearEl = document.querySelector(".movie_year");
const countEl = document.querySelector(".movie_count");
const butEl = document.querySelector(".submit");
const ulEl = document.querySelector(".movies");

let inputText = "";
let inputType = "";
let inputYear = "";
let inputCount = "";

const movieSearch = async function () {
    inputText = inputEl.value;
    inputType = typeEl.value;
    inputYear = yearEl.value;
    inputCount = countEl.value;

    const movies = await request(inputText, inputType, inputYear, inputCount);

    console.log(movies);

    renderMovies(ulEl, movies);
};

inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") movieSearch();
});

butEl.addEventListener("click", movieSearch);
