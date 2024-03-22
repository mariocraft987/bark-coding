let img; // Declare variable to hold the image
let x = 235; // Initial x position (centered)
let y = 175; // Initial y position (centered)
let bgColor = 255; // Initial background color

function preload() {
  // Load the image from the URL then move
  img = loadImage('https://bark-coding.vercel.app/static/stickman.svg');
  basicMove();
}

function loadImg(text) {
  // Loads the image from the URL
  img = loadImage(text);
}

function setup() {
  // Create a canvas
  let cnv = createCanvas(480, 360);
  cnv.parent('stage-container'); // Attach the canvas to the stage container
}

function draw() {
  // Set the background color
  background(bgColor);

  // Draw the image at the current position
  image(img, x, y);

  // Display text above the image
  textSize(20);
  textAlign(CENTER, BOTTOM);
  fill(0);
  text("Welcome to the Bark Alpha!", width / 2, y - 10);
}

// Function to change the background color
function changeBackgroundColor(color) {
  // Set the background color to the provided color
  bgColor = color;
}


// Function for basic movement
function basicMove() {
  // Move stickman to the left by about +10 in the x-direction
  x += 5;

  // Prevent stickman from going beyond canvas boundaries
  if (x <= 0) {
    x = 0;
  }
}
function basicMoveBack() {
  // Move stickman to the left by about -10 in the x-direction
  x -= 5;

  // Prevent stickman from going beyond canvas boundaries
  if (x <= 0) {
    x = 0;
  }
}




