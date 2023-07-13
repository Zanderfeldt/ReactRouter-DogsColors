import React from "react";
import './DogDetails.css';
import { useParams, Link, Redirect } from 'react-router-dom';

function DogDetails({dogs}) {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      d => d.name.toLowerCase() === name.toLowerCase()
    );

  if (!currentDog) return <Redirect to='/dogs'/>

    return (
      <div className="DogDetails">
        <img src={currentDog.src} alt={currentDog.name}/>
        <h2>{currentDog.name}</h2>
        <h3>{currentDog.age} years old</h3>
        <ul>
          {currentDog.facts.map((fact, i) => 
            (<li key={i}>{fact}</li>)
          )}
        </ul>
        <Link to='/dogs'>Go Back</Link>
      </div>
    )
  }
} 

export default DogDetails;