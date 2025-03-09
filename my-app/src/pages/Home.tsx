import { useEffect, useState } from "react";
import axios from "axios";

// Definir la estructura de los datos que esperamos recibir
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Post>("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Bienvenido a mi App 🚀</h1>

      {loading && <p className="text-gray-600">Cargando datos...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {data && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-gray-700 mt-2">{data.body}</p>
        </div>
      )}
    </div>
  );
}

