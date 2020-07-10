// GMTK 2020 game jam
// by Ben Hem, and Oran Collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200709  
             


let hit = false;

function setup() {
  createCanvas(600, 600);
}

function draw(){
	background(200);
	ellipse(200, 200,50,150);
	point(mouseX, mouseY);
  
	 
	// Use vectors as input.
	let mouse		 = createVector(mouseX,mouseY);
  let ellipse_start = createVector(200,200);
  let ellipse_size  = createVector(50,150);
	hit = collidePointEllipseVector(mouse, ellipse_start, ellipse_size)

	stroke( (hit) ? color("red") : 0);
	print("colliding? " + hit);
  square(mouseX, mouseY, 100);
  text("hi Ben!",mouseX+30,mouseY+30);
  text("Hi Oran!\nNice vectors.",mouseX+10,mouseY+60);
}