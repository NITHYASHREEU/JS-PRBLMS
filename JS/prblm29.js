function printPrimes(nPrimes){
  let n=0;
  let i=2;
  while (n< nPrimes) {
    if (isPrime(i)) {
      console.log(n + 1," => ", i);
      n++;
    }
    i++;
  }
}
function isPrime(num){
  if(num < 2) return false;
  for (let j=2; j<=Math.sqrt(num); j++){
    if(num % j === 0) return false;
  }
  return true;
}
printPrimes(100);