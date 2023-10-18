let mCamera;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mCamera = createCapture(VIDEO);
  mCamera.hide();
}

function draw() {
  background(220, 20, 120);
  // image(mCamera, 0, 0);
  mCamera.loadPixels();

  let spacing = 32; 

  for (let y = 0; y < mCamera.height; y+=spacing) {
    for (let x = 0; x < mCamera.width; x+=spacing) {
      let pixelIndex = 4* (y * mCamera.width + x); // Keep track of where each pixel is
      let redVal = mCamera.pixels[pixelIndex + 0];
      let greenVal = mCamera.pixels[pixelIndex + 1];
      let blueVal = mCamera.pixels[pixelIndex + 2];
      // let alphaVal = mCamera.pixels[pixelIndex + 3];

      fill(redVal, greenVal, blueVal); 
      noStroke();
      // rect(x, y, spacing, spacing);
      ellipse(x, y, spacing, spacing);
    }
  }

  mCamera.updatePixels(); // Update all the pixels
}
