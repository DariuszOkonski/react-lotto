import React from 'react';
import { Link } from 'react-router-dom';
import optionsStyles from '../css/Options.module.css';
import drawStyles from '../css/Draw.module.css';
import Ball from './Ball';

const Draw = (props) => {
  return (
    <section className={drawStyles.draw}>
      <h3 className={drawStyles.header}>Draw {props.balls} balls from pot of {props.pot}</h3>

      <Ball number={4} />

      <button className={optionsStyles.button}>Generate</button>
      <Link className={optionsStyles.button} to='/'>Back</Link>
    </section>
  );
}

export default Draw;