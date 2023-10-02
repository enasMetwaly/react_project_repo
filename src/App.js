import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Router from "./Routes";
import Header from './components/header/header'
import Search from "./components/search/search";

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


import { useSelector } from "react-redux";
import { LanguageContext } from "./context/language";
import { ThemeContext } from "./context/theme";



import { useState } from "react";






function App() {
  const [ contextLang , setContextLang ] = useState('en')
  const lang = useSelector((state) => state.language.current_lang);






  
  const [ contextTheme , setContextTheme ] = useState('light')
  const theme = useSelector((state) => state.theme.current_theme);





  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
      <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
          <div  className={contextTheme === "light" ? "light" : "dark"}
          dir={contextLang === "ar" ? "rtl" : "ltr"}>
            <Header />
            <Search />

            <div>
              <Router />
              
            </div>
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
