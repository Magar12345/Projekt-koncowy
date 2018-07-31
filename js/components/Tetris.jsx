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
        <section className="news">
            <div className="newsOne">
                <div className="newsImg1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus dignissim
                        mauris. Vestibulum blandit lectus ac porta mattis. Sed eu maximus ipsum. Integer
                        turpis, faucibus sit amet leo quis, hendrerit finibus augue.
                    </p>
                </div>
            </div>

            <div className="newsTwo">
                <div className="newsImg2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus dignissim
                        mauris. Vestibulum blandit lectus ac porta mattis. Sed eu maximus ipsum. Integer
                        turpis, faucibus sit amet leo quis, hendrerit finibus augue.
                    </p>
                </div>/

            </div>

            <div className="newsThree">
                <div className="newsImg3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus dignissim
                        mauris. Vestibulum blandit lectus ac porta mattis. Sed eu maximus ipsum. Integer
                        turpis, faucibus sit amet leo quis, hendrerit finibus augue.
                    </p>
                </div>
            </div>

        </section>


    </div>
  }
}
export default Tetris;