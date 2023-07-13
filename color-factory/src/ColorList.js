import React from "react";
import { Link } from "react-router-dom";

function ColorList({colors}) {
  const colorLinks = Object.keys(colors).map(c => (
    <li><Link to={`/colors/${c}`}>{c}</Link></li>
  ));

  return (
    <div className="ColorList">
      <div className="ColorList header">
        <h1>Welcome to the Color Factory</h1>
        <h2><Link to='/colors/new'>Add a Color</Link></h2>
      </div>
      <h3>Please Select a color</h3>
      <ul>
        {colorLinks}
      </ul>   
    </div>
  )
}

export default ColorList;