let img; // Declare variable to hold the image

function preload() {
  // Load the image from the URL
  img = loadImage('https://bark-coding.vercel.app/static/stickman.svg');
}

function setup() {
  // Create a canvas
  createCanvas(480, 360);

  // Ensure the image is loaded before drawing it
  if (img) {
    // Calculate the position to center the image
    let xPos = (width - img.width) / 2;
    let yPos = (height - img.height) / 2;
    
    // Draw the image at the calculated position
    image(img, xPos, yPos);
  }
}
