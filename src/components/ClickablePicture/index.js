import { useState } from 'react';

export function ClickablePicture(props) {
  const img1 = props.img;
  const img2 = props.imgClicked;

  const [image, setImage] = useState(img1);

  function changeImage() {
    image === img1 ? setImage(img2) : setImage(img1);
  }

  return (
    <>
      <img src={image} alt="imageInvert" onClick={changeImage} />
    </>
  );
}
