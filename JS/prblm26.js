function getPositive(ar) {
  return ar.filter(num => num > 0);
}
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar2 = getPositive(ar);
console.log(ar2);