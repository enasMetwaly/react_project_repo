import React, { useState, useEffect } from "react";
import axiosInstance from "../../apis/config";
import { useLocation } from "react-router-dom";
import tmdbBaseURL from '../../apis/img';
import Pagination from "../pagination/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList } from '../../store/slices/watchListSlice';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';



export default function MovieSearch() {
      const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const location = useLocation();
  const watchList = useSelector((state) => state.watchList);
  const handleToggleWatchList = (movie) => {
    if (isInWatchList(movie)) {
      // Remove from watchlist
      dispatch(removeFromWatchList(movie));
    } else {
      // Add to watchlist
      dispatch(addToWatchList(movie));
    }
  };

  const isInWatchList = (movie) => {
    return watchList.some((item) => item.id === movie.id);
  };


  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("query");

    if (queryParam) {
      setSearchQuery(queryParam);
      fetchData(queryParam);
    }
  }, [location.search]);

  const fetchData = (query, page = 1) => {
    axiosInstance
      .get("/search/movie", {
        params: {
          api_key: "95d9623074e3fd44965f1697794cc620",
          page: page,
          language: selectedLanguage,
          query: query,
        },
      })
      .then((res) => {
        setMoviesList(res.data.results);
        setTotalPages(res.data.total_pages);
        setCurrentPage(page);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    window.location.href = `/search?query=${searchQuery}`;
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchData(searchQuery, newPage);
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="container">
        <div className="row">
          {moviesList.map((movie) => (
            <div className="col-md-3 col-sm-6 my-3" key={movie.id}>
              <div className="card h-100">
                <div className="card-body">
                  <img
                    src={`${tmdbBaseURL}${movie.poster_path}`}
                    alt={movie.title}
                    style={{ maxWidth: '100%' }}
                  />
                  <h5 className="card-title">{movie.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {moviesList.length > 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
