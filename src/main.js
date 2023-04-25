import { request, renderMovies, fetchMovies } from "./movie.js";

const inputEl = document.querySelector(".search input");
const typeEl = document.querySelector(".movie_type");
const yearEl = document.querySelector(".movie_year");
const countEl = document.querySelector(".movie_count");
const ulEl = document.querySelector(".movies");

let inputText = "";
let inputType = "";
let inputYear = "";
let inputCount = "";

inputEl.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        inputText = inputEl.value;
        inputType = typeEl.value;
        inputYear = yearEl.value;
        inputCount = countEl.value;

        const movies = await request(inputText, inputType, inputYear, inputCount);

        console.log(movies);

        renderMovies(ulEl, movies);
    }
});

const aEl = document.querySelector();
