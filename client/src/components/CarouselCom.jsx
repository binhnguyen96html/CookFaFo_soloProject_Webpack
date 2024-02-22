import { Carousel } from "flowbite-react";
import React from "react";

const CarouselCom = ({images}) => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>

          {images.map(img => (
                      <img
                      key={img}
                      src={img}
                      alt="..."
                    />
          ))}
          
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCom;
