import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from '~/styles/MovieInfos.module.scss';
import fetchMovieDetail from '~/api/fetchMovieDetail';
import context from '~/store/MyContext';
import SkeletonMovie from '../components/SkeletonMovie';

export default function MovieInfos() {
  const [infos, setInfos] = useState({});
  const { id } = useParams();
  const { setValue } = useContext(context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetail(`i=${id}&plot=full`);
        setInfos(data);
        setValue(id);
      } catch (err) {
        alert(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className={`container ${styles.wrapper}`}>
      {!isLoading ? (
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
                    <img src={`/assets/${info.Source}.png`} alt={info.Source} />
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
        <SkeletonMovie />
      )}
    </div>
  );
}
