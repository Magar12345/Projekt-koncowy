import React from 'react';
import Brick from "./Brick.jsx";

class Scene extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            x:12,
            y:1,
            draw:this.draw()

        };
    }
    draw() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        context.scale(10, 10);
        context.fillStyle = "#000";
        context.fillRect(0, 0, canvas.width, canvas.height);
        const brick = new Brick();
        const randomShape = brick.randomShape();
        brick.drawBrick(randomShape, this.state.x, this.state.y, context);
        // this.update();
        // this.state.update.update(this.draw, context, canvas, x, y);
    }
    update(time = 0) {

        let dropCounter = 0;
        let dropInterval = 1000;
        let lastTime = 0;

        const deltaTime = time - lastTime;
        lastTime = time;

        dropCounter += deltaTime;
        if (dropCounter > dropInterval){
            this.state.y ++;
            dropCounter = 0
        }
        // if (collide(arena,player)){
        //     player.pos.y--;
        //     merge(arena,player);
        //     player.pos.y = 0;
        // }
        this.setState({
            draw:this.draw(),
            });
        requestAnimationFrame(this.update);
    }

    componentDidMount(){
        this.update()
    };

    render() {

        return <div>
            <canvas ref="canvas" style={{width: "250", height: "400"}}>
            </canvas>
        </div>
    }

}


export default Scene;
