import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import  { useState } from "react";
import { useEffect } from 'react';
import './header.css';
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';





const Header = () => {
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location]);
    const watchList = useSelector((state) => state.watchList.watchList);

  // Calculate the count of movies in the watch list
  const watchListCount = watchList.length;

  

    return(
        <nav class="navbar navbar-expand-lg  ">
            <ul class="container-fluid ">

            <li>
            <Link style={{ textDecoration: 'none' }}
            to="/"
            className={activeLink === "/" ? "active" : ""}
            >
                <h5>Movie App</h5>
            </Link>
            </li>
            <li>
                    
            <Link style={{ textDecoration: 'none' }}
            to="/watch-list"
            className={activeLink === "/watch-list" ? "active" : ""}
            >
                {/* <span><i class="fa fa-heart" aria-hidden="true"></i></span> */}
                <FaHeart /> {/* Heart icon */}
              {/* Display watchListCount if it's greater than 0 */}
              {watchListCount > 0 && (
                <span className="badge badge-pill badge-danger ml-1 text-info">
                  {watchListCount}
                </span>
              )}


            </Link>

            </li>




</ul>
</nav>




    )
}
export default Header;

{/* <li></li>
<Link style={{ textDecoration: 'none' }}
to="/"
className={activeLink === "/" ? "active" : ""}
>
    <h5>Movie App</h5>
</Link>
<li>
    

<Link style={{ textDecoration: 'none' }}
to="/watch-list"
className={activeLink === "/watch-list" ? "active" : ""}
>
    <span><i class="fa fa-heart" aria-hidden="true"></i></span>

</Link>
</li> */}
