import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="bg-gray-100 mt-10 mb-10 p-4 flex justify-center items-center rounded-md flex-wrap gap-5">
      {/* <p className="py-14 text-xl text-gray-400">Search for the movie title!</p> */}
      {movies.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}
