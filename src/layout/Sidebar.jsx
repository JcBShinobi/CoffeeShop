import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <nav className="sidebar-inner">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/products">Produtos</NavLink>
      <NavLink to="/cart">Carrinho</NavLink>

      {user ? (
        <>
          <NavLink to="/profile">Perfil</NavLink>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Criar Conta</NavLink>
        </>
      )}
    </nav>
  );
}
