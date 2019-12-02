import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import optionsStyles from '../css/Options.module.css';
import drawStyles from '../css/Draw.module.css';
import BallsList from './BallsList';

const Draw = (props) => {
  const [arr, setArr] = useState([]);
  const [done, setDone] = useState(false);

  const generate = () => {
    let rangeArr = [];
    let arr = [];

    for (let i = 0; i < props.pot; i++) {
      rangeArr.push(i + 1);
    }

    for (let i = 0; i < props.balls; i++) {
      let newNumber = rangeArr.splice(Math.floor(Math.random() * rangeArr.length), 1);
      arr.push(newNumber[0]);
    }

    setArr([...arr]);
    setDone(true);
  }

  return (
    <section className={drawStyles.draw}>
      <h3 className={drawStyles.header}>Draw {props.balls} balls from pot of {props.pot}</h3>

      <BallsList arr={arr} />

      <button
        disabled={done}
        className={optionsStyles.button}
        onClick={generate}
      >Generate</button>

      <Link className={optionsStyles.button} to='/'>Back</Link>
    </section>
  );
}

export default Draw;