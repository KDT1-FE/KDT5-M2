import { useState, useEffect, useRef } from 'react';
import styles from '~/styles/Search.module.scss';
import { NavLink } from 'react-router-dom';
import fetchMovies from '~/api/fetchMovies';
import Hero from '~/components/Hero';
import Select from '~/components/Select';
import selectItems from '~/common/selectItems';
import SkeletonSearch from '~/components/SkeletonSearch';

export default function Search() {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [more, setMore] = useState(0);
  const [options, setOptions] = useState({
    type: null,
    page: '10',
    years: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);
  let hasNext = true;

  const { type, page, years = years === 'All years' ? null : years } = options;
  async function getList(e) {
    e.preventDefault();
    let num = parseInt(page) / 10;
    try {
      setIsLoading(true);
      hasNext = true;
      const movies = await fetchMovies(title, type, years, num);
      setLists(movies);
      setMore(num + 1);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }
  async function getMoreList() {
    let num = parseInt(page / 10);
    try {
      setIsClick(true);
      const movies = await fetchMovies(
        title,
        type,
        years,
        more + num,
        more + 1
      );
      setLists([...lists, ...movies]);
      setMore(more + num);
    } catch (err) {
      hasNext = false;
      alert(err);
      console.log(hasNext);
    } finally {
      setIsClick(false);
    }
  }

  function getSearchOption(e) {
    setOptions({ ...options, [e.target.name]: e.target.value });
  }

  const target = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && more > 1 && hasNext) {
          getMoreList();
        }
      },
      { threshold: 1 }
    );
    if (target.current) {
      io.observe(target.current);
    }
    return () => {
      io.disconnect();
    };
  }, [more]);

  return (
    <div className="container">
      <Hero />
      <div>
        <form
          onSubmit={getList}
          className={`${!isLoading ? '' : 'wait'} bottom ${styles.searchBar}`}
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
                  : '/assets/no-poster-available.webp';
              return (
                <li key={list.imdbID}>
                  <NavLink to={`/movie/${list.imdbID}`}>
                    <figure>
                      <img src={img} alt={list.Title} className="card-img" />
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

        <div ref={target}></div>
      </div>
    </div>
  );
}
