/*Terracraft Alpha v0.0.0*/
/*jshint -W097*/
/*jshint browser: true*/

'use strict';

/*Get config's ready for action! XD */
let perlin = {
    rand_vect: function(){
        let theta = Math.random() * 2 * Math.PI;
        return {x: Math.cos(theta), y: Math.sin(theta)};
    },
    dot_prod_grid: function(x, y, vx, vy){
        let g_vect;
        let d_vect = {x: x - vx, y: y - vy};
        if (this.gradients[[vx,vy]]){
            g_vect = this.gradients[[vx,vy]];
        } else {
            g_vect = this.rand_vect();
            this.gradients[[vx, vy]] = g_vect;
        }
        return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
    },
    smootherstep: function(x){
        return 6*x**5 - 15*x**4 + 10*x**3;
    },
    interp: function(x, a, b){
        return a + this.smootherstep(x) * (b-a);
    },
    seed: function(){
        this.gradients = {};
        this.memory = {};
    },
    get: function(x, y) {
        if (this.memory.hasOwnProperty([x,y]))
            return this.memory[[x,y]];
        let xf = Math.floor(x);
        let yf = Math.floor(y);
        //interpolate
        let tl = this.dot_prod_grid(x, y, xf,   yf);
        let tr = this.dot_prod_grid(x, y, xf+1, yf);
        let bl = this.dot_prod_grid(x, y, xf,   yf+1);
        let br = this.dot_prod_grid(x, y, xf+1, yf+1);
        let xt = this.interp(x-xf, tl, tr);
        let xb = this.interp(x-xf, bl, br);
        let v = this.interp(y-yf, xt, xb);
        this.memory[[x,y]] = v;
        return v;
    }
}
perlin.seed();

/* Canvas Properties */
var can = document.getElementById("myCanvas");
var ctx = can.getContext("2d");

/* To use variables, we are going to use "global variables" */
var canX = 0;
var canY = 0;
var mouseX = 0;
var mouseY = 0;
var fps = 50;

var playerX = 0;
var playerY = 0;
var playerSpeed = 100;

var windowX1 = 0;
var windowX2 = 0;
var windowY1 = 0;
var windowY2 = 0;

window.onload = function() {
  reloadWindow();
}
function reloadWindow() {
  let win = window;
  let doc = document;
  //ctx.scale(0.75,0.75);
  let docElem = doc.documentElement;
  let body = doc.getElementsByTagName('body')[0];
  var xAxis = win.innerWidth || docElem.clientWidth || body.clientWidth;
  var yAxis = win.innerHeight || docElem.clientHeight || body.clientHeight;
  can.width = xAxis;
  can.height = yAxis;
  canX = xAxis;
  canY = yAxis;
  //context.setTransform(1, 0, 0, 1, 0, 0);
  ctx.translate(can.width/2,can.height/2);
  //ctx.scale(0.75,0.75);
}



//rgb functions
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  if (r !== undefined && g == undefined && b == undefined) {
    return "#" + componentToHex(r) + componentToHex(r) + componentToHex(r);
  }
  else {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
}



//draw rectangle function
function drawRect(x1,y1,x2,y2) {
  ctx.fillRect(x1,y1,x2-x1,y2-y1);
}

function drawSquare(x1,y1,size) {
  ctx.fillRect(x1,y1,size,size);
}

function drawLine(x1,y1,x2,y2) {
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.closePath();
  ctx.stroke();
}



//distance and angle functions
function findDistance(x,y) {
  let d = Math.sqrt((x ** 2) + (y ** 2));
  return d;
}

function calcAngleDegrees(x, y) {
  return Math.atan2(y, x) * 180 / Math.PI;
}








/*var timer;
//mouse clicks and mouse positions
document.addEventListener("mousedown", function(){
  timer=setInterval(function(){
  }, 100); // the above code is executed every 100 ms
});

document.addEventListener("mouseup", function(){
    if (timer) clearInterval(timer);
});*/
var clicked = false;
var clickedX = 0;
var clickedY = 0;
var clickTimer = 0;

function mouseDown() {
  if (clicked === false) {
    clickedX = mouseX;
    clickedY = mouseY;
  }
  clicked = true;
}

function mouseUp() {
  clicked = false;
  clickTimer = 0.5;
}
  

(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mouseX = event.pageX-(canX/2);
        mouseY = (event.pageY-(canY/2))*-1;
    }
})();

var drawSpeedTest = 0;
var totalSpeedTest = 0;

var World = [];
perlin.seed(1);
function createChunk(x,y) {
  console.log('chunkCreated')
  World[x][y] = {};
      
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      let xCoord = fromBijective(x)*8+i;
      let yCoord = fromBijective(y)*8+j;
      let heightMap = Math.abs(perlin.get(xCoord/150.576,0.5))*60-10;
      if (yCoord > heightMap) {
        if (yCoord < 0 && yCoord > heightMap) {
          World[x][y]['x' + i + 'y' + j] = '0006';
        }
        else {
          World[x][y]['x' + i + 'y' + j] = '0000';
        }
      }
      else if (yCoord+1 > heightMap && yCoord > -2) {
        World[x][y]['x' + i + 'y' + j] = '1007';
      }
      else if (yCoord+(10+Math.random()*5) > heightMap) {
        World[x][y]['x' + i + 'y' + j] = '1001';
      }
      else if (yCoord < -5 && Math.random() > 0.99) {
        World[x][y]['x' + i + 'y' + j] = '1003';
      }
      else if (yCoord < -25 && Math.random() > 0.995) {
        World[x][y]['x' + i + 'y' + j] = '1004';
      }
      else if (yCoord < -50 && Math.random() > 0.9995) {
        World[x][y]['x' + i + 'y' + j] = '1005';
      }
      else {
        World[x][y]['x' + i + 'y' + j] = '1002';
      }
    }
  }
}


//console.log(chunk)

function toBijective(x) {
  if (x > 0) {
    return x*2-1;
  }
  else {
    return Math.abs(x)*2;
  }
}

function fromBijective(x) {
  if (x % 2 === 1) {
    return (x+1)/2;
  }
  else {
    return x/-2;
  }
}

//slow looper
setInterval(slowLoop, 1000);
function slowLoop() {
  console.log(drawSpeedTest);
  drawSpeedTest = 0;
  console.log(totalSpeedTest);
  totalSpeedTest = 0;
  console.log(windowX1 + "," + windowX2 + "(" + (windowX2-windowX1) + ") - (" + windowY1 + "," + windowY2 + "(" + (windowY2-windowY1) + ")")
}


//looper
setInterval(mainLoop, 1000/fps);
function mainLoop() {
  
  
  
  let win = window;
  let doc = document;
  let docElem = doc.documentElement;
  let body = doc.getElementsByTagName('body')[0];
  var xAxis = win.innerWidth || docElem.clientWidth || body.clientWidth;
  var yAxis = win.innerHeight || docElem.clientHeight || body.clientHeight;
  if (can.width !== xAxis || can.height !== yAxis) {
    reloadWindow();
  }
  /* The Background */
  ctx.fillStyle = '#1478f8';
  ctx.globalAlpha = 1;
  drawRect(0-canX,0-canY,canX,canY);
  
  if (clickTimer > 0) {
    clickTimer -= 1/fps;
    playerX += (clickedX/fps)*2;
    playerY += (clickedY/fps)*2;
  }
  
  
  
  let playerChunkX = Math.round(playerX/160);
  let playerChunkY = Math.round(playerY/160);
  let quadrant = 0
  
  if (playerChunkX > 0 && playerChunkY > 0) {
    quadrant = 1;
  }
  if (playerChunkX <= 0 && playerChunkY > 0) {
    quadrant = 2;
  }
  if (playerChunkX <= 0 && playerChunkY <= 0) {
    quadrant = 3;
  }
  if (playerChunkX > 0 && playerChunkY <= 0) {
    quadrant = 4;
  }  
  windowX1 = Math.floor((playerX-(canX/2))/160)-1;
  windowX2 = Math.ceil((playerX+(canX/2))/160)+1;
  
  windowY1 = Math.floor((playerY-(canY/2))/160)-1;
  windowY2 = Math.ceil((playerY+(canY/2))/160)+1;
    
  for (let i = windowX1; i < windowX2; i++) {
    for (let j = windowY1; j < windowY2; j++) {
      playerChunkX = i;
      playerChunkY = j;
      if (playerChunkX > 0 && World[playerChunkX*2-1] === undefined) {
        World[toBijective(playerChunkX)] = new Array();
      }

      else if (playerChunkX <= 0 && World[Math.abs(playerChunkX)*2] === undefined) {
        World[toBijective(playerChunkX)] = new Array();
      }

      if (playerChunkX > 0) {
        if (playerChunkY > 0 && World[playerChunkX*2-1][playerChunkY*2-1] === undefined) {
          createChunk(toBijective(playerChunkX),toBijective(playerChunkY));
        };

        if (playerChunkY <= 0 && World[playerChunkX*2-1][Math.abs(playerChunkY)*2] === undefined) {
          createChunk(toBijective(playerChunkX),toBijective(playerChunkY));
        }
      }

      if (playerChunkX <= 0) {
        if (playerChunkY > 0 && World[Math.abs(playerChunkX)*2][playerChunkY*2-1] === undefined) {
          createChunk(toBijective(playerChunkX),toBijective(playerChunkY));
        };

        if (playerChunkY <= 0 && World[Math.abs(playerChunkX)*2][Math.abs(playerChunkY)*2] === undefined) {
          createChunk(toBijective(playerChunkX),toBijective(playerChunkY));
        }
      }
      
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.globalAlpha = 1;
      ctx.rect(i*160*-1-80-playerX, j*160-80+playerY, 160, 160);
      ctx.rect(i*160*-1-80-playerX, j*160*-1-80+playerY, 160, 160);
      ctx.rect(i*160-80-playerX, j*160-80+playerY, 160, 160);
      ctx.rect(i*160-80-playerX, j*160*-1-80+playerY, 160, 160);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.closePath();
      
      
    }
  }
  
  for (let i = 0; i < World.length; i++) {
    
  }  
  ctx.fillStyle = 'white'; /* Behind the actual canvas */
  ctx.strokeStyle = '#1478f8'; /* To Prevent a weird line, set the Hex Color to #1478f8 */
  ctx.globalAlpha = 1; /*This must always be 1 otherwise it will be faded */
  
  
  
  for (let i = windowX1; i < World.length; i++) {
    if (World[i] !== undefined) {
      for (let j = windowY1; j < Math.max(World[i].length, windowY2); j++) {
        totalSpeedTest += 64;
        if (World[i][j] !== 0 && World[i][j] !== undefined) {
          for (let q = 1; q < 9; q++) {
            for (let w = 1; w < 9; w++) {
              let iBi = fromBijective(i);
              let jBi = fromBijective(j)*-1;
              let thisBlock = World[i][j]['x' + q + 'y' + w];
              let fillTrue = false;
              
              if (thisBlock === '1001') {
                ctx.fillStyle = rgbToHex(200,100,50);
                fillTrue = true;
              }
              else if (thisBlock === '1002') {
                ctx.fillStyle = rgbToHex(100,100,120);
                fillTrue = true;
              }
              else if (thisBlock === '1003') {
                ctx.fillStyle = rgbToHex(10,10,10);
                fillTrue = true;
              }
              else if (thisBlock === '1004') {
                ctx.fillStyle = 'beige';
                fillTrue = true;
              }
              else if (thisBlock === '1005') {
                ctx.fillStyle = 'gold';
                fillTrue = true;
              }
              else if (thisBlock === '0006') {
                ctx.fillStyle = 'blue';
                fillTrue = true;
              }
              else if (thisBlock === '1007') {
                ctx.fillStyle = 'green';
                fillTrue = true;
              }
              if (fillTrue === true) {
                drawSpeedTest++;
                drawSquare(iBi*160-playerX-q*-20-100, jBi*160+playerY-w*20+80, 21);
              }
            }
          }
        }
      }
    }
  }

  
  for(let i = windowX1; i < windowX2; i++) {
    if (World[i] !== undefined) {
      for (let j = windowY1; j < windowY2; j++) {
        for (let q = 1; q < 9; q++) {
          for (let w = 1; w < 9; w++) {
          }  
        }
      }
    }
  }
  
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'red';
  drawRect(-1,-1,1,1);
  
  if ((map[87] === true || map[38] === true) && (map[83] === false && map[40] === false) && (map[65] === false && map[37] === false) && (map[68] === false && map[39] === false)) {
    playerY += (playerSpeed*10)/fps;
  }
  else if ((map[87] === false && map[38] === false) && (map[83] === true || map[40] === true) && (map[65] === false && map[37] === false) && (map[68] === false && map[39] === false)) {
    playerY -= (playerSpeed*10)/fps;
  }
  else if ((map[87] === false && map[38] === false) && (map[83] === false && map[40] === false) && (map[65] === true || map[37] === true) && (map[68] === false && map[39] === false)) {
    playerX -= (playerSpeed*10)/fps;
  }
  else if ((map[87] === false && map[38] === false) && (map[83] === false && map[40] === false) && (map[65] === false && map[37] === false) && (map[68] === true || map[39] === true)) {
    playerX += (playerSpeed*10)/fps;
  }
  
  
  
  if ((map[87] === true || map[38] === true) && (map[65] === true || map[37] === true)) {
    playerY += (playerSpeed*7)/fps;
    playerX -= (playerSpeed*7)/fps;
  }
  if ((map[87] === true || map[38] === true) && (map[68] === true || map[39] === true)) {
    playerY += (playerSpeed*7)/fps;
    playerX += (playerSpeed*7)/fps;
  }
  if ((map[83] === true || map[40] === true) && (map[65] === true || map[37] === true)) {
    playerY -= (playerSpeed*7)/fps;
    playerX -= (playerSpeed*7)/fps;
  }
  if ((map[83] === true || map[40] === true) && (map[68] === true || map[39] === true)) {
    playerY -= (playerSpeed*7)/fps;
    playerX += (playerSpeed*7)/fps;
  }
}


/* Mapping functions */
var map = {
};
//wsad
map[87] = false;
map[83] = false;
map[65] = false;
map[68] = false;

//^v<>
map[38] = false;
map[40] = false;
map[37] = false;
map[39] = false;

map[32] = false;

onkeydown = onkeyup = function(e){
  e = e || event; /* during an event of using keys*/
  map[e.keyCode] = e.type == 'keydown'; /* Just like Arras.io and most multiplayer games will implement a function called "keyCode"*/
}