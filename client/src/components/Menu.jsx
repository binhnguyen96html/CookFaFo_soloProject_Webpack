import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";


const Menu = ({ menu }) => {
  const isSmallScreen = window.innerWidth < 768; 

  return (
    <>
      <div className="col-span-1 mx-auto">
        <Link to={`/menu-detail/${menu._id}`}>
          <Card
            className="max-w-sm min-h-80"
            imgSrc={menu.image[0]}
            // horizontal
            horizontal={!isSmallScreen}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
              {menu.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {menu.description}
            </p>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Menu;
