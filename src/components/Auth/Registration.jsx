import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

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
      handleRegister(formData);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      {error ? <h3>{error}</h3> : null}
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
        type="text"
        placeholder="password"
      />
      <button onClick={handleSave}>Register</button>
    </div>
  );
};

export default Registration;
