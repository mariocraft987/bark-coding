let img; // Declare variable to hold the image
let x = 0; // Initial x position
let y = 0; // Initial y position
let speedX = 5; // Speed in the x direction
let speedY = 5; // Speed in the y direction

function preload() {
  // Load the image from the URL
  img = loadImage('https://bark-coding.vercel.app/static/stickman.svg');
}

function setup() {
  // Create a canvas
  let cnv = createCanvas(480, 360);
  cnv.parent('stage-container'); // Attach the canvas to the stage container

  // Set the background color to white
  background(255);
}

function draw() {
  // Clear the canvas
  background(255);

  // Update position
  x += speedX;
  y += speedY;

  // Bounce off edges
  if (x + img.width >= width || x <= 0) {
    speedX *= -1;
  }
  if (y + img.height >= height || y <= 0) {
    speedY *= -1;
  }

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
  document.getElementById('stage').style.backgroundColor = color;
}
