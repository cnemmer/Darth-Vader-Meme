var leftClick = ["img/ate-your-father.jpg", "img/bank-robbery.jpg", "img/bullshit.jpg", "img/camping.jpg", "img/kilt-bagpipe.jpg", "img/middle-age.jpg"];
var rightClick = ["img/sexist-vader.jpg", "img/sith-happens.jpg", "img/sith-hat.jpg", "img/sith-hat.jpg", "img/whos-your-daddy.jpg", "img/whos-your-daddy.jpg"];

var leftSide = function() {

var leftEL = document.getElementById("left-click");
leftEL.src = leftClick.pop();
}

var rightSide = function() {

var rightEL = document.getElementById("right-click");
rightEL.src = rightClick.pop();
}

var leftButton = document.getElementById('clickL'); 
leftButton.onclick = leftSide;

var rightButton = document.getElementById('clickR');
rightButton.onclick = rightSide;