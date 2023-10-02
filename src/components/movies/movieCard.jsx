import React from 'react';
import tmdbBaseURL from '../../apis/img'; // Import tmdbBaseURL from the correct location
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList } from '../../store/slices/watchListSlice';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';





export default function MovieCard({ movieItem }) {
    const dispatch = useDispatch();
    const watchList = useSelector((state) => state.watchList.watchList);
  
    const isOnWatchList = watchList.some((movie) => movie.id === movieItem.id);
  
    const toggleWatchList = () => {
      if (isOnWatchList) {
        dispatch(removeFromWatchList(movieItem.id));
      } else {
        dispatch(addToWatchList(movieItem));
      }
    };
  





  return (
    <div className="card h-100  ">
      <div className="card-body">
        <img
          src={`${tmdbBaseURL}${movieItem.poster_path}`}
          alt={movieItem.title}
          style={{ maxWidth: '100%' }} // Set max-width to 100% to fit within the card

        />
        <h5 className="card-title">{movieItem.title}</h5>
        {/* <button onClick={toggleWatchList}>
          {isOnWatchList ? 'Remove from Watch List' : 'Add to Watch List'}
        </button> */}

        <div className="d-flex justify-content-between"> {/* Corrected 'd-felx' to 'd-flex' */}
      <h6 className="card-title">{movieItem.release_date}</h6>
      {isOnWatchList ? (
          <FaHeart onClick={toggleWatchList} style={{ 
            color: 'yellow',
            width: '25px',   // Set the width of the icon
            height: '25px',  // Set the height of the icon

         }} />
        ) : (
            <FaHeart
            onClick={toggleWatchList}
            style={{
              fill: 'none',  // Makes the heart outline (hollow)
              stroke: isOnWatchList ? 'yellow' : 'black', // Stroke color (adjust as needed)
              strokeWidth: '5', // Stroke width (adjust as needed)
              cursor: 'pointer', // Add pointer cursor on hover
              width: '20px',   // Set the width of the icon
              height: '20px',  // Set the height of the icon
  
            }}
          />
          )}

    </div>


      </div>
    </div>
  );
}
