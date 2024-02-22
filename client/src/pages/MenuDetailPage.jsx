import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/BreadcrumbCom";
import CarouselCom2 from "../components/CarouselCom2";
import { useGetMenuByIdQuery } from "../slices/api/menuApiSlice";
import { useGetProductsBasedMenuKeyQuery } from "../slices/api/productApiSlice";
import Spinner from "../components/Spinner";
import AlertCom from "../components/AlertCom";
import ProductCard from "../components/ProductCard";
import { FaStore } from "react-icons/fa";
import { addToCart } from "../slices/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuDetailPage = () => {
  // const [menuKeyInput, setMenuKeyInput] = useState("");
  const { id: menu_id } = useParams();

  const dispatch = useDispatch();

  const {
    data: menu,
    error: menuError,
    isLoading: menuIsLoading,
  } = useGetMenuByIdQuery(menu_id);

  // useEffect(() => {
  //   if (menu) setMenuKeyInput(menu.menuKey);
  //   console.log(menu)
  // }, [menu]);

  // const {
  //   data: products,
  //   error: productsError,
  //   isLoading: productsIsLoading,
  // } = useGetProductsBasedMenuKeyQuery(menuKeyInput);

  // console.log(products);

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
  };

  // const cartData = useSelector((state) => state.cart)

  return (
    <>
      {menuIsLoading ? (
        <Spinner />
      ) : menuError ? (
        <AlertCom err={menuError} />
      ) : (
        <div>
          <Breadcrumb category={menu.category} />

          <div className="grid grid-cols-3 gap-8 mt-4">
            <div className="col-span-2">
              <CarouselCom2 images={menu.menu.image} />

              {menu.menu.recipes.map((step, i) => (
                <div className="text-justify" key={i}>
                  <h5 className="text-xl text-gray-400 mt-4 uppercase">Step: {i + 1}</h5>
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
                className="bg-gradient-to-r from-red-500 to-yellow-400 
                  text-white
                   flex items-center gap-2
                   py-3 px-5 my-6 rounded-3xl"
              >
                <FaStore className="text-2xl" />
                <h6 className="">You can find all ingredients here</h6>
              </div>

              {menu.productsBasedMenuKey.map((pro) => (
                <div key={pro._id}>
                  <ProductCard product={pro} clickHandler={addToCartHandler} />
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
