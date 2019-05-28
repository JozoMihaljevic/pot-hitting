function startGame() {
    const myGameArea = document.getElementById("area");
    const myGamePiece = document.getElementById("square");
    myGamePiece.style.marginLeft = Math.floor((Math.random() * 580) + 1) + "px";
    myGamePiece.style.marginTop = Math.floor((Math.random() * 480) + 1) + "px";
    const message = document.getElementById("message");
    const win = document.getElementById("win");
    let counter = 0;
    let attempts = [600];

    myGamePiece.addEventListener("click", function () {
        counter++;
        myGamePiece.style.background = "blue";
        win.innerHTML = `You made it in ${counter} clicks!`;
    }, false);

    myGameArea.addEventListener('click', function (event) {
        counter++;
        let distance = showDistance(event.x, event.y, myGamePiece.offsetLeft, myGamePiece.offsetTop);
        attempts.push(distance);

        if (attempts.length < 3) {
            message.innerHTML = '';
        } else if (attempts[attempts.length - 1] > attempts[attempts.length - 2]) {
            message.innerHTML = 'Cold';
        } else {
            message.innerHTML = 'Hot';
        }
    }, false);
}

function showDistance(clickX, clickY, potX, potY) {
    const distance = Math.sqrt(Math.pow((potX - clickX), 2) +
        Math.pow((potY - clickY), 2));
    return distance;
}

function reset() {
    location.reload();
}