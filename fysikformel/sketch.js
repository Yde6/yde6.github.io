let n = 1;
let h = 6.63e-34;
let c = 3.00e8;
let R = 1.09e7;

function setup() {
  console.log("START");
}

function draw() {
 console.log(-h*c*R*1/n);
  if(n < 10){
    n++;

  }else if(n >10){
noloop();
}
}

