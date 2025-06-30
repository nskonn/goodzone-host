import { Home } from 'pages';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
