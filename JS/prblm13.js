function divisibleByFive(num1){
  return num1 % 5===0;
}

let divisible1 = divisibleByFive(5)
let divisible2 = divisibleByFive(-55)
let divisible3 = divisibleByFive(37)

console.log(divisible1);
console.log(divisible2);
console.log(divisible3);