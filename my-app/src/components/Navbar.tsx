import { AuthContext } from "../context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"; // ✅ Importamos solo los estilos del navbar

const Navbar = () => {
  const { token } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setAvatar(null);
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        setAvatar(data.avatar);
      } catch (error) {
        setAvatar(null);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </div>

      {avatar && (
        <img
          src={avatar}
          alt="Avatar"
          className="navbar-avatar"
          onClick={() => navigate("/profile")} // ✅ Navega al perfil al hacer clic
        />
      )}
    </nav>
  );
};

export default Navbar;
