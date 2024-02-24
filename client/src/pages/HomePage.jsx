import React, { useEffect } from "react";
import CarouselCom from "../components/CarouselCom";
import Menu from "../components/Menu";
// import cookListData from "../data/cookListData";
import { useFetchMenuQuery } from "../slices/api/menuApiSlice";

const HomePage = () => {
  const { data, error, isLoading } = useFetchMenuQuery();

  return (
    <>
      <CarouselCom
        images={[
          "https://img06.weeecdn.com/collection/image/536/472/4ADFBD5BD65E4A80.png!c0x0.webp",
          "https://img06.weeecdn.com/collection/image/754/759/7D39368B78F9A8D1.png!c0x0.webp",
        ]}
      />
      <div className="mt-4 ">
     
          <h1>Popular Cuisine</h1>

          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              {data.map((menu) => (
                <Menu key={menu._id} menu={menu} />
              ))}
            </div>
          )}
       
      </div>
    </>
  );
};

export default HomePage;
