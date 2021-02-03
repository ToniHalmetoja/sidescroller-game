
var gameArea = document.getElementById("gameArea");
var player = document.createElement("div");
var height = 0;
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
    if (evt.key == "1") {
        let jumpAnim = setInterval(function(){
                player.style.top = (340)+"px";
                console.log("beep");
                player.style.top = (370)+"px";

        },10);
    }
        
});


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
