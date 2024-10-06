function addProperty(obj, key){
  obj[key] = true;
  console.log(obj);
}

let obj = {};
addProperty(obj, "mykey");
