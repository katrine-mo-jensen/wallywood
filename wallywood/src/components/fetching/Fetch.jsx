import { useEffect, useState } from "react";


export function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    let isFetching = true;

    const getData = () => {
      if (isFetching) {
        fetch(url, options)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => setError(err));
      }
    };
    getData();
    return () => (isFetching = false);
  }, [url]);

  return { data, error };
}
