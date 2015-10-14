var VaderPhotos = function(filepath) {
	this.filepath = filepath;
	this.vote = 0
};

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

var randomNumber = function () {
	return Math.floor(Math.random() * images.length);
}

var loadImages = document.getElementById('start');
var leftEL = document.getElementById("left-click");
var rightEL = document.getElementById("right-click");
var img1,img2;

var imagesCreater = function() {
	img1 = randomNumber();
	img2 = randomNumber();
	while(img1  === img2) {
		img2 = randomNumber();
	}

	leftEL.src = images[img1].filepath;
	rightEL.src = images[img2].filepath;
	console.log(leftEL.src , rightEL.src);
	//loadImages.onclick = null;
	//return [img1, img2];
};

loadImages.onclick = imagesCreater;

leftEL.addEventListener("click", function() {
	console.log('left was clicked');
	//this is where I need to increment votes to left
	images[img1].vote += 1;
	console.log(images[img1].filepath);
	console.log(images[img1].vote);
	//imagesCreater();
});

rightEL.addEventListener("click", function() {
	console.log('right was clicked');
	//this is where I need to incrememt votes to the right
	images[img2].vote += 1;
	console.log(images[img2].filepath);
	console.log(images[img2].vote);
	//imagesCreater();
});


	
	











