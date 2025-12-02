import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./layout.css";
// import { useAuth } from "../context/useAuth";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="left-column">
        <div className="left-topbar">
          <Topbar />
        </div>

        <div className="left-sidebar">
          <Sidebar />
        </div>
      </div>

      <div className="main-content">
        {children}
      </div>
    </div>
  );
}
