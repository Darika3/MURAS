<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import MainPage from '../components/MainPage/MainPage'
import Products from '../components/Products/Products'
>>>>>>> f486af559db0d8b5305537f065692e3ed1f300ec

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/main", element: <MainPage/>, id: 1 },
    { link: "/", element: <HomePage/>, id: 2 },
    { link: "/products", element: <Products/>, id: 3 },
    


  ]
  return (
<<<<<<< HEAD
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='/culture' element = {}/>
            <Route path='/products' element = {}/>
            <Route path='/tours' element = {}/> */}
      </Routes>
    </div>
  );
};
=======
    <>
           <Routes>
        {PUBLIC_ROUTES.map((item) => (
    { link: "/", element: <MainPage />, id: 1 },
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  )
}
>>>>>>> f486af559db0d8b5305537f065692e3ed1f300ec

export default MainRoutes;
