import '@toollyst/ui/styles/global.css';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@toollyst/ui';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@toollyst/ui/accordion';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme={'light'}>
      <div className={'rounded-md'}>1</div>
      <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
        <AccordionItem className="lg:w-[500px] max-w-full" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ThemeProvider>
  </StrictMode>
);
