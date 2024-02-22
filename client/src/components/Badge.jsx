import React from "react";
import { GrCart } from "react-icons/gr";
import {useSelector} from 'react-redux'

const Badge = () => {
    const cartNum = useSelector(state => state.cart).cartData.cartNum;
    
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center p-2 text-md font-medium text-center text-yellow-600 "
      >
        <GrCart className="w-5 h-5"/>
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-400 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {cartNum}
        </div>
      </button>
    </>
  );
};

export default Badge;
