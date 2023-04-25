import { useState } from 'react';
import fetchMovies from '~/api/fetchMovies';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';

export default function Search() {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(2);

  async function getList() {
    const { Search } = await fetchMovies(`s=${title}`);
    setLists(Search);
    setPage(2);
    console.log(lists);
  }
  async function getMoreList() {
    const { Search } = await fetchMovies(`s=${title}&page=${page}`);
    setLists([...lists, ...Search]);
    setPage(page + 1);
    //console.log(...lists, ...newList);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            //console.log(title);
          }}
        />
        <button onClick={getList}>submit</button>
      </div>

      <ul className={`${styles} container`}>
        {lists
          ? lists.map((list) => (
              <li key={list.imdbID}>
                <div>{list.Title}</div>
                <Link to={`/movie/${list.imdbID}`}>
                  <img src={list.Poster} alt={list.Title} />
                </Link>
              </li>
            ))
          : ''}
      </ul>
      <button onClick={getMoreList}>more</button>
    </>
  );
}
