import React, { useState, useEffect } from 'react';
import axiosInstance from "../apis/config";
import MovieCard from "../components/movies/movieCard";
import Pagination from "../components/pagination/pagination";
import { useNavigate } from 'react-router-dom';
import Search from "../components/search/search";
import MovieSearch from "../components/search/search";



function MovieList() {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    axiosInstance
      .get('/movie/popular', {
        params: {
          api_key: '95d9623074e3fd44965f1697794cc620',
          page: currentPage,
          language: selectedLanguage,
        },
      })
      .then((res) => {
        setMoviesList(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage, selectedLanguage]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Redirect to the search page with the search query
    navigate(`/search?query=${searchQuery}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePaginationChange = (newPage) => {
    // Call the parent's handlePageChange function
    handlePageChange(newPage);
    // You can also add any other logic related to pagination here
  };


  return (
    <div>

      <div className="container">
        <div className="row">
          {moviesList.map((movie) => (
            <div className="col-md-3 col-sm-6 my-3" key={movie.id}>
              <MovieCard movieItem={movie} />
              
            </div>
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

      </div>
    </div>
  );
}

export default MovieList;
