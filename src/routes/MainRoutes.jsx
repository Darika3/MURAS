import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";
import Products from "../components/Products/Products";
import Clothes from "../components/Products/Clothes";
import Souvenirs from "../components/Products/Souvenirs";
import ProductFood from "../components/Products/ProductsFood/ProductFood";
import Culture from "../components/Culture/Culture";
import Tours from "../components/Tours/Tours";
import Cart from "../components/Cart/Cart";


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/main", element: <MainPage />, id: 1 },
    { link: "/", element: <HomePage />, id: 2 },
    { link: "/products", element: <Products />, id: 3 },
    { link: "/clothes", element: <Clothes />, id: 4 },
    { link: "/souvenirs", element: <Souvenirs />, id: 5 },
    { link: "/food", element: <ProductFood/>, id: 6 },
    { link: "/culture", element: <Culture/>, id: 7 },
    { link: "/tours", element: <Tours/>, id: 8 },
    { link: "/cart", element: <Cart/>, id: 9 },
  
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
