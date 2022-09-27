import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer(toy) {
  return (
    <div id="toy-collection">
      <ToyCard 
        name={toy.name}
        likes={toy.likes}
        image={toy.image}/>
    </div>
  );
}

export default ToyContainer;
