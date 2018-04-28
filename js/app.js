//Heads or Tails
var flip = document.getElementById('flipper');
var coin = document.getElementById('coin');
var divContainer = document.getElementById('div-container');
var val = 0;
var flipCount = 0;
var left = 0;

flip.addEventListener('click', function(){
	var headortail = ['Heads', 'Tails'];
	var num = Math.floor(Math.random() * headortail.length);
	var colors = ['violet', 'RoyalBlue']
	coin.innerHTML = headortail[num];
	flipCount++;
	if (num == 0) {
		//console.log('I think i work...')
		val = val + 100;
		//console.log(val);
	}
	if (num == 1) {
		val = val + 600;
		//console.log(val);
	}

	var average = val/flipCount;
	console.log(average) //Average!!!
	left = left + 25;

	var div = document.createElement('DIV');
	div.style.backgroundColor = colors[num];
	div.style.top = average + 'px';
	div.style.left = left + 'px';
	div.setAttribute('class', 'div');
	divContainer.appendChild(div);
})

//Pick a Ball
var pick = document.getElementById('pick');

pick.addEventListener('click', function(){
	var ball = ['ball1', 'ball2', 'ball3'];
	var num = Math.floor(Math.random() * ball.length);
	
})