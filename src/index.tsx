import React from 'react';
import ReactDOM from 'react-dom';
import { textSpanEnd } from 'typescript';
import ItemQuantitavo from './components/itens_quantitativos/items';
import './index.css';
import reportWebVitals from './reportWebVitals';

const dados = [
  {
    id: 1,
    key: "teste",
    value: "1",
  }
];

ReactDOM.render(
  <React.StrictMode>
  <ItemQuantitavo data={dados}/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
