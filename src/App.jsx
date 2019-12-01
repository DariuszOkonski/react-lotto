import React from 'react';
import appStyles from './css/App.module.css';
import Game from './components/Game';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className={appStyles.app}>
      <h1 className={appStyles.header}>Lotto App</h1>
      {/* <BrowserRouter> */}
      <Game />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;