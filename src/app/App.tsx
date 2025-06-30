import { BrowserRouter } from 'react-router-dom';
import { Routing } from '../routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
