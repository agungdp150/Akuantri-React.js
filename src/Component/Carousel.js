import React from 'react'
import {Gallery, GalleryImage} from "react-gesture-gallery";

const image = [
  "https://lelogama.go-jek.com/cache/b9/25/b92536b33952d8d716079b258e9d97f7.webp",
  "https://lelogama.go-jek.com/cache/4a/1b/4a1b3c0a3ba3881cdb494d6b8417564f.webp" ,
  "https://lelogama.go-jek.com/cache/00/8e/008eaf260ba493b6ab0116eec75bbf6a.webp",
  "https://lelogama.go-jek.com/cache/97/a7/97a7e67f992572296db24b02006523a1.webp"
];

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 4) {
        setIndex(0);  
      } else {
        setIndex(prev => prev + 1);
      }
    },5000);
    return (()=> clearInterval(timer)); 
    }, [index]);

    return (
      <Gallery
        style = {{
          overflow: "hidden",
          margin: "50px 100px 50px 100px",
          position: "relative",
          borderRadius: "30px",
          width: "80%"
        }}
        index = {index}
        onRequestChange={i => {
          setIndex(i);
        }} 
>
        {image.map(images => (
          <GalleryImage objectFit="contain" key={images} src={images}/>
        ))}
      </Gallery>
    );
}


export default Carousel;

