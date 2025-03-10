import "./styles/container.css";  // ✅ Importamos solo los estilos de los contenedores
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;


