function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  let x = width/2;
  let y = mouseY;
  let c = mouseX
  let headsize = 70;
  let hr = headsize/2;
  let manheight = 200;
  let leftarm = 70
  let rightarm = 300
  let rightleg = 300
  let leftleg = 300
  
  line(x,y,c,y)
  
  
  circle(c+x,y,headsize);
  line(c+x,y+hr,c+x,y+hr+manheight);
  line(c+x,y+manheight/2, c+leftarm,y+hr);
  line(c+x,y+manheight/2,c+rightarm,y+hr);
  line(c+x,y+manheight+hr,c+rightarm,y+rightleg);
  line(c+x,y+manheight+hr,c+leftarm,y+leftleg);
  
}