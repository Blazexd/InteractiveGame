var widthRect = 50;
var heightRect = 50;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
}

function draw() {
    
    
}

function mousePressed() {

    if(mouseButton == LEFT){
    fill(random(0, 255), random(0, 255), random(0, 255));
    rectMode(CENTER);
    rect(mouseX, mouseY, widthRect, heightRect);
    }
    
    if (mouseButton == RIGHT){
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipseMode(CENTER);
        ellipse(mouseX, mouseY, widthRect, heightRect);
        }
   
}
function keyPressed(){
    if(keyCode == ENTER)
    {background(0);
    }

if(keyCode == UP_ARROW){
    fill(random(0, 255), random(0, 255), random(0, 255));
    triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+75, mouseY-50);
}
if(keyCode == DOWN_ARROW){
    fill(random(0, 255), random(0, 255), random(0, 255));
    triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+20, mouseY-50);
}
}