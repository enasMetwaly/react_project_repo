import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import  { useState } from "react";
import './header.css';
import { FaHeart } from 'react-icons/fa';
import  { useContext } from "react";

import { FaMoon } from "react-icons/fa"; // Import FaMoon from react-icons/fa


import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentLang } from '../../store/slices/language'; 
import { changeCurrentTheme } from '../../store/slices/theme';
import { LanguageContext } from "../../context/language";

import { ThemeContext } from "../../context/theme";
import { useEffect } from 'react';





const Header = () => {
  const { contextLang ,  setContextLang } = useContext(LanguageContext)

  const language = useSelector((state) => state.language.current_lang);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.current_theme);

  const { contextTheme ,  setContextTheme } = useContext(ThemeContext)

  const [isMoonFilled, setIsMoonFilled] = useState(false);
  const toggleTheme = () => {
    setIsMoonFilled(!isMoonFilled);
    setContextTheme(contextTheme === "light" ? "dark" : "light");
  };



  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    dispatch(changeCurrentLang(newLanguage));
  }      

  




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
            <ul className="navbar-nav ml-auto">
  <li className="nav-item">
    <Link to="/watch-list" className={activeLink === "/watch-list" ? "active" : ""}>
      <div className="d-flex align-items-center">
        <FaHeart /> {/* Heart icon */}
        {/* Display watchListCount if it's greater than 0 */}
        {watchListCount > 0 && (
          <span className="badge badge-pill badge-danger ml-1 text-info">
            {watchListCount}
          </span>
        )}
      </div>
    </Link>
  </li>
  <li className="nav-item">
    <FaMoon
      className={`moon-icon ${isMoonFilled ? "filled" : "hollow"}`}
      onClick={toggleTheme}
      size={32}
    />
  </li>
  <li className="nav-item">
    <div className="language-switcher">
      <select value={contextLang} onChange={(e) => setContextLang(e.target.value)}>
        <option value="ar">Arabic</option>
        <option value="en">English</option>
      </select>
    </div>
  </li>
</ul>


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
