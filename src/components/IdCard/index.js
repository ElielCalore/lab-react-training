import style from './style.module.css';

export function IdCard(props) {
  return (
    <>
      <div className={style.idCard}>
        <div>
          <img className={style.img} src={props.picture} alt="User" />
        </div>
        <div>
          <p>Firts Name: {props.lastName}</p>
          <p>Last Name: {props.firstName}</p>
          <p>Gender: {props.gender}</p>
          <p>Heigth: {props.height}</p>
          <p>Birth: {props.birth} </p>
        </div>
      </div>
    </>
  );
}
/*

   <img src={ironhackLogo} alt="Logo" />



import style from "./style.module.css";

function NavBar() {
  return (
    <div className={style.background}>
      <img src={ironhackLogo} alt="Logo" />;
      <img src={menuTop} alt="menuTop" />
    </div>
  );
}
 */
