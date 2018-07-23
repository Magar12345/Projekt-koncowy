import React from 'react';
import Scene from "./Scene.jsx"
import Update from "./Update.jsx"


class Tetris extends React.Component{

    // drow(){
    //     const scene = new Scene();
    //     const draw = scene.draw();
    //     const update = new Update();
    //     const update2 = update.update (0,draw)
    // }
    // componentDidMount(){
    //     this.drow();
    // }

    render(){
        return <Scene/>;
    }
}
export default Tetris;