import React from "react";
import "../Products/Products.css";
import foodMainPic from "../Products/assetsProducts/traditionalClothes.jpg";
import Navbar from "../Navbar/Navbar";

import Productcard from "./Crud/ProductCard";
import AddProduct from "./Crud/AddProduct";
const Clothes = () => {
  return (
    <div>
      <Navbar />
      <div id="clothContainerMain">
        <div id="clothMainLeft">
          <p id="clothMainLeftParag">
            Traditional clothing in Kyrgyzstan reflects the rich cultural
            heritage and nomadic traditions of the Kyrgyz people. One iconic
            garment is the "chapan," a long, loose-fitting coat made from
            vibrant, handwoven fabric adorned with intricate patterns and
            embroidery.
          </p>
        </div>
        <img id="clothMainImage" src={foodMainPic} alt="" />
        <div id="clothMainRight">
          <p id="clothMainRightParag">
            The traditional clothing of Kyrgyzstan not only showcases the
            artistic skills and craftsmanship of the Kyrgyz people but also
            serves as a visual representation of their cultural identity and
            heritage.
          </p>
          <button id="clothMainRightButton">Order Now</button>
        </div>
      </div>
      <div className="product__food_card-container">
        <div className="item_filter-btn">
          <button>Outerwear</button>
          <button>Headdress</button>
          <button>Shoes</button>
        </div>
        <Productcard />
      </div>
    </div>
  );
};

export default Clothes;
