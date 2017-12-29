var colors = generateRandomColors(6);

var wantedColor=wantedColor();
console.log(wantedColor);

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
           console.log(top.length);
       }
       else{
           this.classList.add("color__hidden");
           navText.textContent="Wrong!";
       }
    });
}


function wantedColor(){
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