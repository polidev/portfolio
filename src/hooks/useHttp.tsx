import { useState, useEffect } from "react";

type Level =
  | "Principiante"
  | "Básico-Intermedio"
  | "Intermedio"
  | "Avanzado"
  | "Full Stack complejo";

// Define project data structure
interface ProjectData {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: Level;
  tecnologias: string[];
}

interface UseHttpResult {
  data: ProjectData[] | null;
  loading: boolean;
  error: string | null;
}

export function useHttp(url: string): UseHttpResult {
  const [data, setData] = useState<ProjectData[] | null>(null);
  const [loading, setLoading] = useState(true); // ✅ Boolean by inference
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const json: ProjectData[] = await response.json();

        setData(json);

        console.log(json);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);

          console.log(error);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
