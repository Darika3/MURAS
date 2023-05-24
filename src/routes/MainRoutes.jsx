import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";
import Products from "../components/Products/Products";
import ProductFood from "../components/Products/ProductsFood/ProductFood";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/main", element: <MainPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/products", element: <Products />, id: 3 },
    { link: "/productfood", element: <ProductFood />, id: 4 },
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
