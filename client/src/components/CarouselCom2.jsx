import { Carousel } from "flowbite-react";
import React from "react";

const CarouselCom2 = ({images}) => {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-100">
        <Carousel>

          {images.map(img => (
                      <img
                      src={img}
                      alt="..."
                      className="object-fit"
                      key={img}
                    />
          ))}
          
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCom2;
