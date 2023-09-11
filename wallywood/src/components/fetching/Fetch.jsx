import { useEffect, useState } from "react";

export function Fetching() {
  const url = "http://localhost:4000/poster/list";
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    function getPoster() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setPoster(data))
        .catch((err) => console.error(err));
      console.log("Poster", poster);
    }
    getPoster();
  }, []);
}
 