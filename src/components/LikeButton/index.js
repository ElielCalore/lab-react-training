import { useState } from 'react';
import style from './style.module.css';

export function LikeButton(props) {
  const { children } = props;

  const [counter, setCounter] = useState(0);

  function sum() {
    setCounter(counter + 1);
  }
  return (
    <>
      <button className={style.button} onClick={sum}>
        {counter} {children}
      </button>
    </>
  );
}
