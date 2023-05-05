import React, { ChangeEvent, FormEvent, useState } from 'react'

import * as C from "./styles";
import { useNavigate } from 'react-router-dom';

export const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === "Vinicius Rubia" && password === "viniciusrubia") {
      navigate("/");
    } else {
      alert("Please verify your username and password");
    }
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={handleChangeUsername}
        />
        <input 
          type="password"
          placeholder='Password'
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit">login</button>
      </C.Form>
    </C.Container>
  )
}
