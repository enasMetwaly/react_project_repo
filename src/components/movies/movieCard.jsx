import React from 'react';
import tmdbBaseURL from '../../apis/img'; // Import tmdbBaseURL from the correct location

export default function MovieCard({ movieItem }) {
  return (
    <div className="card h-100  ">
      <div className="card-body">
        <img
          src={`${tmdbBaseURL}${movieItem.poster_path}`}
          alt={movieItem.title}
          style={{ maxWidth: '100%' }} // Set max-width to 100% to fit within the card

        />
        <h5 className="card-title">{movieItem.title}</h5>
        <div className="d-flex justify-content-between"> {/* Corrected 'd-felx' to 'd-flex' */}
      <h6 className="card-title">{movieItem.release_date}</h6>
      <i className="fa fa-heart-o" aria-hidden="true"></i>
    </div>


      </div>
    </div>
  );
}
