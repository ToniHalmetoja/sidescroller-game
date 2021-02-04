const gameArea = document.getElementById("gameArea");
gameArea.width = 1200;
gameArea.height = 400;
const ctx = gameArea.getContext("2d");
ctx.font = "40px Verdana";
var score = 0;

var hero = new component(20, 60, 30, 340);
var obstacles = [];

var frameNo = 0;

document.addEventListener("keydown", movement);

var updater = setInterval(updateGameArea, 20);

function component(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
}

function everyInterval(n) {
    if ((frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function updateGameArea() {
    ctx.clearRect(0, 0, gameArea.width, gameArea.height);

    for (i = 0; i < obstacles.length; i += 1) {
        if (crash(obstacles[i])) {

            updateHero("red");
            for (i = 0; i < obstacles.length; i += 1) {
                obstacles[i].x += -2;
                updateObstacles(i);
            }
            ctx.fillText("You lose. Final score: " + score, 350, 150);
            clearInterval(updater);
            return;
        }
    }

    var x, y;
    ctx.clearRect(0, 0, gameArea.width, gameArea.height);
    frameNo += 1;
    if (frameNo == 1 || everyInterval(50)) {
        x = gameArea.width;
        y = gameArea.height - 200
        let randomH = Math.floor(Math.random() * 100) + 40;
        let randomW = Math.floor(Math.random() * 20) + 5;
        obstacles.push(new component(randomW, randomH, 1200, 370-randomH/2));
    }

        if(obstacles.length > 5){
             obstacles.shift();
             score++;
         }
        for (i = 0; i < obstacles.length; i += 1) {
            obstacles[i].x += -5;
            updateObstacles(i);
        }
        ctx.fillText(score, 600, 150);
        updateHero("black");


}

function crash(other) {
    let heroLeft = hero.x;
    let heroRight = hero.x + (hero.width);
    let heroBottom = hero.y + (hero.height);
    let obstacleLeft = other.x;
    let obstacleRight = other.x + (other.width);
    let obstacleTop = other.y;
    let crash = true;
    if ((heroBottom < obstacleTop) ||
    (heroRight < obstacleLeft) ||
    (heroLeft > obstacleRight)) {
      crash = false;
    }

    return crash;
}

function updateHero(color) {
    console.log(color);
    ctx.fillStyle = color;
    ctx.fillRect(hero.x, hero.y, hero.width, hero.height);
}

function updateObstacles(i) {
    ctx.fillStyle = "black";
    ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
}

function move () {
    if (hero.y == 340) {
        let goingDown = false;
        let jump = setInterval(function () {
            if (hero.y >= 200 && goingDown == false) {
                hero.y -= 10;
                if (hero.y == 200) {
                    goingDown = true;
                }
            } else if (hero.y <= 340 && goingDown == true) {
                hero.y += 10;
            }

            if (hero.y == 340 && goingDown == true) {
                clearInterval(jump);
            }
        }, 25);
    }
}


function movement(evt) {
    if (evt.key == "1") {
        move();
    }
}