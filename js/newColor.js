var colors = generateRandomColors(numberOfSquares);


startGame();
function startGame(){
    wantedColor=newWantedColor();
    color.textContent=wantedColor;

    for(var i=0;i<boxes.length;i++){
        boxes[i].style.background=colors[i];

        boxes[i].addEventListener("click",function(){
            var boxColor=this.style.background;

            if(boxColor==wantedColor){
                navText.textContent="Correct!";
                //zmiana koloru nav
                //zmiana koloru wszystkich boxow
                boxes.forEach(function(box){
                    box.classList.remove("color__hidden");
                    box.style.background=wantedColor;
                });
                newGame.textContent="PLAY AGAIN?";
                document.querySelector(".top").style.background=wantedColor;
            }
            else{
                this.classList.add("color__hidden");
                navText.textContent="Wrong!";
            }
        });
    }
}


function newWantedColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr=[];
    for(var i=0;i<num;i++){
        var color="rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
        arr.push(color);
    }
    return arr;
}