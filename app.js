//Created function constructor of VaderPhotos.
var VaderPhotos = function(filepath) {
	this.filepath = filepath;
	this.vote = 0;
};
//An array of Objects for VaderPhotos.
var ateYourFather = new VaderPhotos("img/ate-your-father.jpg");
var bankRobbery = new VaderPhotos("img/bank-robbery.jpg");
var bullShit = new VaderPhotos("img/bullshit.jpg");
var camping = new VaderPhotos("img/camping.jpg");
var kiltBagpipe = new VaderPhotos("img/kilt-bagpipe.jpg");
var middleAge = new VaderPhotos("img/middle-age.jpg");
var sexist = new VaderPhotos("img/sexist-vader.jpg");
var sithHappens = new VaderPhotos("img/sith-happens.jpg");
var sithHat = new VaderPhotos("img/sith-hat.jpg");
var throatHug = new VaderPhotos("img/throat-hug.jpg");
var whosYour = new VaderPhotos("img/whos-your-daddy.jpg");
var yourFather = new VaderPhotos("img/your-the-father.jpg");

var images = [ateYourFather, bankRobbery, bullShit, camping, kiltBagpipe, middleAge, sexist,	sithHappens, sithHat, throatHug, whosYour, yourFather];

var data = {};
var context = document.getElementById('barchart').getContext('2d');

var randomNumber = function () {
	return Math.floor(Math.random() * images.length);
}
//Variables for my event handlers/listeners.
var loadImages = document.getElementById('start');
var leftEL = document.getElementById("left-click");
var rightEL = document.getElementById("right-click");
var img1,img2;
//Function to create my random images and a while loop to check for code error.
var imagesCreater = function() {
	img1 = randomNumber();
	img2 = randomNumber();
	while(img1  === img2) {
	img2 = randomNumber();
	}
//
	leftEL.src = images[img1].filepath;
	rightEL.src = images[img2].filepath;
	//console.log(leftEL.src , rightEL.src);
	loadImages.onclick = null;
	return [img1, img2];
};

loadImages.onclick = imagesCreater;

//this is where I need to increment votes to left
leftEL.addEventListener("click", function() {
  images[img1].vote += 1;
  images[img1].filepath;
  images[img1].vote;
  imagesCreater();
  getVoteData();
  createLocal();
});

//this is where I need to incrememt votes to the right
rightEL.addEventListener("click", function() {
  images[img2].vote += 1;
  images[img2].filepath;
  images[img2].vote;
  imagesCreater();
  getVoteData();
  console.log(data.datasets[0].data);
  createLocal();
});
//function to populate my chart.
var getVoteData = function() {

  data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "",
        fillColor: "#000000",
        strokeColor: "#000000",
        highlightFill: "#000000",
        highlightStroke: "#000000",
        data: []
      }
    ]
  }
  for (var i = 0; i < images.length; i++) {
    data.datasets[0].data.push(images[i].vote);
  }
  barChart = new Chart(context).Bar(data, {
    scaleBeginAtZero : true,
    scaleGridLineWidth : 1,
    barShowStroke : true,
    barStrokeWidth : 2
  });
}

function createLocal() {
  var dataStore = JSON.stringify(data.datasets[0].data);
  localStorage.setItem('voteData', dataStore);
}

getVoteData();
if (localStorage.voteData) {
  data.datasets[0].data = JSON.parse(localStorage.voteData);
}
new Chart(context).Bar(data);