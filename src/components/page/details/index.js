import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMoviesById } from '../../../redux/thunk';
import styles from './details.module.css';
import { baseUrlPoster } from '../../../constant';
import Spinner from '../../ui/spinner';

const Details = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [movie, setMovie] = useState(null);
  const [castAndCrew, setCastAndCrew] = useState({});

  const fetchmovieById = () => {
    const id = location?.state?.id;
    dispatch(getMoviesById(id)).then(({payload}) => {
      setMovie(payload?.data);
      getCastName(payload?.data?.credits);
      minutesToHHMMSS(payload?.data?.runtime);
    }).catch(error => {
      console.log(error);
    })
  };

  const getCastName = (credits) => {
      if(credits) {
        const cast = credits.cast.map(cast => cast.name);
        const director = credits.crew.find(director => director.job === 'Director');
        setCastAndCrew({...castAndCrew, cast: [...cast], director: director.name});
      }
  }

  function minutesToHHMMSS(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}:00`;
  }
  
  
  useEffect(() => {
    fetchmovieById();
  }, []);

  
  if (!movie) {
    return <Spinner/>;
  }


  return (
    <div className={styles.movieDetails}>
      <div className={styles.poster}>
        <img src={`${baseUrlPoster}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleAndVote}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p>({Math.round(movie.vote_average * 10) / 10})</p>
        </div>
        <p className={styles.rating}>{movie.release_date} | {minutesToHHMMSS(movie.runtime)} | {castAndCrew.director}</p>
        <p className={styles.cast}> <strong>Cast:</strong> {castAndCrew.cast.join(', ')}</p>
        <p className={styles.overview}> <strong>Description:</strong> {movie.overview}</p>
        {/* Display other movie details here */}
      </div>
    </div>
  );
};

export default Details;
