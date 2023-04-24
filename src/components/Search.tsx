import { useRef, useState } from 'react';
import {
  AllYears as allYears,
  queryNumber,
  shows,
} from '../constants/selectItems';
import Select from './Select';
import MovieList from './MovieList';

export default function Search() {
  const [title, setTitle] = useState('');
  const [searchCategory, setSearchCategory] = useState({
    show: 'movie',
    queryNumber: '',
    year: '',
  });
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('Search for the movie title!');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory({ ...searchCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMovies([]);
    if (inputRef.current?.value.trim() === '') {
      inputRef.current.focus();
      setMessage('Please enter a movie title!');
      return;
    }
    try {
      setMessage('');
      setIsLoading(true);
      const json = await getMovies(
        title,
        searchCategory.year,
        searchCategory.show
      );
      if (json.Response === 'True') {
        setMessage('');
        const { Search: movies, totalResults } = json;
        setMovies(movies);
        return;
      }
      setMessage(json.Error);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // 영화 정보 요청
  async function getMovies(title: string, year = '', type = '') {
    const s = `&s=${title.trim()}`;
    const y = year === 'All Years' ? '' : `&y=${year}`;
    const t = `&type=${type}`;
    try {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c${s}${y}${t}`
      );
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
      setMessage('Failed to fetch');
    }
  }

  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for Movies, Series & More"
          className="flex-1 border-2 border-gray-300 rounded-md p-2 outline-none focus:ring-4 focus:ring-amber-200"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
        />
        <Select
          category="show"
          options={shows}
          onChange={handleSearchCategories}
        />
        <Select
          category="queryNumber"
          options={queryNumber}
          onChange={handleSearchCategories}
        />
        <Select
          category="year"
          options={allYears}
          onChange={handleSearchCategories}
        />
        <button className="bg-amber-400 rounded-md text-black font-bold w-32 hover:opacity-80">
          Apply
        </button>
      </form>
      <MovieList movies={movies} isLoading={isLoading} message={message} />
    </>
  );
}
