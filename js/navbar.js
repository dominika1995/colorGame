newGame.addEventListener("click",function(){
    navText.textContent=" ";
    showBoxes();
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

});


gameHard.addEventListener("click",function(){
    gameHard.classList.add("navbar__button--active");
    gameEasy.classList.remove("navbar__button--active");
    boxHard.classList.remove("color__hidden");
    navText.textContent=" ";
});