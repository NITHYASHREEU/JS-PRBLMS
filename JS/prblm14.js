function isEven(num){
  if (typeof num !=='number' || isNaN(num)){
  return false;
}
return num % 2 ===0;
}
let even1 = isEven(5)
let even2 = isEven(12)
let even3 = isEven(0)
let even4 = isEven(11)
let even5 = isEven("11h")
console.log(even1);
console.log(even2);
console.log(even3);
console.log(even4);
console.log(even5);
