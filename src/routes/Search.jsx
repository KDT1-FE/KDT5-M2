import { useState } from 'react';
import styles from '~/styles/Search.module.scss';
import { NavLink } from 'react-router-dom';
import fetchMovies from '~/api/fetchMovies';
import Hero from '~/components/Hero';
import Select from '~/components/Select';
import selectItems from '~/common/selectItems';
import SkeletonSearch from '../components/SkeletonSearch';

export default function Search() {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [more, setMore] = useState(2);
  const [options, setOptions] = useState({
    type: null,
    page: '10',
    years: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);

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
      setIsLoading(true);
      for (let i = 1; i <= num; i++) {
        const data = await fetchMovies(
          `s=${title}&type=${type}&page=${i}&y=${years}`
        );
        if (data.Response === 'False') throw new Error(data.Error);
        movies = [...movies, ...data.Search];
      }
      setLists(movies);
      setMore(num + 1);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }
  async function getMoreList() {
    try {
      setIsClick(true);
      const data = await fetchMovies(`s=${title}&page=${more}`);
      setLists([...lists, ...data.Search]);
      setMore(more + 1);
      if (data.Response === 'False') throw new Error(data.Error);
    } catch (err) {
      alert(err);
    } finally {
      setIsClick(false);
    }
  }

  function getSearchOption(e) {
    setOptions({ ...options, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <Hero />
      <div>
        <form
          onSubmit={getList}
          className={`${!isLoading ? '' : styles.wait} bottom ${
            styles.searchBar
          }`}
        >
          <input
            type="text"
            value={title}
            placeholder="Search for Movies, Series & more"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus
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
          <button className="btn">{!isLoading ? 'Apply' : 'wating...'}</button>
        </form>

        <ul>
          {!isLoading ? (
            lists.map((list) => {
              const img =
                list.Poster !== 'N/A'
                  ? list.Poster
                  : '/src/assets/no-poster-available.webp';
              return (
                <li key={list.imdbID}>
                  <NavLink to={`/movie/${list.imdbID}`}>
                    <figure>
                      <img src={img} alt={list.Title} />
                      <figcaption>
                        <div className="yellow">{list.Year}</div>
                        <div>{list.Title}</div>
                      </figcaption>
                    </figure>
                  </NavLink>
                </li>
              );
            })
          ) : (
            <SkeletonSearch />
          )}
          {lists == false ? (
            <p style={{ color: '#ced4da', fontSize: 20 + 'px' }}>
              Search for movies title!
            </p>
          ) : (
            ''
          )}
        </ul>
        {isClick ? (
          <ul style={{ paddingTop: 0, paddingBottom: 15 + 'px' }}>
            <SkeletonSearch />
          </ul>
        ) : (
          ''
        )}

        {lists.length ? (
          <button className={`btn ${styles.btn}`} onClick={getMoreList}>
            more
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
