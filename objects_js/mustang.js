function fromListToObject(arr) {
  let newObject = {};
  for (let i = 0; i < arr.length; i++) {
    let [key, value] = arr[i];
    newObject[key] = value;
  }
  return newObject;
}
let arr = [["make", "Ford"],["model", "Mustang"],["year", 1964]];
console.log(fromListToObject(arr));