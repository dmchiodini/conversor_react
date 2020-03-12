import React, { Component } from 'react';
import './App.css';
import moeda from './moeda.png';

import Conversor from './components/Conversor';



class App extends Component {

  render() {
  return (
    <div className="app">
      <header className="top">
        <img src={moeda} alt="moeda" />
        <h2>CONVERSOR DE MOEDAS</h2>
        <img src={moeda} alt="moeda" />
      </header>
      <div className="container">
        <div className="linha">
          <Conversor moedaA={['', 'USD $ - Dólar', 'BRL R$ - Real', 'EUR € - Euro', 'GBP £ - Libra Esterlina', 'CAD $ - Dólar Canadense', 'AUD $ - Dólar Australiano', 'JPY ¥ - Iene', 'CNY ¥ - Yuan', 'CHF ₣ - Franco Suiço', 'RUB р. - Rubio Russo']} 
          moedaB={['', 'BRL R$ - Real', 'USD $ - Dólar', 'EUR € - Euro', 'GBP £ - Libra Esterlina', 'CAD $ - Dólar Canadense', 'AUD $ - Dólar Australiano', 'JPY ¥ - Iene', 'CNY ¥ - Yuan', 'CHF ₣ - Franco Suiço', 'RUB р. - Rubio Russo']}>
          </Conversor>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
