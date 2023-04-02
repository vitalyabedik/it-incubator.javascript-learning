import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {splitIntoWords} from './01-hello-tests/01';

const sentense = 'Hello my friends!'

const result = splitIntoWords(sentense)

console.log(result)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);


