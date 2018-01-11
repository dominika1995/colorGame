var color=document.querySelector(".top__color");
var btnNewGame=document.querySelector(".navbar__button--new");
var btnLevel=document.querySelectorAll(".navbar__button--level");
var boxes=document.querySelectorAll(".color__box");
var navText=document.querySelector(".navbar__text");
var wantedColor;
var numberOfSquares=6;

function newGame() {
    btnNewGame.addEventListener("click",function(){
        refreshPanel();
        btnNewGame.textContent="NEW GAME";
        startGame();
    });
}


function showBoxes(){
    boxes.forEach(function(box){
        box.classList.remove("color__hidden");
    });
}

function refreshPanel(){
    navText.textContent=" ";
    document.querySelector(".top").style.background="#8e9fbb";
    colors=generateRandomColors(numberOfSquares);
    showBoxes();
}

function newLevel(){
    for (var i=0;i<btnLevel.length;i++){
        btnLevel[i].addEventListener("click",function(){
            btnLevel[0].classList.remove("navbar__button--active");
            btnLevel[1].classList.remove("navbar__button--active");
            this.classList.add("navbar__button--active");
            if(this.textContent=="EASY"){
                numberOfSquares=3;
            }else{
                numberOfSquares=6;
            }
            refreshPanel();
            startGame();
        })}
};

var colors = generateRandomColors(numberOfSquares);
function init() {
    startGame();
    newLevel();
    newGame();
}
init();
function startGame(){
    wantedColor=newWantedColor();
    color.textContent=wantedColor;

    for(var i=0;i<boxes.length;i++){
        if(colors[i]){
            boxes[i].style.background=colors[i];
            boxes[i].style.display="block";
        }
        else{
            boxes[i].style.display="none";
        }
        boxes[i].addEventListener("click",function(){
            var boxColor=this.style.background;
            if(boxColor==wantedColor){
                navText.textContent="Correct!";
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




