var ps;

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem();
}

function draw() {
  if(mouseIsPressed) {
    ps.addParticles(
      createVector(mouseX, mouseY), 10);
  }
  background(200);
  ps.draw();
}
