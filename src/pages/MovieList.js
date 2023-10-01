// Example component or service file

import React, { useEffect, useState } from 'react';
import axiosInstance from "../apis/config"; // Import your Axios instance
import MovieCard from "../components/movies/movieCard";
import Search from "../components/search/search";



function MovieList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/movie/popular', {
        params: {
          api_key: '95d9623074e3fd44965f1697794cc620', // You can include the API key in the params as well
          // other query parameters
        },
      })
      .then((res) => setMoviesList(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>   
    <Search />
      <div class="container">
       <div class="row ">
        {moviesList.map((movie) => {
          return (
            
            <div className="col-md-3 col-sm-6 my-3"
            key={movie.id}>
              <MovieCard
                movieItem={movie}
              />
            </div>
          );
        })}
        </div>
      </div>

    </>
  );
}

export default MovieList;
