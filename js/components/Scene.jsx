import React from 'react';
import Brick from "./Brick.jsx";

class Scene extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      x:12,
      y:20
    };
  }

  drawScene(){
    this.context.scale(10, 10);
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.startGame();
  }

  startGame(){
    this.brick = new Brick();
    const randomShape = this.brick.randomShape();
    this.brick.drawBrick(randomShape, this.state.x, this.state.y, this.context);
    this.intervalId = setInterval(this.moveBrick, 1000);
  }

  moveBrick = () => {
    const {x, y} = this.state;
    this.setState({
      y: y-1
    }, () => {
      this.brick.drawBrick(this.brick.shape, x, y, this.context);
    });
  }

  componentDidMount(){
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext('2d');
    this.drawScene();
  };

  render() {
    return <div>
              <canvas ref="canvas" style={{width: "250", height: "400"}}></canvas>
           </div>
  }

}


export default Scene;
