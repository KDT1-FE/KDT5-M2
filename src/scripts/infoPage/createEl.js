import { $ } from "~/utils/querySelector.js";
import detailRes from "./detailRes"

export default async function createEl () {
  const container = $('.detail__container')
  //loading
  const loadingEl = document.createElement('div');
  loadingEl.classList.add('detail__loading');
  loadingEl.textContent = '로딩 중...';
  container.appendChild(loadingEl);
  
  
  const details = await detailRes();
  loadingEl.remove();

  //Poster
  const po = document.createElement('img');
  po.classList.add('poster__po');
  if(details.Poster === 'N/A') {
    po.setAttribute('src', '/xboxdog.jpg');
  }
  else if(details.Response === "False") {
    po.setAttribute('src', '/xboxdog.jpg');
    const err = document.createElement('p');
    err.classList.add('po__err');
    err.textContent = "영화 정보를 불러올 수 없어요.😥"
    container.querySelector('.detail__poster').appendChild(err);
  }
  else {
    po.setAttribute('src', details.Poster);
  }
  po.alt = "포스터를 못찾았어요.";
  container.querySelector('.detail__poster').appendChild(po);

  //Title
  const ti = document.createElement('h2');
  ti.classList.add('title__ti');
  ti.textContent = details.Title;
  container.querySelector('.detail__title').appendChild(ti);
  
  //detail__INFO
  const infoList = ['Genre', 'Year', 'Director', 'Actors', 'Runtime', 'Released', 'Plot', 'Country', 'Language'];
  infoList.forEach(info => {
    const type = document.createElement('h2');
    const el = document.createElement('p');
    el.classList.add(`__${info.toLowerCase()}`);
    el.textContent = details[info];
    type.textContent = info.toUpperCase();
    container.querySelector(`.info__${info.toLowerCase()}`).appendChild(type);
    container.querySelector(`.info__${info.toLowerCase()}`).appendChild(el);

  });

  details.Ratings.forEach(rating => {
    const el = document.createElement('li');
    const cn = rating.Source.replace(/\s/g, '').toLowerCase();
    el.classList.add(`rating__${cn}`);
    el.textContent = `${rating.Value}`;
    container.querySelector('.rating__container').appendChild(el);
    el.appendChild 
  });

  const imdImg = document.createElement('img');
  imdImg.classList.add('rating__imdb');
  imdImg.src = '/imdb.png';
  container.querySelector('.rating__internetmoviedatabase').before(imdImg);
  
  const rtImg = document.createElement('img');
  rtImg.classList.add('rating__rt');
  rtImg.src = '/rotten.png';
  container.querySelector('.rating__rottentomatoes').before(rtImg);

  const mtImg = document.createElement('img');
  mtImg.classList.add('rating__mt');
  mtImg.src = '/metacritic.png';
  container.querySelector('.rating__metacritic').before(mtImg);


}