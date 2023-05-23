import React from "react";
import "../Products/Products.css";
import instagramIcon from "../Products/assetsProducts/instagramIcon.svg";
import telegramIcon from "../Products/assetsProducts/TelegramIcon.svg";
import facebook from "../Products/assetsProducts/FacebookIcon.svg";
import phoneIcon from "../Products/assetsProducts/PhoneIcon.svg";
const Products = () => {
  return (
    <div className="container productsCategories">
      <div className="productsCategory foodCategory">
        <div id="sideBarIcons">
          <img src={instagramIcon} alt="" />
          <img src={telegramIcon} alt="" />
          <img src={facebook} alt="" />
          <img src={phoneIcon} alt="" />
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
