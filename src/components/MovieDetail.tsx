import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from '@/assets/defaultImg.jpg';
import imdb from '@/assets/imdb.png';
import matacritic from '@/assets/metacritic.png';
import rottenTomatoes from '@/assets/rottenTomatoes.png';
import NotFound from '@/routes/NotFound';
import MovieDetailSkeleton from '@/components/MovieDetailSkeleton';

export default function MovieDetail() {
  const [movie, setMovie] = useState<MovieDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  async function getMovie(movieId: string | undefined) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c&i=${movieId}&plot=full`
      );
      const json = await res.json();
      if (json.Response === 'True') {
        setMovie(json);
        return;
      }
      return json.Error;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  const ratingSource = (source: string) => {
    if (source === 'Internet Movie Database') {
      return imdb;
    } else if (source === 'Rotten Tomatoes') {
      return rottenTomatoes;
    } else if (source === 'Metacritic') {
      return matacritic;
    }
  };

  if (isLoading) {
    return <MovieDetailSkeleton />;
  }
  if (!movie) {
    return <NotFound />;
  }

  return (
    <div className="flex gap-10 text-gray-700">
      <img
        src={
          movie?.Poster === 'N/A'
            ? defaultImg
            : movie?.Poster.replace('SX300', 'SX700')
        }
        alt={movie?.Title}
        className="w-[500px] h-[750px] object-cover rounded-2xl shrink-0"
      />
      <div className="flex flex-col gap-4">
        <div className="font-Oswald text-7xl text-black">{movie?.Title}</div>
        <div className="text-amber-400 text-lg font-bold">
          <span>{movie?.Released}</span>
          &nbsp;/&nbsp;
          <span>{movie?.Runtime}</span>
          &nbsp;/&nbsp;
          <span>{movie?.Country}</span>
        </div>
        <div>{movie?.Plot}</div>
        <div>
          <h3 className="font-Oswald text-xl text-black">Ratings</h3>
          <div className="flex gap-16">
            {movie?.Ratings.map((rating) => (
              <div className="flex items-center gap-2" key={rating.Source}>
                <img
                  src={ratingSource(rating.Source)}
                  alt="rating source"
                  className="h-8"
                />
                <span>{rating.Value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-Oswald text-xl text-black">Actors</h3>
          <p>{movie?.Actors}</p>
        </div>
        <div>
          <h3 className="font-Oswald text-xl text-black">Director</h3>
          <p>{movie?.Director}</p>
        </div>
        <div>
          <h3 className="font-Oswald text-xl text-black">Production</h3>
          <p>{movie?.Production}</p>
        </div>
        <div>
          <h3 className="font-Oswald text-xl text-black">Genre</h3>
          <p>{movie?.Genre}</p>
        </div>
      </div>
    </div>
  );
}
