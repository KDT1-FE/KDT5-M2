import { useParams } from 'react-router-dom';
import defaultImg from '@/assets/defaultImg.jpg';
import NotFound from '@/routes/NotFound';
import MovieDetailSkeleton from '@/components/MovieDetailSkeleton';
import RATING_SOURCE from '@/constants/ratingSource';
import getMovie from '@/api/getMovie';

export default function MovieDetail() {
  const { movieId } = useParams();
  const { isLoading, movie } = getMovie(movieId);

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
                  src={RATING_SOURCE[rating.Source]}
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
