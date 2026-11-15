
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Load global application styles.
import './index.css';

// Import the root application component.
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
