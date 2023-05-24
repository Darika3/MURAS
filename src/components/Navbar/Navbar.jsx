import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import searchIcon from "../../assets/image/searchIcon.png";
import favoriteIcon from "../../assets/image/favoritesIcon.svg";
import shopIcon from "../../assets/image/shopIcon.svg";
import profileIcon from "../../assets/image/profileIcon.svg";
import burgerMenu from "../../assets/image/burgerMenu.png";
import "../Navbar/Navbar.css";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Our Culture", link: "/culture", id: 2 },
  { name: "Products", link: "/products", id: 3 },
  { name: "Tours", link: "/tours", id: 4 },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleMouseOpen = () => {
    setOpenModal(true);
  };
  const handleMouseClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="nav-container">
        <div className="item-logo">
          <img onClick={() => navigate("/main")} src={logo} />
        </div>
        <div className="item-menu">
          {pages.map((item) => (
            <h5 onClick={() => navigate(`${item.link}`)} key={item.id}>
              {item.name}
            </h5>
          ))}
        </div>
        <div className="item-search">
          <img src={searchIcon} alt="searchIcon" />
          <input type="text" />
        </div>
        <div className="item-icons">
          <img src={favoriteIcon} alt="favoriteIcon" />
          <img src={shopIcon} alt="favoriteIcon" />
          <img
            onMouseMove={handleMouseOpen}
            onClick={handleMouseClose}
            src={profileIcon}
            alt="favoriteIcon"
          />
        </div>
      </div>
      {openModal && (
        <div className="modal-profile">
          <p>Register</p>
          <p>Login</p>
          <p>Logout</p>
        </div>
      )}
      <img id="burger" src={burgerMenu} alt="burgerMenu" />
    </div>
  );
};

export default Navbar;
