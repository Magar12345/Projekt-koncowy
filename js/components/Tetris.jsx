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
        <section className="gameDescription">
            <img src="/pic/tetris-670x335.jpg"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nulla ultricies odio porta fermentum eu a mauris. Fusce non hendrerit urna. Donec fermentum ac nibh id vestibulum. Integer auctor condimentum mollis. Curabitur cursus vel elit eget ullamcorper. Pellentesque lectus nunc, ullamcorper non fringilla eu, ornare in mauris. Mauris consequat porta nisi, sed ornare orci viverra sed. Suspendisse a dolor erat. Aliquam a tortor ultricies, luctus orci faucibus, bibendum tellus. Integer maximus vestibulum rutrum. Praesent nec sem quis nunc porttitor aliquet pellentesque in enim. Sed nisi quam, ultricies vel facilisis vel, ornare sed augue. Integer cursus eget tellus ultrices accumsan. Suspendisse eleifend nisi ac turpis suscipit, nec scelerisque dui condimentum.
            </p>
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