import React, {Component} from 'react';

class Brick extends Component{
    constructor(props){
        super(props);
        this.shape = this.randomShape();
        this.randomColor = this.getRandomRolor() ;
    }
    getRandomRolor() {
        var letters = '0123456789'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 10)];
        }
        return color;
    }

    randomShape(){
        const shapes = [
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 1, 0],
            ],
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
            ],
            [
                [1, 1, 0],
                [0, 1, 0],
                [0, 1, 1],
            ],
            [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]
            ],
        ];
        const randomIndex = Math.floor((Math.random() * 3)+1);
        return shapes[randomIndex];

    }

    drawBrick() {
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    this.context.fillStyle = this.randomColor;
                    this.context.fillRect(x*10, y*10, 10, 10);
                    // debugger;
                }
            });
        });
    }

    shouldComponentUpdate(){
        return this.props.canUpdate;
    }

    componentDidMount(){
        this.canvas = this.refs.brick;
        this.context = this.canvas.getContext('2d');
        this.drawBrick();
    };

    render(){
        return <canvas style={{position:"absolute", left:this.props.x, top:this.props.y}} width="30px" height="30px" ref="brick"></canvas>
    }
}
export default Brick


