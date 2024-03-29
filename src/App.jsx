import React from 'react';
import appStyles from './css/App.module.css';
import Game from './components/Game';

function App() {
  return (
    <div className={appStyles.app}>
      <h1 className={appStyles.header}>Lotto App</h1>
      <Game />
    </div>
  );
}

export default App;