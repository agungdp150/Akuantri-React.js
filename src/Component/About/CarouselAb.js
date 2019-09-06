import React from 'react'
import {Gallery, GalleryImage} from "react-gesture-gallery";

// Gambar Import
import award1 from "../../Assets/img/award1.png"
import award2 from "../../Assets/img/award2.png"
import award3 from "../../Assets/img/award3.png"
import award4 from "../../Assets/img/award4.png"
import award5 from "../../Assets/img/award5.png"


const image = [
  award1, award2, award3, award4, award5,
];

const CarouselAb = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);  
      } else {
        setIndex(prev => prev + 1);
      }
    },900000000);
    return (()=> clearInterval(timer)); 
    }, [index]);

    return (
      <div>
        <h1 className="ab-h1">Penghargaan</h1>
        <Gallery
        style = {{
          overflow: "hidden",
          margin: "50px 0px 50px 160px",
          position: "relative",
          borderRadius: "30px",
          width: "80%"
        }}
        index = {index}
        onRequestChange={i => {
          setIndex(i);
        }} >
        {image.map(images => (
          <GalleryImage objectFit="contain" key={images} src={images}/>
        ))}
      </Gallery>
      </div>
    );
}


export default CarouselAb;