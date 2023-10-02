import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieList from '../pages/MovieList'

import MovieDetails from '../pages/MovieDetails'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import WatchList from '../pages/WatchList'
import MovieSearch from '../components/search/search'
 // Your search results component




export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movieDetails-details/:id" element={<MovieDetails />} />
            <Route path="/watch-list" element={<WatchList />} />
            <Route path="/search" component={<MovieSearch/>} />

            
            <Route path="*" element={<NotFound />} />

        </Routes>

    )
}
