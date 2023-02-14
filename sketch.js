let f = 0.0;
let f2 = 0.0;
let spc;
let numIters;
let clrR = 0, clrG = 0, clrB = 0;

function setup() {
  createCanvas(800, 800);
  background(20);
  // our grid spacing
  numIters = 3;
  spc = width / numIters;
  ellipseMode(CENTER);
}


function draw() {
  if (frameCount >= 0 && frameCount < 200) {
    // background(220);
    stroke(clrR, clrG, clrB);
    clrR += 1;
    clrG += 6;
    clrG += 3;
    nioseDraw();
  }
  else if (frameCount >= 200 && frameCount < 400) {
    // background(220);
    stroke(clrR, clrG, clrB);
    clrR += 3;
    clrG -= 3;
    clrB -= 4;
    nioseDraw();
  }
  else if (frameCount >= 400 && frameCount < 600) {
    // background(220);
    stroke(clrR, clrG, clrB);
    clrR -= 2;
    clrG += 2;
    clrB += 1;
    nioseDraw();
  }
  else {
    // background(220);
    stroke(clrR, clrG, clrB);
    clrR++;
    clrB++;
    nioseDraw();
  }
}

function nioseDraw() {
  for (let i = 0; i < numIters; i++) {
    for (let j = 0; j < numIters; j++) {
      // push and pop matrix so that we dont cumulatively translate 

      push();

      // move to the current location in the grid
      translate(spc / 2 + i * spc, spc / 2 + j * spc);

      // drawAMohr(i + 1, j + 1);
      circleMohr();
      squareMhor(i + 1, j + 1);
      squareMhor2(i + 1, j + 1);


      pop();

    }
  }
  f += 0.09;
  f2 += 0.01;
}

function ijSlc(i) {
  switch (i) {
    case 0:
      return random(0, 5);
    case 1:
      return random(20, 40);
    case 2:
      return random(-60, -80);
  }
}
function drawAMohr(i, j) {


  beginShape();
  for (let k = 0; k < 15; k++) {

    vertex(noise(k * j, i + f) * spc - spc / 2,
      noise(i, j * k + f) * spc - spc / 2);
  }


  endShape();
}
function circleMohr() {
  fill(random(0, 170), random(130, 200), random(150, 255))
  beginShape();
  let size = noise(f) * (spc);
  ellipse(0, 0, size);
  // circle(i * spc - spc / 2, noise(f) *(j * spc - spc / 2), size);
  endShape();


}

function squareMhor(i, j) {
  push();

  //fill(155, 166, 188);
  fill(255);
  square(noise(i, j + f) * spc - spc / 2,
    noise(j, i + f) * spc - spc / 2, 10);

  pop();
}

function squareMhor2(i, j) {
  let agl = noise(f2);
  rotate(noise(agl));
  noFill();
  rect(noise(i, j + f) * spc - spc / 2,
    noise(j, i + f) * spc - spc / 2,
    30);
}




