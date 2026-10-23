import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
import {SsrDataContext, readSsrData} from './lib/ssr';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <SsrDataContext.Provider value={readSsrData()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SsrDataContext.Provider>
  </StrictMode>
);

// Páginas pré-renderizadas no build já chegam com HTML: o React só "assume" o que existe.
if (root.firstElementChild) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
