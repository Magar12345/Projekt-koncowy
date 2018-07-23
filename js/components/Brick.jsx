import React from 'react';

class Brick {
    constructor(){
        this.shape = this.randomShape();

    }

    randomShape(){
        const shapes = [
            [
                [0, 0, 0],
                [1, 1, 1],
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
                [1, 1],
                [1, 1],
            ],
        ];
        const randomIndex = Math.floor((Math.random() * 3) + 1);
        return shapes[randomIndex];

    }

    drawBrick(shape, piecePositionX,piecePositionY,context) {
        shape.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        context.fillStyle = "#0052ff";
                        context.fillRect(x + piecePositionX
                            , y + piecePositionY
                            , 1, 1);
                    }
                });
            });
    }
}
export default Brick


