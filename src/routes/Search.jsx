import { useState, useEffect, useRef } from 'react';
import styles from '~/styles/Search.module.scss';
import { NavLink } from 'react-router-dom';
import { fetchMovies } from '~/api/fetchMovies';
import Hero from '~/components/Hero';
import Select from '~/components/Select';
import selectItems from '~/common/selectItems';
import SkeletonSearch from '~/components/SkeletonSearch';
import TopBtn from '~/components/TopBtn';
import { useCallback } from 'react';

export default function Search() {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState({
    type: null,
    page: '10',
    years: null,
  });
  const [lists, setLists] = useState([]);
  const [more, setMore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [total, setTotal] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  const { type, page, years = years === 'All years' ? null : years } = options;

  async function getList(e) {
    e.preventDefault();
    let num = parseInt(page) / 10;
    try {
      setIsLoading(true);
      setLists([]);
      setMore(0);
      setHasNext(true);
      const [movies, total] = await fetchMovies(title, type, years, num);
      setLists(movies);
      setTotal(total);
      setMore(num);
    } catch (err) {
      setHasNext(false);
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }

  const getMoreList = useCallback(async () => {
    let num = parseInt(page / 10);
    try {
      setIsClick(true);
      const [movies] = await fetchMovies(
        title,
        type,
        years,
        more + num,
        more + 1
      );
      setLists([...lists, ...movies]);
      setMore(more + num);
    } catch (err) {
      setHasNext(false);
      alert(err);
      if (total - lists.length < 10) {
        const [movies] = await fetchMovies(
          title,
          type,
          years,
          more + 1,
          more + 1
        );
        setLists([...lists, ...movies]);
      }
    } finally {
      setIsClick(false);
    }
  }, [more]);

  function getSearchOption(e) {
    setOptions({ ...options, [e.target.name]: e.target.value });
  }

  const target = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && lists.length >= 10 && hasNext) {
          getMoreList();
        }
      },
      { threshold: 1 }
    );
    io.observe(target.current);
    return () => {
      io.disconnect();
    };
  }, [more, hasNext]);

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
              setTitle(e.target.value.trim());
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
          {lists.length ? <TopBtn total={total} page={lists.length} /> : null}
          {!isLoading ? (
            <>
              {lists.map((list) => {
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
              })}
            </>
          ) : (
            <SkeletonSearch items={10} />
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
            <SkeletonSearch items={10} />
          </ul>
        ) : (
          ''
        )}

        <div ref={target}></div>
      </div>
    </div>
  );
}
