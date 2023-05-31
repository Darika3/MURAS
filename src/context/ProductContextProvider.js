import axios from "axios";
import React, { useReducer } from "react";
import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);
export const API = "http://13.51.56.148/";

const INIT_STATE = {
  foods: [],
  foodCategories: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_FOOD_CATEGORIES":
      return { ...state, foodCategories: action.payload };
    case "GET_FOODS":
      return { ...state, foods: action.payload.results };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `JWT ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    // console.log(config);
    return config;
  }

  async function createFoodCategory(newFoodCategory) {
    try {
      const res = await axios.post(
        `${API}food/category/`,
        newFoodCategory,
        getConfig()
      );
      console.log(res);
      navigate("/food");
    } catch (error) {
      console.log(error);
    }
  }
  async function getCategories() {
    try {
      const res = await axios(`${API}food/category/`, getConfig());
      // console.log(res);
      dispatch({ type: "GET_FOOD_CATEGORIES", payload: res.data.results });
    } catch (error) {
      console.log(error);
    }
  }
  async function createFood(newFood) {
    try {
      const res = await axios.post(`${API}food/`, newFood, getConfig());
      console.log(res);
      navigate("/food");
    } catch (error) {
      console.log(error);
    }
  }
  const values = {
    getCategories,
    foodCategories: state.foodCategories,
    createFood,
    // getFoods,
    foods: state.foods,
    // deleteProduct,
    // updateProduct,
    createFoodCategory,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
