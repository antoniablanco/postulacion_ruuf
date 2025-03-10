import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const endpoint = isLogin ? "login" : "signup";
    const url = `https://api.escuelajs.co/api/v1/auth/${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      login(data.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="auth-form">
      <h2>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Ingresar" : "Registrarse"}</button>
      </form>
    </div>
  );
};

export default AuthForm;

/*
Endpoints disponibles:

Login: POST https://api.escuelajs.co/api/v1/auth/login
Body:
{
  "email": "john@mail.com",
  "password": "changeme"
}
Respuesta esperada:
{
  "access_token": "your-jwt-token"
}
*/
