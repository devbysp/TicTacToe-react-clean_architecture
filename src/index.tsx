import React from 'react';
import { createRoot } from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { GameStateProvider } from './store/GameStateProvider';
import App from './view/App/App';
import './index.css';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GameStateProvider>
        <App />
    </GameStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
