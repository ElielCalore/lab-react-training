import { useState } from 'react';
export function Dice(props) {
  const dice = [
    props.dice1,
    props.dice2,
    props.dice3,
    props.dice4,
    props.dice5,
    props.dice6,
  ];

  const [diceInitial, setDice] = useState(dice[0]);

  function generateNumberRandom() {
    let number = Math.floor(Math.random() * 6);
    setTimeout(() => {
      setDice(dice[number]);
    }, 1000);
    setDice(props.dice0);
  }

  return (
    <img src={diceInitial} alt="diceImage" onClick={generateNumberRandom} />
  );
}
