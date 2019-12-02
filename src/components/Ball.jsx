import React from 'react';
import ballStyles from '../css/Ball.module.css';

const Ball = ({ number }) => {
  return (
    <div className={ballStyles.ball}>
      <p>{number}</p>
    </div>
  );
}

export default Ball;