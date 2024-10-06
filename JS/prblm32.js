function mergeArrays(ar1, ar2){
  let result = [];
  for(let el of ar1){
    result.push(el);
  }
  for (let el of ar2){
    result.push(el);
  }
  return result;
}
let ar1 = [1,2,3];
let ar2 = [4,5,6];
let ar = mergeArrays(ar1, ar2);
console.log(ar);