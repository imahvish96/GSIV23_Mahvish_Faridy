import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import { MdHome, MdSearch } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchMovies } from "../../../redux/thunk";
import { resetSearchMovie } from "../../../redux/slice/movies.slice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState();
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 800);
    return () => clearTimeout(delayTimeout);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      const search = async () => {
        dispatch(searchMovies(searchQuery)).catch((error) =>
          console.log(error)
        );
      };
      search();
    } else {
      dispatch(resetSearchMovie());
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (location.pathname === "/details") {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [location.pathname]);

  return (
    <header>
      {showSearch ? (
        <div className={styles.searchBar}>
          <div className={styles.searchIcon}>
            <MdSearch />
          </div>
          <input
            id="search"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      ) : (
        <span className={styles.headerTitle}>Movie Details</span>
      )}

      <Link to="/">
        <div className={styles.home}>
          <MdHome />
        </div>
      </Link>
    </header>
  );
};

export default Header;
