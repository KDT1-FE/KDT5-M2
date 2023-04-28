import axios from "axios";

export async function request(movieName, movieType, year, pageCount) {
    let res = await axios({
        url: `http://www.omdbapi.com/?apikey=7035c60c&s=${movieName}&type=${movieType}&y=${year}&page=1`,
    });

    const { Search, totalResults } = res.data;

    let totalSearch = Search;
    console.log(totalResults);

    const maxCount = parseInt(pageCount);
    const total = parseInt(totalResults);

    if (total > 10 && maxCount > 1) {
        for (let i = 2; i <= maxCount; i = i + 1) {
            res = await axios({
                url: `http://www.omdbapi.com/?apikey=7035c60c&s=${movieName}&type=${movieType}&y=${year}&page=${i}`,
            });
            totalSearch = totalSearch.concat(res.data.Search);
        }
    }

    return totalSearch;
}

export function renderMovies(ulEl, movies) {
    ulEl.innerHTML = "";
    if (!movies) {
        const divEl = document.createElement("div");
        divEl.textContent = `목록이 없습니다`;
        divEl.classList.add("not_data");
        ulEl.append(divEl);
        return;
    }
    movies.forEach(function (movie) {
        if (!movie) {
            return;
        }
        const aEl = document.createElement("a");
        const liEl = document.createElement("li");
        const liDevEl = document.createElement("div");
        const movieTitleEl = document.createElement("span");
        const movieYearEl = document.createElement("span");

        if (movie.Poster === "N/A") {
            liEl.style.backgroundImage = `url(https://i.ibb.co/R2sgJ1Q/noimg.jpg)`;
        } else {
            liEl.style.backgroundImage = `url(${movie.Poster})`;
        }

        aEl.setAttribute("href", `javascript:void(0)`);
        aEl.dataset.id = `${movie.imdbID}`;

        aEl.classList.add("movies_link");

        aEl.append(liEl);
        liEl.append(liDevEl);
        liDevEl.append(movieTitleEl);
        liDevEl.append(movieYearEl);

        movieTitleEl.textContent = `${movie.Title}`;
        movieYearEl.textContent = `${movie.Year}`;

        ulEl.append(aEl); //ul에 메모리상의 li를 밀어넣기
    });
}
export async function movieDetail(movieId, divEl, movieDivEl) {
    const title = document.querySelector(".detail_title");
    const released = document.querySelector(".detail_labels");
    const genre = document.querySelector(".detail_genre");
    const ratings = document.querySelector(".detail_ratings");
    const director = document.querySelector(".detail_director");
    const production = document.querySelector(".detail_production");
    const plot = document.querySelector(".detail_plot");
    const poster = document.querySelector(".detail_poster");

    divEl.style.display = "block";
    divEl.children[0].style.display = "inline";
    movieDivEl.style.display = "none";

    let res = await axios({
        url: `http://www.omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=full`,
    });
    const { data } = res;
    divEl.children[0].style.display = "none";
    movieDivEl.style.display = "block";

    if (data.Poster === "N/A") {
        poster.setAttribute("src", "https://i.ibb.co/R2sgJ1Q/noimg.jpg");
    } else {
        poster.setAttribute("src", data.Poster);
    }

    title.textContent = data.Title;
    released.textContent = data.Released;
    genre.textContent = data.Genre;
    ratings.textContent = data.Ratings[0].Value;
    director.textContent = data.Director;
    production.textContent = data.Production;
    plot.textContent = data.Plot;

    movieDivEl.addEventListener("click", (event) => {
        event.stopPropagation();
    });
    divEl.addEventListener("click", () => {
        divEl.style.display = "none";
    });
}
