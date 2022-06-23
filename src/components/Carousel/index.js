import { useState } from 'react';

export function Carousel(props) {
  const [counter, setCounter] = useState(0);

  function right() {
    counter < props.images.length - 1 ? setCounter(counter + 1) : setCounter(0);
  }
  function lefth() {
    counter > 0 ? setCounter(counter - 1) : setCounter(3);
  }

  return (
    <>
      <img src={props.images[counter]} alt="imagemLeftRight" />
      <button onClick={lefth}>LEFTH</button>
      <button onClick={right}>RIGTH</button>
    </>
  );
}
