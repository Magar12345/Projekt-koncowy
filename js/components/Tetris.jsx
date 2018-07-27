import React from 'react';
import Scene from "./Scene.jsx"

class Tetris extends React.Component{
  render(){
    return <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <h1>Wynik:0</h1>
            <Scene/>
           </div>;
  }
}
export default Tetris;