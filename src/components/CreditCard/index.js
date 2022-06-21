export function CreditCard(props) {
  let firstFourNumbers = props.number.slice(12, 16);
  let gettingABackgound = { backgroundColor: props.bgColor };
  let gettingAColor = { color: props.color };
  let numberAddedZero = '';
  if (props.expirationMonth < 10) {
    numberAddedZero = '0' + props.expirationMonth;
  }
  if (props.numberAddedZero >= 10) {
    numberAddedZero = props.expirationMonth;
  }

  if (props.type === 'Visa') {
    return (
      <>
        <div style={gettingABackgound}>
          <div style={gettingAColor}>
            <h2>{props.type}</h2>
            <h1>.... .... .... {firstFourNumbers}</h1>
            <h3>
              Expires {numberAddedZero} / {props.expirationYear} {props.bank}
            </h3>

            <h3>{props.owner}</h3>
          </div>
        </div>
      </>
    );
  }
  if (props.type === 'Master Card') {
    return (
      <>
        <div style={gettingABackgound}>
          <div style={gettingAColor}>
            <h2>{props.type}</h2>
            <h1>.... .... .... {firstFourNumbers}</h1>
            <h3>
              Expires {numberAddedZero} / {props.expirationYear} {props.bank}
            </h3>

            <h3>{props.owner}</h3>
          </div>
        </div>
      </>
    );
  }
}
