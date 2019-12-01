import React from 'react';
import { Link } from 'react-router-dom';
import optionsStyles from '../css/Options.module.css';

const Options = () => {
  return (
    <>
      <Link className={optionsStyles.button} to='/lotto'>Lotto - 6 from 49</Link>
      <Link className={optionsStyles.button} to='eurojackpot'>Eurojackpot - 5 from 50</Link>
      <Link className={optionsStyles.button} to='minilotto'>Minilotto - 5 from 42</Link>
    </>
  );
}

export default Options;