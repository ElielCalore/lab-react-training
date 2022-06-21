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
      <img src={props.img} alt="User" />
      <h3>{props.name}</h3>
      <div>{stars[ratingNumber]}</div>
      <div>{destructuringModel}</div>
      <div>{destructuringLicensePlate}</div>
    </>
  );
}
