var canvas = document.createElement('canvas'),
=======
let canvas = document.createElement('canvas'),
>>>>>>> f9af8389a1fb85f9a02458731ba4149b01c6f685
	body = document.querySelector('body'),
	widthCanvas = 500,
	heightCanvas = 300,
	widthRect = 55,
	heightRect = 100,
	x = 50,
	y = 100;

body.appendChild(canvas);
<<<<<<< HEAD
canvas.width = widthCanvas; // innerWidth
canvas.height = heightCanvas;// innerHeight
canvas.style.border = '10px solid black';
canvas.style.borderTop = '';
canvas.style.margin = '50px';


// canvas.style.border ='5px solid red';
	



let сxt = canvas.getContext('2d');

сxt.fillStyle = '#123456';
let oneRect = сxt.fillRect(x, y, widthRect, heightRect);

сxt.fillRect(100, 100, 50, 100);
сxt.strokeRect(400, 100, 50, 100);
сxt.clearRect(100, 100, 50, 50);

сxt.fillRect(25, 25, 100, 100);
сxt.clearRect(45, 45, 60, 60);
сxt.strokeRect(50, 50, 50, 50);
console.log(сxt);
=======
canvas.width = widthCanvas;
canvas.height = heightCanvas;
// canvas.style.border ='5px solid red';
let c = canvas.getContext('2d');

c.fillStyle = '#123456';
let oneRect = c.fillRect(x, y, widthRect, heightRect);

console.log(c);
