import { $ } from '~/utils/querySelector';

export function movieResult (movie) {
  //create List
  const resultList = $('.result__ul');
  const li = document.createElement('li');
  li.classList.add('list__movie'); 
  resultList.appendChild(li);

  //Container
  const container = document.createElement('a');
  container.classList.add('list__container');
  container.href = `/movieinfo/${movie.imdbID}`;
  li.appendChild(container);
  //Poster
  const po = document.createElement('img');
  po.classList.add('list__poster');
  if (movie.Poster === "N/A") {  // 포스터가 없는 경우
    po.setAttribute('src', '/src/public/xboxdog.jpg');
  } else {  // 포스터가 있는 경우
    po.setAttribute('src', movie.Poster);
  }
  po.alt = "포스터를 찾을 수 없어요..";
  container.appendChild(po);

  //Title
  const title = document.createElement('h3');
  title.classList.add('list__title');
  title.textContent = movie.Title;
  container.appendChild(title);

  //Year
  const year = document.createElement('p');
  year.classList.add('list__year');
  year.textContent = movie.Year;
  container.appendChild(year);
  }