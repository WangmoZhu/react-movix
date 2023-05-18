import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading.......");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then(res => {
        setLoading(false);
        setData(res);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }, [url]);

  return { data, loading, error };
}

export default useFetch