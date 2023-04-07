import { useState, useEffect } from "react";

export function useFetch<Type>(url: string) {
  const [data, setData] = useState<Type>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [controller, setController] = useState<AbortController>();

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error: Error) => {
        if (error.name === "AbortError") {
          setError({ name: "AbortError", message: "Cancelled Request" });
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  const abort = () => {
    if (controller) {
      controller.abort();
      setError({ name: "AbortError", message: "Cancelled Request" });
    }
  };

  return { data, loading, error, abort };
}
