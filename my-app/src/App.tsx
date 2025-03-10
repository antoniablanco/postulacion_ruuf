import "./styles/container.css"; // ✅ Importamos solo los estilos de los contenedores
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
