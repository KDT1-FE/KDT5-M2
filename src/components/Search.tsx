import { useState } from 'react';
import {
  AllYears as allYears,
  queryNumber,
  shows,
} from '../constants/selectItems';
import Select from './Select';
import MovieList from './MovieList';
import LoadingSpinner from './LoadingSpinner';

export default function Search() {
  const [title, setTitle] = useState('');
  const [searchCategory, setSearchCategory] = useState({
    show: '',
    queryNumber: '',
    year: '',
  });
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory({ ...searchCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, searchCategory);
    const result = await getMovies(
      title,
      searchCategory.year,
      searchCategory.show
    );
    const { movies, totalResults } = result;
    setMovies(movies);
  };
  console.log(movies);

  // 영화 정보 요청
  async function getMovies(title: string, year = '', type = '') {
    const s = `&s=${title}`;
    const y = year === 'All Years' ? '' : `&y=${year}`;
    const t = `&type=${type}`;
    console.log(`https://omdbapi.com/?apikey=7035c60c${s}${y}${t}`);
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c${s}${y}${t}`
      );
      const json = await res.json();
      if (json.Response === 'True') {
        const { Search: movies, totalResults } = json;
        return {
          movies,
          totalResults,
        };
      }
      return json.Error;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
      <MovieList movies={movies} isLoading={isLoading} />
    </>
  );
}
