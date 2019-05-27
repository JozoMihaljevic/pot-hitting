function startGame() {
    let counter = 0;
    const countDiv = document.getElementById("counter");
    const message = document.getElementById("message");
    const win = document.getElementById("win");
    let attempts = [600];

    myGameArea.start();
    myGameArea.canvas.addEventListener('click', function (event) {
        counter++;
        let distance = showDistance(event.x, event.y, myGamePiece.x, myGamePiece.y);
        attempts.push(distance);

        if (distance < 30) {
            console.log('Win');
            win.innerHTML = 'Win';
            counter = 0;
        }

        if (attempts[attempts.length - 1] > attempts[attempts.length - 2]) {
            message.innerHTML = 'Cold';
        } else {
            message.innerHTML = 'Hot';
        }

        countDiv.innerHTML = counter;
    }, false);
    myGamePiece = new component(30, 30, "blue");

}

const myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 500;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
}

function component(width, height, color) {
    this.width = width;
    this.height = height;
    this.x = Math.floor((Math.random() * 480) + 1);
    this.y = Math.floor((Math.random() * 580) + 1);
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

function showDistance(clickX, clickY, potX, potY) {
    const distance = Math.sqrt(Math.pow((potX - clickX), 2) +
        Math.pow((potY - clickY), 2));
    return distance;
}