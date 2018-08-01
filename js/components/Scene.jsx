import React from 'react';
import Brick from "./Brick.jsx";

class Scene extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      x:100,
      y:0,
      dropDown:true,
        bricks:[],
        currentBrick: -1
    };
  }

  checkCollide(){
    console.log(this.state.x, this.state.y);
      if(this.collide() === true){
          console.log("non-collide");
      }else{
          console.log("collide");
      }
  }

  drawScene(){
    // this.context.scale(1, 1);
    this.context.fillStyle = "#f1f1f1";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
     this.matrix = this.createMatrix();
     this.startGame();
  }
  canMove(x, y){
      console.log(x);
      if(x < 0 || x-5 >= 220){
          return false;
      }
      if(y+30 > 400){
          clearInterval(this.intervalId);
          return false;
      }
      if(this.matrixCollide()){
          clearInterval(this.intervalId);
          return false;
      }
      return true;
  }
  matrixCollide() {
      const {x, y,bricks,currentBrick} = this.state;
      const matrix = this.matrix;
      const brickShape = bricks[currentBrick].shape;

      for ( let i = x; i < x+3 ; i++){
          for( let j = y; j < y+3; j++){
              for ( let k = i+3; k < 3; k++){
                  for (let l = j+3; l < 3; l++){

                      if (matrix[i][j] + brickShape[k][l] === 2){

                          alert("kolizja klocka");
                          return true;
                      }
                  }
              }
          }
      }
  }
    startGame() {
      document.addEventListener('keydown', event => {
          if (this.canMove(this.state.x - 10, this.state.y) && event.keyCode === 37) {
              this.setState({
                  x: this.state.x - 10,
              }, () => {
                  this.checkCollide();
              })
          } else if (this.canMove(this.state.x + 10, this.state.y) && event.keyCode === 39) {
              this.setState({
                  x: this.state.x + 10,
              }, () => {
                  this.checkCollide();
              })
          } else if (this.canMove(this.state.x - 10, this.state.y) && event.keyCode === 65) {
              this.setState({
                  x: this.state.x - 10,
              }, () => {
                  this.checkCollide();
              })
          } else if (this.canMove(this.state.x + 10, this.state.y) && event.keyCode === 68) {
              this.setState({
                  x: this.state.x + 10,
              }, () => {
                  this.checkCollide();
              })
          } else if (this.canMove(this.state.x, this.state.y + 20) && event.keyCode === 83) {
              this.setState({
                  y: this.state.y + 20,
              }, () => {
                  this.checkCollide();
              })
          }
      });
      this.startBrick();
  }

  startBrick(){
      this.setState({
          currentBrick: this.state.currentBrick+1
      }, () => {
          this.setState({
              x: 100,
              y: 10
          }, () => {
              this.setState({
                  bricks: [...this.state.bricks, new Brick()]
              });
              this.intervalId = setInterval(()=>{
                  if(this.canMove(this.state.x, this.state.y+10)){
                      this.setState({
                          y: this.state.y+10
                      });
                  }else{
                      this.startBrick();
                  }
              }, 500);
          });
      });
  }

  createMatrix(){
      let matrix = [];
      for (let i=0;i<this.canvas.height+1;i++){
           let row = [];
          for (let j=0;j<this.canvas.width+2;j++){
              if(j === 0 || j === this.canvas.width+1 || i === this.canvas.height ){
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
        const {x, y} = this.state;
        const brick = this.bricks[this.currentBrick].shape;
        const matrix = this.matrix;

        for (let i = y; i < matrix.length ; i++) {
            for (let j = x; j <= x + 3; i++) {
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        const matrixCellValue = matrix[i][j];
                        const brickCellValue = brick[k][l];


                        if (matrixCellValue + brickCellValue === 2) {

                            return true
                        }
                    }
                }
            }
        }
    }

  componentDidMount(){
    this.canvas = this.refs.canvas;
    this.context = this.canvas.getContext('2d');
    this.drawScene();
  };
  render() {
    return <div style={{position:"relative"}}>
              <canvas ref="canvas" style={{
                  width:"250", height:"400", position:"relative", left: "0", top:"0"}}></canvas>
        {
            this.state.bricks.map((brick,index) => {
                return <Brick canUpdate={index === this.state.currentBrick} x={this.state.x} y={this.state.y}/>
            })
        }
            </div>
  }

}


export default Scene;
