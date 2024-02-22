import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cooking_logo from "../assets/images/cooking_logo.png";
import { Link } from "react-router-dom";
import { logout } from "../slices/reducers/authSlice";
import { Dropdown, DropdownItem } from "flowbite-react";
import Badge from "./Badge";
import { clearCart } from "../slices/reducers/cartSlice";


const Navbar = () => {
  const userData = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(clearCart())
    dispatch(logout())
  }

  return (
    <>
      <nav className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-2xl flex flex-wrap  items-center justify-between px-8 py-2">
          {/* Logo  */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              // src={require("../assets/images/cooking_logo.png")}
              src={cooking_logo}
              className="h-16"
              alt="cooking Logo"
            />
            <span className="self-center text-2xl text-yellow-800 font-semibold whitespace-nowrap dark:text-white">
              COOK-FAFO
            </span>
          </Link>

          {/* Home Button  */}
          {/* <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-amber-700 rounded md:bg-transparent md:text-amber-700 md:p-0 md:dark:text-amber-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Login and Logout Button  */}
          {userData.userData ? (
            <div className="flex gap-6 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      
                <Badge />

              <img
                className="w-8 h-8 border rounded-full"
                src="https://th.bing.com/th/id/OIP.CtJTZ7aiSp4J1hpLtZD-1QAAAA?rs=1&pid=ImgDetMain"
                alt="Rounded avatar"
              />
              <Dropdown
                class="bg-yellow-500 text-white rounded-md"
                label={userData.userData.name}
                dismissOnClick={false}
              >
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem 
                onClick={logoutHandler}
                >
                  {" "}
                  Logout
                </DropdownItem>
              </Dropdown>
            </div>
          ) : (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to="/signin">
                <button
                  type="button"
                  className="text-white bg-yellow-500 hover:bg-yellow-700  font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Sign In
                </button>
              </Link>
            </div>

          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
