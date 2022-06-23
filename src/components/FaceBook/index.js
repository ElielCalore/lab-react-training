import IdCardJson from '../../data/berlin.json';
import { useState } from 'react';
import style from './style.module.css';

export function FaceBook() {
  const [counter, setCounter] = useState(IdCardJson);

  return (
    <div>
      {IdCardJson.map((currentElement) => (
        <div className={style.facebook}>
          <img
            className={style.img}
            src={currentElement.img}
            alt="perfil"
          ></img>
          <div className={style.info}>
            <p>First Name: {currentElement.firstName}</p>
            <p>Last Name: {currentElement.lastName}</p>
            <p>Country: {currentElement.country}</p>
            <p>Type: {currentElement.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
