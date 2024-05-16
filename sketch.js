function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
  
    stroke("grey");
    fill("black");
  
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20,30);
    }
  }