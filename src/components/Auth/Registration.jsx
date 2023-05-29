import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";
import "../Auth/auth.css";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleRegister, error, setError } = useAuth();

  function handleSave() {
    if (!email.trim() || !username.trim() || !password.trim()) {
      alert("Заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      handleRegister(formData, username);
    }
  }

  return (
    <div className="authBox">
      <div className="cont">
        <h2>Register</h2>
        {error ? <h3 style={{ color: "white" }}>{error}</h3> : null}
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button onClick={handleSave}>Register</button>
      </div>
    </div>
  );
};

export default Registration;
