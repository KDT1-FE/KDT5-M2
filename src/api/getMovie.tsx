import { useEffect, useState } from 'react';

export default function getMovie(movieId: string | undefined) {
  const [movie, setMovie] = useState<MovieDetail>();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovie(movieId: string | undefined) {
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
    fetchMovie(movieId);
  }, [movieId]);

  return { movie, isLoading };
}
