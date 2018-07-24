import React from 'react';
import Brick from "./Brick.jsx";

class Scene extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      x:12,
      y:1,
      dropDown:true,
    };
  }

  drawScene(){
    this.context.scale(10, 10);
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.startGame();
    this.matrix = this.createMatrix();
    // console.table(this.matrix);
  }

  startGame() {
      this.brick = new Brick();
      // console.log(this.brick);
      const randomShape = this.brick.randomShape();
      this.brick.drawBrick(randomShape, this.state.x, this.state.y, this.context);
      this.intervalId = setInterval(this.moveBrick, 1000);
  }



  moveBrick = () => {
      const {x, y} = this.state;
      this.brick.clearBrick(this.brick.shape,x,y,this.context);
          this.setState({
              y: y + 1,
          }, () =>{
              if(this.collide()){
                  console.log(this.collide());
                  alert("collide");
                  this.merge();
                  this.brick.drawBrick(this.brick.shape, x, y, this.context);
                  this.setState({dropDown:false})
              }
          })
  };


  createMatrix(){
      let matrix = [];
      for (let i=0;i<this.canvas.height+1;i++){
           let row = [];
          for (let j=0;j<this.canvas.width+2;j++){
              if(j === 0 || j === this.canvas.width+1 || i===this.canvas.height ){
                  row[j] = 1;
              }else{
                  row[j] = 0;
              }
          }
          matrix.push(row);
      }
      return matrix;
  }
  collide() {
      // const {x, y} = this.state;
      const brick = this.brick.shape;
      console.log(brick);

      if (this.brick.drawBrick[x][y] + this.matrix >= 2) {
          return true
      }else {
          return false
      }
  }

    merge(){
        const brick = this.brick.shape;
        brick.forEach((row,y)=>{
            row.forEach((value,x)=>{
                if (value !== 0){
                    this.matrix[y+this.state.y][x+this.state.x] = value;
                }
            })
        })
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
