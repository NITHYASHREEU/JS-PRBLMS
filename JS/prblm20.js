function getNthElement(array, n){
  if (array.length === 0){
    return undefined;
  }
  return array[n];
}

console.log(getNthElement([1, 3, 5],[1, 5, 6]));
console.log(getNthElement([1, 3, 5], 1));