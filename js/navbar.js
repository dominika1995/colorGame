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
