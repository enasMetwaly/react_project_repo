import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Router from "./Routes";
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
        <BrowserRouter>
        <Header />
         <Router />


         </BrowserRouter>


    </>
  );
}

export default App;
