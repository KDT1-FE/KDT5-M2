import matacritic from '@/assets/metacritic.png';
import rottenTomatoes from '@/assets/rottenTomatoes.png';
import imdb from '@/assets/imdb.png';

interface RatingSource {
  [key: string]: '*.png';
}

const RATING_SOURCE: RatingSource = {
  'Internet Movie Database': imdb,
  'Rotten Tomatoes': rottenTomatoes,
  Metacritic: matacritic,
};

export default RATING_SOURCE;
