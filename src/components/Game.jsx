import React from 'react';
import gameStyles from '../css/Game.module.css';
import Options from './Options';

const Game = () => {
  return (
    <section className={gameStyles.game}>
      <Options />
    </section>
  );
}

export default Game;