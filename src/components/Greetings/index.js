import style from './style.module.css';

export function Greetings(props) {
  if (props.lang === 'de') {
    return (
      <>
        <div className={style.greetings}>
          <p>Hallo {props.children}</p>
        </div>
      </>
    );
  }
  if (props.lang === 'en') {
    return (
      <>
        <div className={style.greetings}>
          <p>Hello {props.children}</p>
        </div>
      </>
    );
  }
  if (props.lang === 'es') {
    return (
      <>
        <div className={style.greetings}>
          <p>Hola {props.children}</p>
        </div>
      </>
    );
  }
  if (props.lang === 'fr') {
    return (
      <>
        <div className={style.greetings}>
          <p>Bonjour {props.children}</p>
        </div>
      </>
    );
  }
}
