import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import PdfPreview from './routes/PdfPreview';



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/PdfPreview" element={<PdfPreview />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;