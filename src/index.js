import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
