import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import  { useState } from "react";
import { useEffect } from 'react';
import './header.css';




const Header = () => {
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location]);
  
  

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
                <span><i class="fa fa-heart" aria-hidden="true"></i></span>

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
