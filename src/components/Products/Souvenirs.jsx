import React from "react";
import "../Products/Products.css";
import souvenirsimg from "../Products/assetsProducts/traditionalSouvenirs.jpg";
import Navbar from "../Navbar/Navbar";

const Souvenirs = () => {
  return (
    <>
      <Navbar />
      <div id="souvenirsMainContainer">
        <div id="souvenirsMainLeft">
          <h2 id="souvenirsMainLeftHeader">
            Capturing the Spirit of Kyrgyzstan: Souvenirs That Tell a Tale!
          </h2>
          <p id="souvenirsMainLeftParag">
            Discover the essence of Kyrgyzstan through our captivating
            souvenirs. Each item tells a unique tale, weaving together the rich
            heritage, vibrant traditions, and breathtaking landscapes of this
            enchanting country. From intricately handcrafted textiles to
            traditional jewelry and soul-stirring musical instruments, our
            souvenirs encapsulate the spirit of Kyrgyzstan, allowing you to
            carry a piece of its beauty and culture wherever you go.
          </p>
          <button id="souvenirsMainLeftButton">Order Now</button>
        </div>
        <img id="souvenirsImage" src={souvenirsimg} alt="" />
      </div>
    </>
  );
};

export default Souvenirs;
