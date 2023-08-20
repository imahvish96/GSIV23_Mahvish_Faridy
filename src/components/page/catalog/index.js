import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Card from "../../ui/card";
import { getLatestMovies } from "./../../../redux/thunk";
import Spinner from "../../ui/spinner";
import styles from './style.module.css'

function Catalog() {
  const [moviesList, setMoviewList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [showDefault, setShowDefault] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const searchMovies = useSelector((state) => state.movies.searchMovie);

  const showSearchResponse = () => {
    if (Object.keys(searchMovies).length === 0) {
      setShowDefault(true);
      return
    }
    setShowDefault(false);
  }

  /**
   * fetchData only fetch data from the tmdb api through redux action
   */
  const fetchData = async () => {
    try {
      const payload = await dispatch(getLatestMovies(page)).then(unwrapResult);
      setMoviewList((prevData) => [...prevData, ...payload.data.results]);
      setLoading(false)
    } catch(error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    showSearchResponse();
  }, [searchMovies]);

  useEffect(() => {
    fetchData();
    setPage(2)
  }, []);

  /**
   * handleScroll check if the user has scrolled close to the bottom of the page.
   * if yes then it will call fetchData to load more data on the screen  
   */
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
    ) {
      setLoading(true)
    }
  };

  const getMoreMovies = () => {
      setPage((prev) => prev + 1);
      fetchData();
  }

  /**
   * this useEffect add scroll even to the handleScroll function
   */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) return;
    if(moviesList.length > 0) getMoreMovies();
  }, [loading]);

  const viewDetails = (id) => {
    navigate("/detail", { state: { id } });
  };

  if (!moviesList) {
    return <Spinner />;
  }

  return (
    <div className={styles.catalog}>
      {showDefault
        ? moviesList &&
          moviesList.map((movie) => (
            <Card {...movie} viewDetail={viewDetails} />
          ))
        : searchMovies?.data?.results.map((movie) => (
            <Card {...movie} viewDetail={viewDetails} />
          ))}
      {}
    </div>
  );
}

export default Catalog;
