let num = 5;
function getOpposite(num){
  if(typeof num === 'number')
    { 
      return -num;
}
else{
  return -1;
}
}
let result1 = getOpposite(5);
let result2 = getOpposite(0);
let result3 = getOpposite(-5);
let result4 = getOpposite("5a");
let result5 = getOpposite(5.5);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);