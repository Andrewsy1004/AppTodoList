import React from 'react';
import ReactDOM from 'react-dom/client';
import {TodoMain} from './components/TodoMain';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoMain />
  </React.StrictMode>,
)
