import React from 'react';
import { Route, Routes} from 'react-router-dom';
import ErrorPage from './Error/ErrorPage';
import Home from './Home';
import Camera from './Home/Camera/Camera';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>          
            <Route path="/not-found" element={<ErrorPage/>}/>   
            <Route path="/Camera" element={<Camera/>}/>  

        </Routes>
    )
}

export default Routing