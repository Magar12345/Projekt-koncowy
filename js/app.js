$(function () {

    const canvas = document.getElementById("tetris");
    const context = canvas.getContext('2d');

    context.scale(20,20);


    const piece = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ];

    function draw() {
        context.fillStyle = '#000';
        context.fillRect(0,0,canvas.width,canvas.height);

        drawPiece(player.piece, player.pos);
    }

    function drawPiece(piece,piecePosition){
        piece.forEach((row,y)=>{
            row.forEach((value,x)=>{
                if (value !== 0){
                    context.fillStyle = "#0052ff";
                    context.fillRect(x + piecePosition.x
                        ,y + piecePosition.y
                        ,1,1);
                }
            });
        });
    }

    let dropCounter = 0;
    let dropInterval = 1000;

    let lastTime = 0;
    function update(time = 0) {
        const deltaTime = time - lastTime;
        lastTime = time;

        dropCounter += deltaTime;
        if (dropCounter > dropInterval){
            player.pos.y ++;
            dropCounter=0
        }

        draw();
        requestAnimationFrame(update);
    }

    const player = {
      pos:{x:5,y:1},
      piece:piece,
    };

    document.addEventListener('keydown',event =>{
        if (event.keyCode === 37){
            player.pos.x --;
        }else if (event.keyCode === 39){
            player.pos.x ++;
        }else if (event.keyCode === 40){
            player.pos.y ++;
            dropCounter = 0;
        }
    });

    update();

});