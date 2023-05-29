import React, { useEffect } from "react";
import { useState } from "react";
import { useProduct } from "../../../context/ProductContextProvider";
import "./AddProduct.css";
import Navbar from "../../Navbar/Navbar";
const AddProduct = () => {
  const { createProduct } = useProduct();
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [distance, setDistance] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation_time, setPreparation_time] = useState("");

  // console.log(category);
  // console.log(title);

  function handleSave() {
    const newProduct = new FormData();
    newProduct.append("name", name);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("type", type);
    newProduct.append("image", image);
    newProduct.append("distance", distance);
    newProduct.append("ingredients", ingredients);
    newProduct.append("preparation_time", preparation_time);
    createProduct(newProduct, category);
  }

  return (
    <>
      <Navbar />
      <div className="addFood-container">
        <div id="inpCont">
          <h1 style={{ marginBottom: "20px" }}>Add Product</h1>
          <select
            style={{ color: "#A3B5BF", textShadow: "1px 1px black" }}
            defaultValue={""}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="souvenirs">Souvenirs</option>
            <option value="tours">Tours</option>
            <option value=""></option>
          </select>

          {category === "tours" && (
            <>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Title"
              />
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                onChange={(e) => setDistance(e.target.value)}
                type="text"
                placeholder="Distance"
              />
            </>
          )}
          {category === "food" && (
            <>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Title"
              />
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                onChange={(e) => setPreparation_time(e.target.value)}
                type="text"
                placeholder="Preparation Time"
              />
              <input
                onChange={(e) => setIngredients(e.target.value)}
                type="text"
                placeholder="Ingredients"
              />
            </>
          )}
          {category === "clothes" && (
            <>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Title"
              />
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </>
          )}
          {category === "souvenirs" && (
            <>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Title"
              />
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Description"
              />

              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </>
          )}

          <select
            style={{ color: "#A3B5BF" }}
            onChange={(e) => setType(e.target.value)}
          >
            {category === "All" && (
              <>
                <option>Outerwear</option>
                <option>Headdress</option>
                <option>Shoes</option>
                <option>Meal</option>
                <option>Drinks</option>
                <option>Snacks</option>
                <option>Jewellery</option>
                <option>Instruments</option>
                <option>other Souvenirs</option>
                <option>Trekking Tours</option>
                <option>Multidays Tours</option>
                <option>Horse Tours</option>
              </>
            )}
            {category === "clothes" && (
              <>
                <option>Outerwear</option>
                <option>Headdress</option>
                <option>Shoes</option>
              </>
            )}
            {category === "food" && (
              <>
                <option>Meal</option>
                <option>Drinks</option>
                <option>Snacks</option>
              </>
            )}
            {category === "souvenirs" && (
              <>
                <option>Jewellery</option>
                <option>Instruments</option>
                <option>other Souvenirs</option>
              </>
            )}
            {category === "tours" && (
              <>
                <option>Trekking Tours</option>
                <option>Multidays Tours</option>
                <option>Horse Tours</option>
              </>
            )}
          </select>

          <input
            id="fileInp"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            accept="image/*"
          />
          <button onClick={handleSave}>Add Product</button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
