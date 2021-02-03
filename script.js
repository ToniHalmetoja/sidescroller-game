
const gameArea = document.getElementById("gameArea");
const ctx = gameArea.getContext("2d");

var hero = new component("black", 10, 30, 30, 120);
var obstacle = new component("black", 5, 20, 200, 130); 
document.addEventListener("keydown", movement);

var updater = setInterval(updateGameArea,20);

function updateGameArea() {
    ctx.clearRect(0, 0, gameArea.width, gameArea.height);
    obstacle.x -= 1;
    console.log(obstacle.x);
    obstacle.update();
    hero.update();
    
}

function component(color, width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }
    this.move = function() {
        if(y==120){
            let goingDown = false;
            let jump = setInterval(function(){
                if(y>=75 && goingDown == false){
                    y-=5;
                    hero.update();
                    if(y==75){
                        goingDown=true;
                    }
                }

                else if(y<=120 && goingDown==true){
                    y+=5;
                    hero.update();

                }            
                
                if(y==120 && goingDown==true){
                    clearInterval(jump);
                }
            },25);
        }
    }
}

function movement(evt){
    if(evt.key=="1") {
            hero.move();    
    }
}