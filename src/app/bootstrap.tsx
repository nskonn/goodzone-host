import React from 'react'
import { createRoot } from 'react-dom/client';
import { Home } from 'pages';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>,
    );
}
