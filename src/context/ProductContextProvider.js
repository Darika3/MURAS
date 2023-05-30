import axios from "axios";
import React, { useReducer } from "react";
import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);
export const API = "http://13.51.56.148/";

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
      };
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
    console.log(config);
    return config;
  }

  async function createProduct(newProduct, category) {
    try {
      if (category === "food") {
        const res = await axios.post(`${API}food/`, newProduct, getConfig());
        console.log(res);
        navigate("/food");
      } else if (category === "clothes") {
        const res = await axios.post(`${API}clothes/`, newProduct, getConfig());
        console.log(res);
        navigate("/clothes");
      } else if (category === "souvenirs") {
        const res = await axios.post(
          `${API}souvenirs/`,
          newProduct,
          getConfig()
        );
        console.log(res);
        navigate("/souvenirs");
      } else {
        const res = await axios.post(`${API}tours/`, newProduct, getConfig());
        console.log(res);
        navigate("/tours");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts(category) {
    try {
      if (category === "food") {
        const res = await axios(`${API}food/`, getConfig());
        console.log(res);
        navigate("/food");
        dispatch({ type: "GET_PRODUCTS", payload: res.data });
      } else if (category === "clothes") {
        const res = await axios(`${API}clothes/`, getConfig());
        console.log(res);
        navigate("/clothes");
        dispatch({ type: "GET_PRODUCTS", payload: res.data });
      } else if (category === "souvenirs") {
        const res = await axios(`${API}souvenirs/`, getConfig());
        console.log(res);
        navigate("/souvenirs");
        dispatch({ type: "GET_PRODUCTS", payload: res.data });
      } else {
        const res = await axios(`${API}tours/`, getConfig());
        console.log(res);
        navigate("/tours");
        dispatch({ type: "GET_PRODUCTS", payload: res.data });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id, category) {
    try {
      if (category === "food") {
        await axios.delete(`${API}food/${id}/`, getConfig());
      } else if (category === "clothes") {
        await axios.delete(`${API}clothes/${id}/`, getConfig());
      } else if (category === "souvenirs") {
        await axios.delete(`${API}souvenirs/${id}/`, getConfig());
      } else {
        await axios.delete(`${API}tours/${id}/`, getConfig());
      }
      getProducts(category);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProduct(id, editedProduct, category) {
    try {
      if (category === "food") {
        await axios.patch(`${API}food/${id}/`, editedProduct, getConfig());
        navigate("/food");
      } else if (category === "clothes") {
        await axios.patch(`${API}clothes/${id}/`, editedProduct, getConfig());
        navigate("/clothes");
      } else if (category === "souvenirs") {
        await axios.patch(`${API}souvenirs/${id}/`, editedProduct, getConfig());
        navigate("/souvenirs");
      } else {
        await axios.patch(`${API}tours/${id}/`, editedProduct, getConfig());
        navigate("/tours");
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(state.products);
  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    updateProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
