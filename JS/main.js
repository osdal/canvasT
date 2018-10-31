let canvas = document.createElement('canvas'),
	body = document.querySelector('body'),
	widthCanvas = 500,
	heightCanvas = 300,
	widthRect = 55,
	heightRect = 100,
	x = 50,
	y = 100;

body.appendChild(canvas);
canvas.width = widthCanvas;
canvas.height = heightCanvas;
// canvas.style.border ='5px solid red';
let c = canvas.getContext('2d');

c.fillStyle = '#123456';
let oneRect = c.fillRect(x, y, widthRect, heightRect);

console.log(c);