
var gameArea = document.getElementById("gameArea");
var player = document.createElement("div");
player.id = "character";
gameArea.append(player);

var spawnEnemies = setInterval(mainGame, 2000);


function mainGame(){
    var obstacle = document.createElement("div");
    obstacle.id = "obstacle";
    gameArea.append(obstacle);

    var scrollAnim = setInterval(frame, 5);
        let pos = 80;
        let size = Math.random();
        if(size>0.7){
            obstacle.style.height = 80 + "px";
            obstacle.style.top = 350 + "px"
        }
        else if(size<0.3){
            obstacle.style.height = 15 + "px";
            obstacle.style.top = 410 + "px"
        }
        function frame() {
        if (pos == 1870) {
            obstacle.remove();
        } else {
            pos+=5;
            obstacle.style.right = pos + 'px';
        }
    }
}

document.addEventListener("keydown", function(evt){
    if (evt.key == "1") {;
        jump();
    }
});

function jump(){
    // player.style.top = 320+"px";
    //  if(current = "370px"){
    console.log("beep");
         for(i=0; i>89; i+=5){
             player.style.top = (370-i)+"px";
             console.log(player.style.top);
         }
    //  }
}
