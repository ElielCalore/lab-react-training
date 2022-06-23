import style from './style.module.css';
export function Rating(props) {
  let number = Math.round(props.children);

  if (number === 0) {
    return (
      <>
        <h1 className={style.size}>☆☆☆☆☆</h1>
      </>
    );
  }

  if (number === 1) {
    return (
      <>
        <h1 className={style.size}>★☆☆☆☆</h1>
      </>
    );
  }
  if (number === 2) {
    return (
      <>
        <h1 className={style.size}>★★☆☆☆</h1>
      </>
    );
  }
  if (number === 3) {
    return (
      <>
        <h1 className={style.size}>★★★☆☆</h1>
      </>
    );
  }
  if (number === 4) {
    return (
      <>
        <h1 className={style.size}>★★★★☆</h1>
      </>
    );
  }
  if (number === 5) {
    return (
      <>
        <h1 className={style.size}>★★★★★</h1>
      </>
    );
  }
}
