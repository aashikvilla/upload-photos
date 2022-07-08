import React from 'react';
import { Route, Routes} from 'react-router-dom';
import ErrorPage from './Error/ErrorPage';
import Home from './Home';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>          
            <Route path="/not-found" element={<ErrorPage/>}/>            
        </Routes>
    )
}

export default Routing