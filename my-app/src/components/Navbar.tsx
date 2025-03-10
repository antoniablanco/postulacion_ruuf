import { Link } from "react-router-dom";
import "../styles/navbar.css"; // ✅ Importamos solo los estilos del navbar

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Sobre Nosotros</Link>
      <Link to="/login">Iniciar Sesión</Link>
    </nav>
  );
};

export default Navbar;
