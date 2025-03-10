import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

interface UserProfile {
  id: number;
  email: string;
  name: string;
  avatar: string;
}

const Profile: React.FC = () => {
  const { token, logout } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la información del perfil.");
        }

        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchProfile();
  }, [token, navigate]);

  if (error) return <p className="error">{error}</p>;
  if (!profile) return <p>Cargando perfil...</p>;

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <img src={profile.avatar} alt="Avatar" className="avatar" />
      <p>
        <strong>ID:</strong> {profile.id}
      </p>
      <p>
        <strong>Nombre:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;
