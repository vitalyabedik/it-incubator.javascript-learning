import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {splitIntoWords} from './Monday/01-hello-tests/01';
import {User} from './Monday/06-callbacks-events/06';

const sentense = 'Hello my friends!'

const result = splitIntoWords(sentense)

console.log(result)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<User />);


