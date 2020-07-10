// GMTK 2020 game jam
// by Ben Hem, and Oran Collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200709  
             
// Scheduling
// - Breaks  
// - Brainstorm
// - Feature list
// - MVP sub list
// - feeling checkin


// sound design
// forgiving controll
// algoemthic game play 
//  art algoemthic
//  art dictates movement
//  easing -> sound on movement
//  more base

// flappy birds made out of popup windows
// bowser tap game 
// hackar puzzle look at source code
//  open console 
//  emulated console
//  hacker asthitic
//  vapor wave

// code is actually hilighted when it is ran
// do not enter -> to enter
// cypher random gen
// boss keys but in puzzle form
// source code as obstical
// shooting the sorce code desables features

// programatic movement descroying parts art changes movement of enemey
// - modularize
// - effeacted by gravity
// - movement
// - background color ditacts movement
// color dictaes playmoement 
// - background changes how player can movement
// - enemy death changes 

// - strataves vs shooting frenetic
// - block moement game flash similar but use color background as moveset

// path making puzzles - pipe fam
// hyper casual grass simulator - faciated with how something move, pixelated grass fezz feel

// teach gaming

// take ways
// use random in good way
// use time eciting

// play around with meta elament
// movement puzzles

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