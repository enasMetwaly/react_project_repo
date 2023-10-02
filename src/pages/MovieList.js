import React, { useEffect, useState } from 'react';
import axiosInstance from "../apis/config";
import MovieCard from "../components/movies/movieCard";
import Search from "../components/search/search";
import Pagination from "../components/pagination/pagination"; // Import the Pagination component

function MovieList() {
  const [moviesList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axiosInstance
      .get('/movie/popular', {
        params: {
          api_key: '95d9623074e3fd44965f1697794cc620',
          page: currentPage,
        },
      })
      .then((res) => {
        setMoviesList(res.data.results);
        setTotalPages(res.data.total_pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  // Define a function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Search />
      <div className="container">
        <div className="row ">
          {moviesList.map((movie) => {
            return (
              <div className="col-md-3 col-sm-6 my-3" key={movie.id}>
                <MovieCard movieItem={movie} />
              </div>
            );
          })}
        </div>
        {/* Pass totalPages, currentPage, and onPageChange as props to Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default MovieList;
