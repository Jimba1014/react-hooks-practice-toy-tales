import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyGet, setToyGet] = useState("")

  useEffect(() => {
    fetch(" http://localhost:3001/toys")
    .then(r => r.json())
    .then(data=> setToyGet(data));
  }, [])
 

  console.log(setToyGet)
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToyGet={setToyGet} />
    </>
  );
}

export default App;
