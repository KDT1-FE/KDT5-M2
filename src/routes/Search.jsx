import { useState } from 'react';
import fetchMovies from '~/api/fetchMovies';
import './Search.module.scss';
import { Link } from 'react-router-dom';

export default function Search() {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(2);

  async function getList() {
    try {
      const data = await fetchMovies(`s=${title}`);
      setLists(data.Search);
      setPage(2);
      console.log(lists);
      if (data.Response === 'False') throw alert(new Error(data.Error));
    } catch (err) {
      console.log(err);
    }
  }
  async function getMoreList() {
    try {
      const data = await fetchMovies(`s=${title}&page=${page}`);
      setLists([...lists, ...data.Search]);
      setPage(page + 1);
      if (data.Response === 'False') throw alert(new Error(data.Error));
    } catch (err) {
      console.log(err);
    }
    //console.log(...lists, ...newList);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            //console.log(title);
          }}
        />
        <button onClick={getList}>submit</button>
      </form>

      <ul className={`container`}>
        {lists
          ? lists.map((list) => (
              <li key={list.imdbID}>
                <div>{list.Title}</div>
                <Link to={`/movie/${list.imdbID}`}>
                  <figure>
                    <img src={list.Poster} alt={list.Title} />
                    <figcaption>
                      <div>{list.Year}</div>
                      <div>{list.Title}</div>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))
          : ''}
      </ul>
      <button onClick={getMoreList}>more</button>
    </>
  );
}
