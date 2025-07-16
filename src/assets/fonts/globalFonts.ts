import { createGlobalStyle } from 'styled-components';

import Onest300Woff2 from './Onest-Light.woff2';
import Onest300Woff from './Onest-Light.woff';
import Onest400Woff2 from './Onest-Regular.woff2';
import Onest400Woff from './Onest-Regular.woff';
import Onest500Woff2 from './Onest-Medium.woff2';
import Onest500Woff from './Onest-Medium.woff';
import Onest600Woff2 from './Onest-SemiBold.woff2';
import Onest600Woff from './Onest-SemiBold.woff';
import Onest700Woff2 from './Onest-Bold.woff2';
import Onest700Woff from './Onest-Bold.woff';


export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Onest';
    src: url(${Onest300Woff2}) format('woff2'), /* Предпочтительный WOFF2 */
         url(${Onest300Woff}) format('woff');   /* Резервный WOFF */
    font-weight: 300;
    font-style: normal;
    font-display: swap; 
  }

  @font-face {
    font-family: 'Onest';
    src: url(${Onest400Woff2}) format('woff2'),
         url(${Onest400Woff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Onest';
    src: url(${Onest500Woff2}) format('woff2'),
         url(${Onest500Woff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Onest';
    src: url(${Onest600Woff2}) format('woff2'),
         url(${Onest600Woff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Onest';
    src: url(${Onest700Woff2}) format('woff2'),
         url(${Onest700Woff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Onest', sans-serif;
  }
`;