function powersofTwo(n){
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(2**i);
  }
  return res;
}
console.log(powersofTwo(0));
console.log(powersofTwo(1));
console.log(powersofTwo(2));