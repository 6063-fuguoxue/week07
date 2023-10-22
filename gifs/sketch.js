class Sprite {
  constructor(_x, _y, _imgs) {
    this.x = _x;
    this.y = _y;
    this.imgs = _imgs;
    this.spriteIndex = 0;
    this.delay = random(80, 160);
    this.lastUpdated = 0;
  }
  draw() {
    if (millis() > this.lastUpdated + this.delay) {
      this.spriteIndex += 1;
      if (this.spriteIndex >= this.imgs.length) {
        this.spriteIndex = 0;
      }
      this.lastUpdated = millis();
    } 
    
    let mImg = this.imgs[this.spriteIndex];

    image(mImg, this.x, this.y);
  }
}

let spriteInfo = [
  { name: "finn", imgCnt: 7, imgs: [] },
  { name: "ice-king", imgCnt: 6, imgs: [] },
  { name: "jake", imgCnt: 6, imgs: [] },
  { name: "princess-muscles", imgCnt: 7, imgs: [] },
];

function preload() {
  for (let si = 0; si < spriteInfo.length; si++) {
    for (let ii = 0; ii < spriteInfo[si].imgCnt; ii++) {
      let sName = spriteInfo[si].name;
      let sImg = loadImage("./sprites/"+sName+"/tile00"+ii+".png");
      spriteInfo[si].imgs.push(sImg);
    }
  }
}

let mSprites = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);
  for (let i = 0; i < mSprites.length; i++) {
    mSprites[i].draw();
  }
  
}

function byY(spriteA, spriteB) {
  return spriteA.y - spriteB.y; // sort sprites by Y values
}

function mouseClicked() {
  let chosenSprite = random(spriteInfo);
  mSprites.push(new Sprite(mouseX, mouseY, chosenSprite.imgs));
  mSprites.sort(byY);
}