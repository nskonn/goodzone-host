import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from 'routing/routing';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { GlobalFonts } from 'assets/fonts/globalFonts';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <GlobalStyle />
            <GlobalFonts />
            <Routing />
        </BrowserRouter>,
    );
}
