// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App />, document.getElementById('root'));
    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





import React from 'react';
import { createRoot } from 'react-dom/client';  // new way of using routerDOM for React 18

import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // new way of using routerDOM for React 18

root.render(       
<React.StrictMode>
<App />
</React.StrictMode>, 
);
    
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();