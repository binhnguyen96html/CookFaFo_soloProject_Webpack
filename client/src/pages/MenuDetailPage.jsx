import React from "react";
import { useParams } from "react-router-dom";
import BreadcrumbCom from "../components/BreadcrumbCom";
import CarouselCom2 from "../components/CarouselCom2";
import { useGetMenuByIdQuery } from "../slices/api/menuApiSlice";
// import { useGetProductsBasedMenuKeyQuery } from "../slices/api/productApiSlice";
import Spinner from "../components/Spinner";
import AlertCom from "../components/AlertCom";
import ProductCard from "../components/ProductCard";
import { FaStore } from "react-icons/fa";
import { addToCart, addAllToCart } from "../slices/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const MenuDetailPage = () => {
  const { id: menu_id } = useParams();

  const dispatch = useDispatch();

  const {
    data: menu,
    error: menuError,
    isLoading: menuIsLoading,
  } = useGetMenuByIdQuery(menu_id);

  const addAllToCartHandler = () => {
    const productId_arr = [];
    menu.productsBasedMenuKey.forEach((pro) => {
      productId_arr.push(pro._id)
    });

    dispatch(addAllToCart(productId_arr))
    // console.log(productId_arr)

  };

  return (
    <>
      {menuIsLoading ? (
        <Spinner />
      ) : menuError ? (
        <AlertCom err={menuError} />
      ) : (
        <div>
          <BreadcrumbCom category={menu.menu.category} />

          <div className="grid grid-cols-3 gap-8 mt-4">
            <div className="col-span-2">
              <CarouselCom2 images={menu.menu.image} />

              {menu.menu.recipes.map((step, i) => (
                <div className="text-justify" key={i}>
                  <h5 className="text-xl text-gray-400 mt-4 uppercase">
                    Step: {i + 1}
                  </h5>
                  <p className="text-base text-gray-600 mt-2">{step}</p>
                </div>
              ))}
            </div>

            <div
              style={{ height: "180vh" }}
              className="col-span-1 flex flex-col items-center 
              h-180vh
              overflow-hidden 
              scrollbar-thin overflow-y-scroll
              rounded-xl bg-slate-100"
            >
              <div
                className="bg-gradient-to-r from-red-600 to-yellow-500 
                hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400 
                  text-white
                   flex items-center gap-2
                   py-3 px-5 my-6 rounded-3xl"
              >
                <FaStore className="text-2xl" />
                <button className="font-bold" onClick={addAllToCartHandler}>
                  Buy all with One Click!
                </button>
              </div>

              {menu.productsBasedMenuKey.map((pro) => (
                <div key={pro._id}>
                  <ProductCard
                    product={pro}
                    clickHandler={(id) => dispatch(addToCart(id))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDetailPage;
