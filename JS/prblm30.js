function getPrimes(nPrimes, startAt){
  let primes = [];
  let i = startAt + 1;

  while (primes.length < nPrimes) {
    if(isPrime(i)){
      primes.push(i);
    }
    i++;
  }
  return primes;
}
function isPrime(num){
  if(num < 2) return false;
  for(let j=2; j <=Math.sqrt(num); j++){
    if(num % j === 0)return false;
  }
  return true;
}
console.log(getPrimes(10, 100));