import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from '~/api/fetchMovies';

export default function MovieInfos() {
  const [infos, setInfos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setInfos(await fetchMovies(`i=${id}`));
    })();
  }, []);

  return (
    <>
      <h2>info test</h2>
      {infos ? (
        <img src={infos.Poster.replace(/SX300/, 'SX700')} alt={infos.Title} />
      ) : (
        'Loading...'
      )}

      {infos.Ratings
        ? infos.Ratings.map((info, idx) => (
            <div key={idx}>
              {info.Source}, {info.Value}
            </div>
          ))
        : 'Loading...'}
    </>
  );
}
