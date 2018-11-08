var canvas = document.createElement('canvas'),

	body = document.querySelector('body'),
	widthCanvas = 500,
	heightCanvas = 300,
	widthRect = 50,
	heightRect = 50,
	x = 0,
	y = 0,
	speedDropDown = 200;

body.appendChild(canvas);
canvas.width = widthCanvas; // innerWidth
canvas.height = heightCanvas;// innerHeight
canvas.style.border = '3px solid black';
canvas.style.borderTop = '';
canvas.style.margin = '10px';


let сxt = canvas.getContext('2d');

сxt.fillStyle = '#123456';



/*setInterval(function () {
	сxt.fillStyle = 'white';
	сxt.fillRect(0, 0, widthCanvas, heightCanvas);

	сxt.fillStyle = '#123456';
	сxt.fillRect(x++, y, widthRect, heightRect)
}, 10)*/

/*сxt.strokeStyle = '#856954';
сxt.lineWidth = 10;
сxt.strokeRect(x + 50, y + 100, 120, 120);

сxt.arc(widthCanvas / 2, heightCanvas / 2, 100, 0, Math.PI, true);
сxt.fill();*/

сxt.fillStyle = '#159874';
// сxt.scale(2, 1);
// сxt.rotate(20*Math.PI/180);

сxt.beginPath();
сxt.moveTo(50, 50);
сxt.lineTo(25, 100);
сxt.lineTo(75, 100);
сxt.lineTo(50, 50);
сxt.stroke();

// сxt.fillRect(100, 100, 50, 100);
// сxt.strokeRect(400, 100, 50, 100);
// сxt.clearRect(100, 100, 50, 50);

// сxt.fillRect(25, 25, 100, 100);
// сxt.clearRect(45, 45, 60, 60);
// сxt.strokeRect(50, 50, 50, 50);


function dropDown () {
	сxt.fillStyle = 'red';
	x = (widthCanvas/2) - (widthRect/2);
	сxt.clearRect(x, y, widthRect, heightRect);
	y = y+5;
	сxt.fillRect(x, y, widthRect, heightRect);
	if (y == heightCanvas - heightRect) {
		clearInterval(dropDown);
	}
	document.addEventListener('keydown', (event) => {
	  var keyName = event.keyCode;
	  if (keyName == 40) {
		speedDropDown = 20;
		}
	});
	
}

var dropDown = setInterval (dropDown, speedDropDown);





/*var timerId = setTimeout(function tick() {
  alert( "тик" );
  timerId = setTimeout(tick, 2000);
}, 2000);*/


