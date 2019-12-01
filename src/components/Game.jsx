import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import gameStyles from '../css/Game.module.css';
import Options from './Options';
import Draw from './Draw';

const Game = () => {
  return (
    <section className={gameStyles.game}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Options} />
          <Route exact path='/lotto' component={() => <Draw balls={6} pot={49} />} />
          <Route exact path='/eurojackpot' component={() => <Draw balls={5} pot={50} />} />
          <Route path='/minilotto' component={() => <Draw balls={5} pot={42} />} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default Game;