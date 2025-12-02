import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const arrayFilm = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
  /* Variabili di stato */
  const [valueSelect, SetValueSelect] = useState("");
  const [filmArray, SetFilmArray] = useState(arrayFilm);
  const [inputTitolo, SetInputTitolo] = useState("");
  const [inputGenere, SetInputGenere] = useState("");
  const [allFilms, setAllFilms] = useState(arrayFilm);
  /* use effect per filtrare (genere) */
  useEffect(() => {
    if (valueSelect === "") {
      SetFilmArray(allFilms);
    } else {
      const newArrayFilter = allFilms.filter((element) => {
        return element.genre === valueSelect;
      });
      SetFilmArray(newArrayFilter);
    }
  }, [valueSelect, allFilms]);

  function aggiungiFilm(e) {
    e.preventDefault();
    if (inputTitolo === "" && inputGenere === "") {
      return;
    }
    setAllFilms((prevArray) => [
      ...prevArray,
      {
        title: inputTitolo,
        genre: inputGenere,
      },
    ]);
    SetInputTitolo("");
    SetInputGenere("");
  }

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

        <form className="mt-5" onSubmit={aggiungiFilm}>
          <label htmlFor="titolo" className="form-label fs-3">
            titolo:
          </label>
          <input
            type="text"
            className="form-control"
            id="titolo"
            value={inputTitolo}
            onChange={(e) => {
              SetInputTitolo(e.target.value);
            }}
          ></input>
          <label htmlFor="Genere" className="form-label fs-3">
            Genere:
          </label>
          <input
            type="text"
            className="form-control"
            id="Genere"
            value={inputGenere}
            onChange={(e) => {
              SetInputGenere(e.target.value);
            }}
          ></input>
          <button type="submit" className="btn btn-primary mt-5 ">
            Aggiungi
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
