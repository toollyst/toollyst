import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/main';

export const browserRouter = createBrowserRouter([
  { index: true, element: <MainPage /> },
]);
