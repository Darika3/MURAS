import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);
export const API = "http://13.51.56.148/";

const INIT_STATE = {
  products: [],
  pages: 1,
  categories: [],
  oneProduct: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (key) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    default:
      state;
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  console.log(state);
  function getConfig() {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `JWT ${tokens.access}`;
    const config = {
      headers: { Authorization },
    };
    return config;
  }
  const values = {};
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
