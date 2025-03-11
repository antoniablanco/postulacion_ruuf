import { Container } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Container className="container p-4 bg-light rounded shadow w-50 position-absolute top-50 start-50 translate-middle">
      <h1 className="text-primary text-center mb-4">Hello World!</h1>
    </Container>
  );
};

export default Home;
