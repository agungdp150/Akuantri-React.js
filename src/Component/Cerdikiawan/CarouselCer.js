import React from 'react'
import {Gallery, GalleryImage} from "react-gesture-gallery";




const image = [
  "https://lelogama.go-jek.com/cache/20/ca/20ca3037b107c75cb219a4044b96102c.webp",
  "https://lelogama.go-jek.com/cache/4e/be/4ebea5ef9f1cdeecdc6b85b441a40c45.webp",
  "https://lelogama.go-jek.com/cache/ec/c6/ecc63d434ca9342ba9026b437ebc16d4.webp",
  "https://lelogama.go-jek.com/cache/7f/24/7f24d211d10dec80a5c4a07b25f43c3f.webp",
  "https://lelogama.go-jek.com/cache/c1/83/c183d97c506004e50690569a2008d691.webp",
  "https://lelogama.go-jek.com/cache/df/d6/dfd692afa748ce2b8494ec5b139ba3f0.webp"
];

const CarouselCer = () => {
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


export default CarouselCer;