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
});

//this is where I need to incrememt votes to the right

rightEL.addEventListener("click", function() {
	images[img2].vote += 1;
	console.log(images[img2].filepath);
	console.log(images[img2].vote);
	imagesCreater();
});








	
	/*var data = [
  {
    value: 25,
    label: 'Alex the Scottish Sensation',
    color: '#811BD6',
    highlight: '#811B33'
  },
  {
    value: 35,
    label: 'Scott the Alexish Aberration',
    color: '#9CBABA',
    highlight: '#9CBA99'
  },
  {
    value: 40,
    label: 'Emily the Extraordinarily Ectoplasmic',
    color: '#D18177',
    highlight: '#D18133'
  },
  {
    value : 45,
    label: 'Bella Bella Bella!!!',
    color: '#6AE128',
    highlight: '#6AE199'
  }
];
*/
/*var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {
    //Number - Amount of animation steps
    animationSteps : 200,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true
});*/









