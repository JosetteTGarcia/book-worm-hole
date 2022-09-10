
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false)
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
          onLogin(user);
        })
        navigate("/")
       } else {
          r.json().then(({ error }) => {
            setErrors(error.errors)
        })
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
        {isLoading ? "Loading..." : "Login"}
        </button>
        <p>
        {errors ?  
        errors.map((err) => (
          <p key={err}>{err}</p>
        )) : null}
        </p>
      </form>
    </div>
  );
}

export default Login;