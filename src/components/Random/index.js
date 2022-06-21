import style from './style.module.css';

export function Random(props) {
  return (
    <>
      <p className={style.random}>
        Random value bettween {props.min} and {props.max} {'=>'}
        {Math.floor(Math.random() * (props.max - props.min)) + props.min}
      </p>
    </>
  );
}
