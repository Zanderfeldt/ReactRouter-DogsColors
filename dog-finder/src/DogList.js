import React from "react";
import './DogList.css';
import { Link } from "react-router-dom";

function DogList({dogs}) {
  return (
    <div className="DogList">
      <h1>DOGS!</h1>
      <div className="DogList container">
        {dogs.map(dog => (
          <div key={dog.name}>
            <img src={dog.src} alt={dog.name}/>
            <h3>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DogList;