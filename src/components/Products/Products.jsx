import React from "react";
import "../Products/Products.css";
import instagramIcon from "../Products/assetsProducts/instagramIcon.svg";
import telegramIcon from "../Products/assetsProducts/TelegramIcon.svg";
import facebook from "../Products/assetsProducts/FacebookIcon.svg";
import phoneIcon from "../Products/assetsProducts/PhoneIcon.svg";
import Navbar from "../Navbar/Navbar";
const Products = () => {
  return (
    <div className="container productsCategories">
      <Navbar />
      <div className="productsCategory foodCategory">
        <div id="sideBarIcons">
          <img className="socialIcons" src={instagramIcon} alt="" />
          <img className="socialIcons" src={telegramIcon} alt="" />
          <img className="socialIcons" src={facebook} alt="" />
          <img className="socialIcons" src={phoneIcon} alt="" />
        </div>
        <button className="categoryBtn">Traditional Food</button>
      </div>
      <div className="productsCategory clothesCategory">
        <button className="categoryBtn">Traditional Clothes</button>
      </div>
      <div className="productsCategory souvenirsCategory">
        <button className="categoryBtn">Traditional Souvenirs</button>
      </div>
    </div>
  );
};

export default Products;
