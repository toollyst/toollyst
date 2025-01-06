import './styles.css';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// @ts-ignore
import { Button } from '@toollyst/ui';
import '@toollyst/ui/styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Button>Hello</Button>
  </StrictMode>,
);
