import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ArrayFilm = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  const [valueSelect, SetValueSelect] = useState("");

  const [filmArray, SetFilmArray] = useState(ArrayFilm);

  useEffect(() => {
    if (valueSelect === "") {
      SetFilmArray(ArrayFilm);
    } else {
      const newArrayFilter = ArrayFilm.filter((element) => {
        return element.genre === valueSelect;
      });
      SetFilmArray(newArrayFilter);
    }
  }, [valueSelect]);

  return (
    <>
      <header className="p-4 bg-secondary">
        <h1 className="text-center">FILM</h1>
      </header>
      <main className="container mt-5">
        <select
          value={valueSelect}
          className="form-select fs-4"
          onChange={(event) => {
            SetValueSelect(event.target.value);
          }}
        >
          <option value="">seleziona</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
        {filmArray.map((film, index) => {
          return (
            <div className="card mt-5" key={index}>
              <div className="card-body">
                <h5 className="card-title fs-3">Genere: {film.genre}</h5>
                <h6 className="card-text fs-4">Film: {film.title}</h6>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
