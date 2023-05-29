import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";
import Products from "../components/Products/Products";
import Clothes from "../components/Products/Clothes";
import Souvenirs from "../components/Products/Souvenirs";

import Registration from "../components/Auth/Registration";
import Log from "../components/Auth/Log";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/main", element: <MainPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/products", element: <Products />, id: 3 },
    { link: "/clothes", element: <Clothes />, id: 4 },
    { link: "/souvenirs", element: <Souvenirs />, id: 5 },
    { link: "/register", element: <Registration />, id: 6 },
    { link: "/login", element: <Log />, id: 7 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map(
          (item) => (
            { link: "/", element: <MainPage />, id: 1 },
            (<Route path={item.link} element={item.element} key={item.id} />)
          )
        )}
      </Routes>
    </>
  );
};

export default MainRoutes;
