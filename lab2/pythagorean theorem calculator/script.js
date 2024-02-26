var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var xA = 100, yA = 200;
var xB = 40, yB = 200;
var xC = 100, yC = 30;


ctx.beginPath();
ctx.moveTo(xA, yA); 
ctx.lineTo(xB, yB); 
ctx.lineTo(xC, yC); 
ctx.closePath();
ctx.fillStyle = 'red'; 
ctx.fill();


ctx.font = '12px Arial';
ctx.fillStyle = 'black';
ctx.fillText('a', xA - 35, yA + 15); 
ctx.fillText('b', xB + 70, yB - 70); 
ctx.fillText('c', xC - 50, yC + 100); 


ctx.font = 'bold 16px Arial';
ctx.fillStyle = 'black';
ctx.fillText('according to pythagoras\' theorem', 10, 280);


ctx.font = 'italic 20px Arial';
ctx.fillStyle = 'red';
ctx.fillText('c = √(a² + b²)', 10, 310);
