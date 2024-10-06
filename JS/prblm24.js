function removeProperty(obj,key){
  delete obj[key];
}

let obj = { name: "John", age: 30};
console.log(removeProperty(obj, "name"));
console.log(obj);