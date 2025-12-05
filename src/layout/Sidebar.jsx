import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Sidebar() {
  const { user } = useAuth();

  console.log("USER NO SIDEBAR:", user);

  return (
    <nav className="sidebar-inner">

      {/* Sempre visíveis */}
      <NavLink to="/" end>Home</NavLink>

      {user ? (
        <>
          {/* Apenas quando logado */}
          <NavLink to="/products">Produtos</NavLink>
          <NavLink to="/cart">Inventário</NavLink>
          <NavLink to="/profile">Perfil</NavLink>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <>
          {/* Quando NÃO está logado */}
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Criar Conta</NavLink>
        </>
      )}
    </nav>
  );
}
