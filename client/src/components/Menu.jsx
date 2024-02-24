import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";


const Menu = ({ menu }) => {
  // const isSmallScreen = window.innerWidth < 768; 

  return (
    <>
      <div className="col-span-1 mx-auto">
        <Link to={`/menu/${menu._id}`}>
          <Card
            className="max-w-sm xl:h-72 overflow-hidden  "
            imgSrc={menu.image[0]}
            // horizontal
            horizontal={!(window.innerWidth < 830)}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-600">
              {menu.name}
            </h5>
            <p className="font-normal text-gray-700 mb-4 
            text-ellipsis overflow-hidden leading-relaxed">
              {menu.description}
            </p>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Menu;
