import { Link } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="bg-blue-500 p-4 text-white flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
      </nav>

      {/* Contenido de la página */}
      <AppRoutes />
    </div>
  );
}

export default App;


