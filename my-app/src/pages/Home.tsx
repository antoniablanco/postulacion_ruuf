import UserList from "../components/UserList";
import { Container } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container className="container p-4 bg-light rounded shadow">
      <h1 className="text-primary text-center mb-4">Lista de Usuarios</h1>
      <UserList />
    </Container>
  );
};

export default Home;
