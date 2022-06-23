import style from './style.module.css';

export function BoxColor(props) {
  const r = props.r;
  const g = props.g;
  const b = props.b;
  let divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
  return (
    <>
      <p style={divStyle} className={style.boxColor}>
        R({r}) G({g}) B ({b})
      </p>
    </>
  );
}
