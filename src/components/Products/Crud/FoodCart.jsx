import React from 'react'
import "../Crud/FoodCard.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CardImg from "../../../assets/image/CardIcon.png"
const FoodCart = () => {
  return (
    <>
    <div className="card-container">
        <div className="card">
        <div className="card-front">
            <img className='cardIcon' src={CardImg} alt="CardImg" />
            <div className="mainImg-card">
                <img style={{width: "100%", height: "160px", borderRadius: "10px"}} src= "https://dhoz.ru/wp-content/uploads/2019/12/e13ce7f9b48e199383364bd14bd6d9b6.jpg" alt="" />
            </div>
            <div className="text-card">
                <p className='title_text-card'>Boorsok</p>
                <p className='price_text-card'>123$</p>
            </div>
        </div>
        <div className="card-back">
            <p>Ingredients:</p>
            <p>Description:</p>
            <p>Preparation Time:</p>
            <p>Category:</p>
            <div className="card-btn">
            <button className='addCard-btn'><AddShoppingCartIcon/>Add to Cart</button>
            <br />
            <button className='updCard-btn'>Edit</button>
            <button className='updCard-btn'>Delete</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default FoodCart