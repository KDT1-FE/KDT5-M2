import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosDetailMovies } from "../../../core/movieDetailData";
import styles from "./RouteSection.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const RouteSection = () => {
  const [movie, setMovie] = useState({});
  // 모달창 노출 여부 false
  const [open, setOpen] = useState(false);

  // 모달창 제어
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { movieId } = useParams();

  // mui 라이브러리 ZoomOut icon styling
  const style = {
    position: "absolute",
    top: "50%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 740,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };
  useEffect(() => {
    async function detailMovies(e) {
      const detail = await axiosDetailMovies(movieId);
      setMovie(detail);
    }
    detailMovies(movieId);
  }, [movieId]);

  const bigPoster = movie.Poster ? movie.Poster.replace("SX300", "SX500") : "";

  return (
    <section className={styles.mainSection}>
      <div className={styles.movieContainer}>
        <div
          className={styles.moviePoster}
          style={{ background: `url(${movie.Poster})` }}
        >
          <Button onClick={handleOpen} className={styles.zoomOutButton}>
            <ZoomOutMapIcon className={styles.zoomOutMapIcon} />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} style={{ background: `url(${bigPoster})` }}></Box>
          </Modal>
        </div>

        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>{movie.Title}</h1>
          <div className={styles.movieDetail}>
            <div className={styles.movieDetailInner}>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>개봉</div>
                <div className={styles.movieDetailWhite}>{movie.Released}</div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>장르</div>
                <div className={styles.movieDetailWhite}>{movie.Genre}</div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>국가</div>
                <div className={styles.movieDetailWhite}>{movie.Country}</div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>러닝타임</div>
                <div className={styles.movieDetailWhite}>{movie.Runtime}</div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>수상</div>
                <div className={styles.movieDetailWhite}>{movie.Awards}</div>
              </div>
            </div>
            <div className={styles.movieDetailInner}>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>평점</div>
                <div className={styles.movieDetailWhite}>
                  {movie.imdbRating}
                </div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>누적수입</div>
                <div className={styles.movieDetailWhite}>{movie.BoxOffice}</div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>배우</div>
                <div className={styles.movieDetailWhite}>{movie.Actors}</div>
              </div>
              <div className={styles.movieDetailList}>
                <div className={styles.movieDetailGray}>감독</div>
                <div className={styles.movieDetailWhite}>{movie.Director}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
