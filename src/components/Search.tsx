import { useRef, useState } from 'react';
import { allYears, PAGE, SHOWS } from '@/constants/selectItems';
import Select from '@/components/Select';
import MovieList from '@/components/MovieList';
import fetchMovies from '@/api/fetchMovies';

export default function Search() {
  const [title, setTitle] = useState('');
  const [searchCategory, setSearchCategory] = useState({
    show: 'movie',
    page: '10',
    year: 'All Years',
  });
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | undefined>(
    'Search for the movie title!'
  );
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
      const res = await fetchMovies(
        title,
        searchCategory.year,
        searchCategory.show,
        searchCategory.page
      );
      if (res?.movies && res.movies.length > 0) {
        setMovies(res.movies);
      } else {
        setMessage(res?.errorMsg);
      }
    } catch (error) {
      setMessage('Failed to fetch');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
          options={SHOWS}
          onChange={handleSearchCategories}
        />
        <Select
          category="page"
          options={PAGE}
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
