import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [arrayFilm, SetArrayFilm] = useState([
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ]);

  return (
    <>
      <header className="p-4 bg-secondary">
        <h1 className="text-center">FILM</h1>
      </header>
      <main className="container mt-5">
        <select className="form-select fs-4">
          <option selected>seleziona</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </main>
    </>
  );
}

export default App;
