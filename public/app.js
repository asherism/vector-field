let tooltipSpan1;
let posn;

document.addEventListener("DOMContentLoaded", () => {
  tooltipSpan1 = document.getElementById("tooltip-span1");
});

window.onmousemove = function(e) {
  let x = e.clientX;
  let y = e.clientY;

  tooltipSpan1.style.top = y + 20 + "px";
  tooltipSpan1.style.left = x + 20 + "px";
};

var locs = [];

function setup() {
  createCanvas(windowWidth, document.body.scrollHeight);
  posn = createVector(width/2,height/2); 
  console.log(posn);

  frameRate(30);

  var res = 60;
  var countX = ceil(width / res) + 1;
  var countY = ceil(height / res) + 1;

  for (var j = 0; j < countY; j++) {
    for (var i = 0; i < countX; i++) {
      locs.push(new p5.Vector(res * i, res * j));
    }
  }

  noFill();
  //stroke(182,255,95); //green
  //stroke(0,249,201); //turq
  // stroke(0, 162, 255); //blue
  // stroke(100,169,107) //cactus green
  stroke(209,154,199)
  //stroke(240,185,251)
  //stroke(249,124,186); //pink
  //stroke(0,255,90); //matrix green
}

function calcVec(x, y) {
  return new p5.Vector(y - x, -x - y);
}
function draw() {
  //background(30, 67, 137);
  //background(0,249,201); // turq
  //background(249,124,186); // pink
  //background(0, 0, 0); //black
  background(246,194,210)// pink

  for (var i = locs.length - 1; i >= 0; i--) {
    var h = calcVec(locs[i].x - posn.x, locs[i].y - posn.y);
    line(
      locs[i].x,
      locs[i].y,
      locs[i].x + 15 * cos(h.heading()),
      locs[i].y + 15 * sin(h.heading())
    );
  }
} // move on mouse

function mouseMoved(){
  posn.x = mouseX;
  posn.y = mouseY;
  // console.log("mouse moved", posn)
  return false;
}

// function deviceMoved() {
//   posn.x = accelerationX;
//   posn.y = accelerationY;
//   console.log("device moved", posn)
// }


function windowResized() {
  resizeCanvas(windowWidth, document.body.scrollHeight);
}
