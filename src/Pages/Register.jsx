// src/pages/Register.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Conta criada!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Registo</h1>
      <input className="input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Criar Conta</button>
    </div>
  );
}

export default Register;
