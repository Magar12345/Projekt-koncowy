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
    this.context.fillStyle = "#000";
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
              for ( let k = 0; k < 3; k++){
                  for (let l = 0; l < 3; l++){


                  }
              }
          }
      }
  }


    //1. Musze miec pozycje klocka (ze state'a)
    //2. Musze miec dostep do matrixa
    //3. Musze obliczyc sume dla kazdej z komorek wedlug wzoru:
    //   Od x do x+3 np. this.matrix[y][x], this.matrix[y][x+1], this.matrix[y][x+2], this.matrix[y][x+3]
    //   Od y do y+3 np. this.matrix[y+1][x], this.matrix[y+1][x+1], this.matrix[x+2], this.matrix[x+3]


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
              }, 3000);
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


    updateMatrix(x, y, brick){
        console.log(this.matrix);

        for(let i = 0; i < 3; i++){
          for(let j = 0; j < 3; j++) {
              this.matrix[i + 1][y - j] = brick[i][j];
          }
        }
      console.log(this.matrix);
    }

    collide() {
        const {x, y} = this.state;
        const brick = this.brick.drawBrick;
        const matrix = this.matrix;

        for (let i = y; i < matrix.length - 20; i++) {
            for (let j = x; j <= x + 3; i++) {
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        const matrixCellValue = matrix[i][j];
                        const brickCellValue = brick[k][l];
                        debugger;

                        if (matrixCellValue + brickCellValue === 2) {
                            this.updateMatrix(j, i, brick);
                            alert('collide');
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
                  width:"250", height:"400", position:"absolute", left: "0", top:"0"}}></canvas>
        {
            this.state.bricks.map((brick,index) => {
                return <Brick canUpdate={index === this.state.currentBrick} x={this.state.x} y={this.state.y}/>
            })
        }
            </div>
  }

}


export default Scene;
