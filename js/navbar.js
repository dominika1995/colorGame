newGame.addEventListener("click",function(){
    navText.textContent=" ";
    showBoxes();
    document.querySelector(".top").style.background="#8e9fbb";
    newGame.textContent="NEW GAME";
    colors=generateRandomColors(numberOfSquares);
    startGame();
});

function showBoxes(){
    boxes.forEach(function(box){
        box.classList.remove("color__hidden");
    });
};

gameEasy.addEventListener("click",function(){
    gameEasy.classList.add("navbar__button--active");
    gameHard.classList.remove("navbar__button--active");
    boxHard.classList.add("color__hidden");
    navText.textContent=" ";
    document.querySelector(".top").style.background="#8e9fbb";
    numberOfSquares=3;
    colors=generateRandomColors(numberOfSquares);
    startGame();
});


gameHard.addEventListener("click",function(){
    gameHard.classList.add("navbar__button--active");
    gameEasy.classList.remove("navbar__button--active");
    boxHard.classList.remove("color__hidden");
    navText.textContent=" ";
    document.querySelector(".top").style.background="#8e9fbb";
    numberOfSquares=6;
    colors=generateRandomColors(numberOfSquares);
    startGame();
});