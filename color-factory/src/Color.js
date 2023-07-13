import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";

function Color({colors}) {
  const {color} = useParams();

  if (color) {
    const currentColor = Object.keys(colors).find(
      c => c === color
    );

   if (!currentColor) return <Redirect to='/colors'/>


   return (
    <div className="Color" style={{backgroundColor: colors[color]}}>
      <p>This is {color}</p>
      <p><Link to="/colors">Go Back</Link></p>
    </div>
   )
  }
}

export default Color;