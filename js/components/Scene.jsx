import React from 'react';
import Brick from "./Brick.jsx";

class Scene extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      x:100,
      y:0,
      dropDown:true,
    };
  }

  drawScene(){
    // this.context.scale(1, 1);
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
     this.matrix = this.createMatrix();
     this.startGame();
  }

  startGame() {
      this.setState({
         x:100,
         y:10,
      },()=>{
          this.brick = new Brick();
          this.intervalId = setInterval(this.moveBrick, 300);
      });
  }

  moveBrick = () => {
      const {x, y} = this.state;
      // this.brick.drawBrick();
      this.setState({y: y + 10,},
          document.addEventListener('keydown',event =>{
              if (event.keyCode === 37){
                  this.setState({
                      x : x - 10,
                  })
              }else if (event.keyCode === 39){
                  this.setState({
                      x : x + 10,
                  })
              }else if (event.keyCode === 65){
                  this.setState({
                      x : x - 10,
                  })
              }else if (event.keyCode === 68) {
                  this.setState({
                      x : x + 10,
                  })
              }else if (event.keyCode === 83){
                  this.setState({
                      y : y + 20,
                  })
              }
          }),
          () =>{
              if(this.collide() === true){
                  console.log("non-collide");
                  this.brick.drawBrick();
                  this.setState({dropDown:false});

              }else{
                  clearInterval(this.intervalId);
                  this.startGame();
                  console.log("collide");
              }
          })

  };


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
    return <div style={{position:"relative"}}>
              <canvas ref="canvas" style={{
                  width: "250", height: "400", position:"absolute", left: "0", top:"0"}}></canvas>
            <Brick y={this.state.y} x={this.state.x}/>
            </div>
  }

}


export default Scene;
