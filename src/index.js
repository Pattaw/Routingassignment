import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import About from "./Componants/About/About";
import Contact from "./Componants/Contact/Contact";
import Layout from "./Componants/Layout/Layout";
import Portfolio from "./Componants/Portfolio/Portfolio";
import Products from "./Componants/Products/Products";
import Home from "./Componants/Home/Home";
import Header from "./Componants/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Abdo() {
//   let [countProduct, setCountProduct] = useState(0);

// }

const routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "About", element: <About /> },
    ],
  },
]);
root.render(<RouterProvider router={routers}></RouterProvider>);
