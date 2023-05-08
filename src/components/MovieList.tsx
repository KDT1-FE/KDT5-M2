import LoadingSpinner from '@/components/LoadingSpinner';
import MovieCard from '@/components/MovieCard';

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
  message?: string;
}

export default function MovieList({
  movies,
  isLoading,
  message,
}: MovieListProps) {
  return (
    <div className="bg-gray-100 mt-10 mb-10 p-4 flex justify-center items-center rounded-md flex-wrap gap-5">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {movies.map((movie: Movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </>
      )}
      <p className="py-14 text-xl text-gray-400">{message}</p>
    </div>
  );
}
