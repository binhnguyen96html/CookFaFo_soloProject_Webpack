import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-16 p-8 mx-auto">
        <Outlet />
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
