// src/pages/Login.jsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./pages.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login efetuado!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input className="input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Entrar</button>
    </div>
  );
}

export default Login;
