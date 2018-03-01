var svg = document.getElementById("canvas");
var requestID
var x = 0;
var grow = true;
var color = "green";
var r;
var s = 0;


var clearo = function()
{
  svg = document.getElementById("canvas");
  clearInterval(requestID)
  console.log("clearo");
  while (svg.firstChild){
	svg.removeChild(svg.firstChild);
  }
};

var clearp = function()
{
  svg = document.getElementById("canvas");
  clearInterval(requestID)
  console.log("clearo");
  while (svg.firstChild){
	svg.removeChild(svg.firstChild);
  };

};

var reset = function()
{
  x = 0;
};

var stop = function()
{
  clearInterval(requestID)	
};

var run = function()
{	
  stop();
  reset();
	  var drawCircle = function()
	{
	  clearo();
	  //var svg = document.getElementById("canvas");
	  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	  circle.setAttribute("cx", 250);
	  circle.setAttribute("cy", 250);
	  circle.setAttribute("r", x);
	  console.log(x);
	  circle.setAttribute("fill", "black");
	  if (x == 250){
	       grow = false;
	     }
	     if (x == 0){
	       grow = true;
	     }
	     if (grow){
	       x++;
	     }
	     else{
	       x--;
	     }
	  
	  svg.appendChild(circle);
	  requestID = setInterval(drawCircle,10);
	}
  drawCircle();
};

var drawCircle = function()
{
  clearo();
  //var svg = document.getElementById("canvas");
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", 250);
  circle.setAttribute("cy", 250);
  circle.setAttribute("r", x);
  console.log(x);
  circle.setAttribute("fill", "black");
  if (x == 250){
       grow = false;
     }
     if (x == 0){
       grow = true;
     }
     if (grow){
       x++;
     }
     else{
       x--;
     }
  
  svg.appendChild(circle);
  requestID = setInterval(drawCircle,50);
};

//--------------------------------------------------------------------------------

var x1 = 250;
var y1 = 200;
var touchx = 1;
var touchy = 1;

var reset2 = function(){
   x1 = 250;
   y1 = 200;
   touchx = 1;
   touchy = 1;
};


var run2 = function()
{
  stop();
  reset2();
  var drawR = function(){
    clearo();
    edgeTouchy(y1);
    edgeTouchx(x1);
    if (touchx == 1){
      x1 = x1 + (Math.random() * 3);
    }
    if ( touchx == 0){
      x1 = x1 - (Math.random() * 3);
    }
    if (touchy == 1){
      y1 = y1 + (Math.random() * 2);
    }
    if (touchy == 0){
      y1 = y1 - (Math.random() * 2);
    }
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("height", 10);
    rect.setAttribute("width", 10);
    rect.setAttribute("x", x1);
    rect.setAttribute("y",y1);
    rect.setAttribute("fill", "black");
    svg.appendChild(rect);
    requestID = setInterval(drawR,10);
  };
  drawR();
}


var edgeTouchx = function(x1){
  if (x1 > 490){
    touchx = 0;
  }
  if (x1 < -5){
    touchx = 1;
  }
  //console.log(touchx);
};

var edgeTouchy = function(y1){
  if (y1 > 490){
    touchy = 0;
  }
  if (y1 < -5){
    touchy = 1;
  }
};















