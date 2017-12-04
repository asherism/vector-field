var locs = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(60);

    var res = 60;
    var countX = ceil(width / res) + 1;
    var countY = ceil(height / res) + 1;

    for (var j = 0; j < countY; j++) {
        for (var i = 0; i < countX; i++) {
            locs.push(new p5.Vector(res * i, res * j));
        }
    };

    noFill();
    //stroke(182,255,95); //green
    //stroke(0,249,201); //turq
    stroke(0,162,255); //blue
    //stroke(249,124,186); //pink
    //stroke(0,255,90); //matrix green
};

function draw() {
    //background(30, 67, 137);
    //background(0,249,201); // turq
    //background(249,124,186); // pink
    background(0,0,0);
    
    for (var i = locs.length - 1; i >= 0; i--) {
        var h = calcVec(locs[i].x - mouseX, locs[i].y - mouseY);
        line(
            locs[i].x,
            locs[i].y,
            locs[i].x + 15 * cos(h.heading()),
            locs[i].y + 15 * sin(h.heading())
        );
    };
}; // move on mouse

function calcVec(x, y) {
    return new p5.Vector(y - x, - x - y);
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};