import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from 'routing/routing';
import { GlobalStyle } from 'shared/consts';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <GlobalStyle />
            <Routing />
        </BrowserRouter>,
    );
}
