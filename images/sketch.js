let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); 
  mImg.resize(0, height); // If one value is 0, it will resize proportionally
  // mImg.loadPixels(); // Load arrays of pixels; need to put them back upon manipulations
  // mImg.pixels
  // print(mImg.pixels.length);
  noLoop(); // Too many pixels, no need to loop
}

function draw() {
  background(220, 20, 120);

  // for (let vi = 0; vi < mImg.pixels.length; vi+=4) { // vi: pixel index
  //   let redVal = mImg.pixels[vi + 0];
  //   let greenVal = mImg.pixels[vi + 1];
  //   let blueVal = mImg.pixels[vi + 2];
  //   let alphaVal = mImg.pixels[vi + 3];

  //   let mavVal = max(redVal, greenVal, blueVal);

  //   // Exaggerate red, green, and blue
  //   // if (mavVal == redVal) {
  //   //   mImg.pixels[vi + 0] = 255;
  //   // } else if (mavVal == greenVal) {
  //   //   mImg.pixels[vi + 1] = 255;
  //   // } else {
  //   //   mImg.pixels[vi + 2] = 255;
  //   // }

  //   // Remove the blue background
  //   // if (mavVal == blueVal) {
  //   //   mImg.pixels[vi + 3] = 0;
  //   // }
  // }

  mImg.loadPixels();

  let spacing = 32; 
  // print(mImg.height, mImg.width);

  for (let y = 0; y < mImg.height; y+=spacing) {
    for (let x = 0; x < mImg.width; x+=spacing) {
      let pixelIndex = 4* (y * mImg.width + x); // Keep track of where each pixel is
      let redVal = mImg.pixels[pixelIndex + 0];
      let greenVal = mImg.pixels[pixelIndex + 1];
      let blueVal = mImg.pixels[pixelIndex + 2];
      // let alphaVal = mImg.pixels[pixelIndex + 3];

      fill(redVal, greenVal, blueVal); 
      noStroke();
      // rect(x, y, spacing, spacing);
      ellipse(x, y, spacing, spacing);
    }
  }

  mImg.updatePixels(); // Update all the pixels

  // image(mImg, (width - mImg.width)/2, 0);
}
