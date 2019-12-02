import React from 'react';
import Ball from './Ball';
import ballsListStyles from '../css/BallsList.module.css';

const BallsList = ({ arr }) => {

  return (
    <div className={ballsListStyles.ballsList}>
      {arr.map((ball, index) => <Ball key={index} number={ball} />)}
    </div>
  );
}

export default BallsList;