import React from "react";
import styles from "./card.module.css";
import { baseUrlPoster } from "../../../constant";
import notFoundImage from '../../../assets/images/notfound_portrait.jpg';

const MovieCard = (props) => {
  const { title, poster_path, overview, vote_average, viewDetail, id } = props;
  
  return (
    <div className={styles.card} onClick={() => viewDetail(id)}>
      <img
        src={ poster_path ? `${baseUrlPoster}${poster_path}` : `${notFoundImage}`}
        alt={title}
        className={styles.poster}
      />
      <div className={styles.infoWrapper}>
        <div className={styles.titleAndVote}>
          <h2 className={styles.title}>{title}</h2>
          <span className={styles.voteAverage}>{vote_average}</span>
        </div>
        <p className={styles.overview}>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
