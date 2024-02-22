import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import HomePage from "./pages/HomePage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './slices/store';
import LoginPage from './pages/LoginPage'
import SignupPage from "./pages/SignupPage.jsx";
import MenuDetailPage from "./pages/MenuDetailPage.jsx";




const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>} >
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route index={true} path='/' element={<HomePage />} />
        {/* <Route path='/products' element={<ProductsPage />} /> */}
        <Route path='/menu-detail/:id' element={<MenuDetailPage/>} />
      </Route>
    )
  );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
</Provider>
);
