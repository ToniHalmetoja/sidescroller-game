
const gameArea = document.getElementById("gameArea");
const ctx = gameArea.getContext("2d");

hero = new component("black", 10, 30, 30, 120);
hero.update();

document.addEventListener("keydown", movement);

function component(color, width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx.fillStyle = color;
        ctx.clearRect(0, 0, gameArea.width, gameArea.height);
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



// function jump(){
//         let oneJump = 0;
//         if(height < 20 && height != 0){
//             if(oneJump = 1){
//                 clearInterval(jumpAnim);
//             }
//             height+=2;
//             player.style.top = (370-height)+"px";
//         }
//         else if(height == 0){
//             oneJump = 1;
//             height-=2;
//             player.style.top = (370-height)+"px";
//         }
// }
