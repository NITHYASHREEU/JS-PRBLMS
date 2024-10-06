function frames(num1, num2){
  return num1*60*num2;
}
let fps1 = frames(1,1);
let fps2 = frames(10,1);
let fps3 = frames(1,2);
console.log(fps1);
console.log(fps2);
console.log(fps3);
