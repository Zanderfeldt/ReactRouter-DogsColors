import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from './Color';


function Routes() {
  const [colors, setColors] = useState({red:'#FF0000', green:'#00FF00', blue: '#0000FF'});

  const addColor = color => {
    setColors(colors => ({
      ...color,
      ...colors
    }));
  }


  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/colors'>
            <ColorList colors={colors}/>
          </Route>
          <Route exact path='/colors/new'>
            <ColorForm addColor={addColor}/>
          </Route>
          <Route path='/colors/:color'>
            <Color colors={colors}/>
          </Route>
          <Redirect to='/colors'/>
        </Switch>
      </BrowserRouter>
  )
}

export default Routes;