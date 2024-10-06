function convertObjectToList(obj) {
  return Object.entries(obj);
}
let obj = {name: "ISRO", age:35, role: "Scientist"};
console.log(convertObjectToList(obj));