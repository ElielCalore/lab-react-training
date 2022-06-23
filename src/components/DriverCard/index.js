import style from './style.module.css';
export function DriverCard(props) {
  let stars = {
    0: '☆☆☆☆☆',
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★',
  };

  let destructuringLicensePlate = ({} = props.car.licensePlate);
  let destructuringModel = ({} = props.car.model);

  let ratingNumber = Math.round(props.rating);
  return (
    <>
      <div className={style.driverCard}>
        <dvi>
          <img className={style.driverCardImage} src={props.img} alt="User" />
        </dvi>
        <div>
          <h3>{props.name}</h3>
          <div>{stars[ratingNumber]}</div>
          <div>{destructuringModel}</div>
          <div>{destructuringLicensePlate}</div>
        </div>
      </div>
    </>
  );
}
