import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

const Log = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, error } = useAuth();

  function handleSave() {
    if (!username.trim() || !password.trim()) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      handleLogin(formData, username);
    }
  }
  return (
    <div>
      <h2>Login</h2>
      {error ? <h3>{error}</h3> : null}
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSave}>log in</button>
    </div>
  );
};

export default Log;
