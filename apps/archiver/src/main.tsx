import '@toollyst/ui/styles/global.css';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@toollyst/ui';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme={'light'}>
      <RouterProvider router={browserRouter} />
    </ThemeProvider>
  </StrictMode>
);
