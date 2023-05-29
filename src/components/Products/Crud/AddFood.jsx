import React from 'react'
import { useState } from 'react'
import "./AddFood.css"

const AddFood = () => {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] =  useState("");
    const [preparation_time, setPreparation_time] = useState("");
    const [price, setPrice] = useState("");
    const[category,setCategory] = useState("");
    const [image, setImage] = useState(null);

  return (
    <>
    <div className='addFood-container'>
        <h1 style={{marginBottom:"20px"}}>AddFood</h1>
        <input
        onChange={(e)=> setName(e.target.value)}
        type="text"
        placeholder = 'FoodName' />
        <input 
        onChange={(e)=> setDescription(e.target.value)}
        type="text" 
        placeholder='Product Description'/>
        <input 
        onChange={(e)=> setIngredients(e.target.value)}
        type="text"
         placeholder='Product Ingredients'/>
        <input type="number"
        placeholder='Price'
        onChange={(e)=> setPrice(e.target.value)}
        />
        <input
        onChange={(e)=> setPreparation_time(e.target.value)}
        type="text"
        placeholder='Preparation Time'/>
        
        <select>
            <option>Meal</option>
            <option>Drinks</option>
            <option>Snacks</option>
        </select>
        <input 
        onChange={(e)=> setImage(e.target.files[0])}
        type ="file" 
        accept='image/*'/>
        <button>+Add Product</button>
    </div>
    </>
  )
}

export default AddFood