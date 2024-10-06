function transformFirstAndLast(arr){
  if (arr.length < 2) {
    throw new Error("Array must have at least two elements");
  }
  let newObject = {};
  newObject[arr[0]] = arr[arr.length-1];

  return newObject;
}
let arr = ["Hi","I","am","Geek"];
console.log(transformFirstAndLast(arr));