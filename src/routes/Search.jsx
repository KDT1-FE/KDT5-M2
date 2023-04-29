import { useState } from 'react';
import fetchMovies from '~/api/fetchMovies';
import styles from '~/styles/Search.module.scss';
import Hero from '~/components/Hero';
import { NavLink } from 'react-router-dom';
import Select from '~/components/Select';
import selectItems from '~/common/selectItems';

export default function Search() {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [more, setMore] = useState(2);
  const [options, setOptions] = useState({
    type: null,
    page: '10',
    years: null,
  });

  async function getList(e) {
    e.preventDefault();
    const {
      type,
      page,
      years = years === 'All years' ? null : years,
    } = options;
    let movies = [];
    let num = parseInt(page) / 10;
    try {
      for (let i = 1; i <= num; i++) {
        console.log(i);
        const data = await fetchMovies(
          `s=${title}&type=${type}&page=${i}&y=${years}`
        );
        if (data.Response === 'False') throw new Error(data.Error);
        movies = [...movies, ...data.Search];
      }
      setLists(movies);
      //console.log(type, page, years);
      setMore(num + 1);
    } catch (err) {
      alert(err);
    }
  }
  async function getMoreList() {
    try {
      const data = await fetchMovies(`s=${title}&page=${more}`);
      setLists([...lists, ...data.Search]);
      setMore(more + 1);
      if (data.Response === 'False') throw new Error(data.Error);
    } catch (err) {
      alert(err);
    }
    //console.log(...lists, ...newList);
  }

  function getSearchOption(e) {
    setOptions({ ...options, [e.target.name]: e.target.value });
    console.log(options);
  }

  return (
    <div className="container">
      <Hero />
      <div>
        <form onSubmit={getList} className={styles.searchBar}>
          <input
            type="text"
            value={title}
            placeholder="Search for Movies, Series & more"
            onChange={(e) => {
              setTitle(e.target.value);
              //console.log(title);
            }}
          />
          <Select
            category="type"
            values={selectItems.genre}
            onChange={getSearchOption}
          />
          <Select
            category="page"
            values={selectItems.loadPageNum}
            onChange={getSearchOption}
          />
          <Select
            category="years"
            values={selectItems.years}
            onChange={getSearchOption}
          />
          <button className="btn">Apply</button>
        </form>

        <ul>
          {lists
            ? lists.map((list) => (
                <li key={list.imdbID}>
                  <NavLink to={`/movie/${list.imdbID}`}>
                    <figure>
                      <img src={list.Poster} alt={list.Title} />
                      <figcaption>
                        <div className="yellow">{list.Year}</div>
                        <div>{list.Title}</div>
                      </figcaption>
                    </figure>
                  </NavLink>
                </li>
              ))
            : ''}
        </ul>
        <button onClick={getMoreList}>more</button>
      </div>
    </div>
  );
}
