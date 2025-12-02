import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [valueSelect, SetValueSelect] = useState("");

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
      </main>
    </>
  );
}

export default App;
