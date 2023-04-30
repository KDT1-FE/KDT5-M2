import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from '~/styles/MovieInfos.module.scss';
import fetchMovies from '~/api/fetchMovies';
import context from '~/store/MyContext';

export default function MovieInfos() {
  const [infos, setInfos] = useState({});
  const { id } = useParams();
  const { setValue } = useContext(context);

  useEffect(() => {
    (async () => {
      setInfos(await fetchMovies(`i=${id}&plot=full`));
      setValue(id);
    })();
  }, []);

  //console.log(value);
  //MyContext(id);

  return (
    <div className={`container ${styles.wrapper}`}>
      {infos.Poster ? (
        <>
          <div className={styles.poster}>
            <img
              src={infos.Poster.replace(/SX300/, 'SX700')}
              alt={infos.Title}
            />
          </div>
          <div className={styles.details}>
            <h1 className="omdb">{infos.Title}</h1>
            <div className="yellow">{`${infos.Released} / ${infos.Runtime} / ${infos.Country}`}</div>
            <div className="gray">{infos.Plot}</div>
            <div>
              <h4 className="omdb">Ratings</h4>
              <div className={styles.ratings}>
                {infos.Ratings.map((info, idx) => (
                  <div key={idx} className={styles.rating}>
                    <img
                      src={`/src/assets/${info.Source}.png`}
                      alt={info.Source}
                    />
                    <span className="gray">{info.Value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="omdb">Actors</h4>
              <p className="gray">{infos.Actors}</p>
            </div>
            <div>
              <h4 className="omdb">Director</h4>
              <p className="gray">{infos.Director}</p>
            </div>
            <div>
              <h4 className="omdb">Production</h4>
              <p className="gray">{infos.Production}</p>
            </div>
            <div>
              <h4 className="omdb">Genre</h4>
              <p className="gray">{infos.Genre}</p>
            </div>
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
