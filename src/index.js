
import React from 'react';
import { createRoot } from 'react-dom/client';  // new way of using routerDOM for React 18

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // new way of using routerDOM for React 18

root.render(       
<App />
);
