newGame.addEventListener("click",function(){
   console.log('kliknieto nowa gre');
   boxes.forEach(function(box){
       box.classList.remove("color__hidden");
   })

});

gameEasy.addEventListener("click",function(){
   console.log('kliknieto wersje latwa');
    gameEasy.classList.add("navbar__button--active");
    gameHard.classList.remove("navbar__button--active");
    boxHard.classList.add("color__hidden");

});


gameHard.addEventListener("click",function(){
    console.log('kliknieto wersje trudna');
    gameHard.classList.add("navbar__button--active");
    gameEasy.classList.remove("navbar__button--active");
    boxHard.classList.remove("color__hidden");
});