import React, { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";

import ListGroup from "./ListGroup";
interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <ListGroup
      items={users.map((user) => `${user.id} - ${user.name} (${user.email})`)}
      heading="Lista de Usuarios"
    />
  );
};

export default UserList;
