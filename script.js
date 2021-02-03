const gameArea = document.getElementById("gameArea");
const ctx = gameArea.getContext("2d");

var hero = new component("black", 7, 30, 30, 120);
var obstacles = [];



var frameNo = 0;

document.addEventListener("keydown", movement);

var updater = setInterval(updateGameArea, 20);

function everyInterval(n) {
    if ((frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function updateGameArea() {
    var x, y;

    ctx.clearRect(0, 0, gameArea.width, gameArea.height);
    frameNo += 1;
    if (frameNo == 1 || everyInterval(50)) {
        x = gameArea.width;
        y = gameArea.height - 200
        obstacles.push(new component("black", 5, 20, 300, 130));
        console.log(obstacles);
    }
    for (i = 0; i < obstacles.length; i += 1) {
        obstacles[i].x += -2;
        obstacles[i].update();
    }
    hero.update();

}

function component(color, width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.move = function () {
        if (hero.y == 120) {
            let goingDown = false;
            let jump = setInterval(function () {
                if (hero.y >= 75 && goingDown == false) {
                    hero.y -= 5;
                    hero.update();
                    if (hero.y == 75) {
                        goingDown = true;
                    }
                } else if (hero.y <= 120 && goingDown == true) {
                    hero.y += 5;
                }

                if (hero.y == 120 && goingDown == true) {
                    clearInterval(jump);
                }
            }, 25);
        }
    }
}

function movement(evt) {
    if (evt.key == "1") {
        hero.move();
    }
}