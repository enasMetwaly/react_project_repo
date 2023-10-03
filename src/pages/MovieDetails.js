// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { axiosInstance } from "../apis/config";
// import DetailedMovie from "../components/Details/movieDetails";

// export default function MovieDetails() {
//   const [movie, setMovie] = useState(null); // State to hold the movie data
//   const { id } = useParams(); // Get the movie ID from the URL params

//   useEffect(() => {
//     axiosInstance
//       .get(`/movie/${id}`) // Use the correct endpoint to fetch movie details by ID
//       .then((res) => {
//         // Set the movie data in the state
//         setMovie(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]); // Use `id` as a dependency to re-fetch data when the ID changes

//   return (
//     <div className="col">
//       <h2>Movie Details</h2>
//       {movie && <DetailedMovie movieItem={movie} />}
//     </div>
//   );
// }
