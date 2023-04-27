import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieInfos.module.scss';
import fetchMovies from '~/api/fetchMovies';
import context from '~/api/MyContext';
import { useContext } from 'react';

export default function MovieInfos() {
  const [infos, setInfos] = useState({});
  const { id } = useParams();
  const { setValue } = useContext(context);

  useEffect(() => {
    (async () => {
      setInfos(await fetchMovies(`i=${id}`));
      setValue(id);
    })();
  }, []);

  //console.log(value);
  //MyContext(id);

  return (
    <>
      <h2>info test</h2>
      <div className={`container ${styles.wrapper}`}>
        {infos.Poster ? (
          <>
            <img
              src={infos.Poster.replace(/SX300/, 'SX700')}
              alt={infos.Title}
            />
            <div>
              <h1>{infos.Title}</h1>
              <div>{`${infos.Released} / ${infos.Runtime} / ${infos.Country}`}</div>
              {infos.Ratings.map((info, idx) => (
                <div key={idx}>
                  {info.Source}, {info.Value}
                </div>
              ))}
            </div>
          </>
        ) : (
          'Loading...'
        )}
      </div>
    </>
  );
}
