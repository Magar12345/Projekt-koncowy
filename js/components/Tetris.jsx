import React from 'react';
import Scene from "./Scene.jsx"

class Tetris extends React.Component{
  render(){
    return<div className="gameSite">
        <header className="header">
            <p>OLD GAME/NEW GAME</p>
        </header>
        <section className="mainContent">
            <div className="tetris"
                 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h1>Wynik:0</h1>
                <Scene/>
            </div>
        </section>


    </div>
  }
}
export default Tetris;