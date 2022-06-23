//import { useState } from 'react';
import style from './style.module.css';
export function NumbersTable(props) {
  let htmlArr = [];
  for (let i = 0; i < props.limit; i++) {
    htmlArr.push(i + 1);
  }
  return (
    <div className={style.container}>
      {htmlArr.map((currentElement, i) => {
        return (
          <div className={i % 2 === 0 ? style.divcolor2 : style.divcolor1}>
            {currentElement}
          </div>
        );
      })}
    </div>
  );
}
