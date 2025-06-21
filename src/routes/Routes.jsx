import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ProductListingPage />} />
                <Route path="/product" element={<ProductViewPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
};

export default AppRoutes;
