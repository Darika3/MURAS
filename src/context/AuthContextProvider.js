import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const API = "http://13.51.56.148/";

const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  async function handleRegister(formData) {
    try {
      await axios.post(`${API}auth/user/`, formData);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
      console.log(error);
    }
  }

  async function handleLogin(formData, username) {
    try {
      const res = await axios.post(`${API}auth/jwt/create/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setCurrentUser(username);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}auth/jwt/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );
      const username = localStorage.getItem("username");
      setCurrentUser(username);
    } catch (error) {
      console.log(error);
      handleLogout();
    }
  }
  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/login");
  }
  const values = {
    error,
    setError,
    handleRegister,
    checkAuth,
    handleLogin,
    currentUser,
    setCurrentUser,
    handleLogout,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
