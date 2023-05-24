import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";

const MainRoutes = () => {
  return (
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

export default MainRoutes;
