// script.js
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(10 + sin(t) * 2);
  fill(255, 0, 100);
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let r = 16 * pow(sin(a), 3);
    let x = r * cos(a);
    let y = -(
      13 * cos(a) -
      5 * cos(2 * a) -
      2 * cos(3 * a) -
      cos(4 * a)
    );
    vertex(x, y);
  }
  endShape(CLOSE);
  t += 0.05;
}

// Password protection
window.onload = () => {
  const password = prompt("Enter the secret code to view the heart:");
  if (password !== "mySecret123") {
    document.body.innerHTML = "<div id='access-denied'>Access Denied 💔</div>";
  }
};
