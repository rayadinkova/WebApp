import { useEffect, useState } from "react";

export default function FetchAPI() {
  const [movies, setMovies] = useState([]);
  useEffect =
    (() => {
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=de6cc8c`)
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((err) => console.log(err));
    },
    []);

  return (
    <div>
      <div>
        <ul>
          {movies.map((list, index) => (
            <li key={index}>
              {list.id} | {list.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
