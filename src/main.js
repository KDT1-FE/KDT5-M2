import { request, renderMovies, movieDetail } from "./movie.js";

const inputEl = document.querySelector(".search input");
const typeEl = document.querySelector(".movie_type");
const yearEl = document.querySelector(".movie_year");
const countEl = document.querySelector(".movie_count");
const butEl = document.querySelector(".submit");
const ulEl = document.querySelector(".movies");
const movieDivEl = document.querySelector(".movie_detail");
const movieDetailDivEl = document.querySelector(".movie_detail_content");

let aEls = null;

let inputText = "";
let inputType = "";
let inputYear = "";
let inputCount = "";

const movieSearch = async function () {
    inputText = inputEl.value;
    inputType = typeEl.value;
    inputYear = yearEl.value;
    inputCount = countEl.value;
    const loadingEl = document.querySelector(".loading");

    loadingEl.style.display = "inline";
    const movies = await request(inputText, inputType, inputYear, inputCount);
    loadingEl.style.display = "none";

    console.log(movies);

    renderMovies(ulEl, movies);
    aEls = document.querySelectorAll(".movies_link");

    aEls.forEach((movie) => {
        movie.addEventListener("click", () => movieDetail(movie.getAttribute("data-id"), movieDivEl, movieDetailDivEl));
    });
};

inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") movieSearch();
});

butEl.addEventListener("click", movieSearch);
