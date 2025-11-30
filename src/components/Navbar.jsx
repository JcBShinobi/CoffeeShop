// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav style={{ display: "flex", gap: 20, padding: 20 }}>
      <Link to="/">Home</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/cart">Carrinho</Link>

      {user ? (
        <>
          <Link to="/profile">Perfil</Link>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Criar Conta</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
