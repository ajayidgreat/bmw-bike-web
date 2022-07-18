let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");

redBtn.onclick = function(){
    bike.style.backgroundImage = "url(/dist/img/BMW1.PNG" ;
}

blueBtn.onclick = function(){
    bike.style.backgroundImage = "url(/dist/img/BMW2.PNG" ;
}

blackBtn.onclick = function(){
    bike.style.backgroundImage = "url(/dist/img/BMW3.PNG" ;
}
