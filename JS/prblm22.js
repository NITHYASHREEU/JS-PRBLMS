function getProperty(obj, key){
  return obj[key];
}
let obj ={
  mykey: "value"};
let obj1 ={dummykey: "variables"};

console.log(getProperty(obj, 'mykey'));
console.log(getProperty(obj1, 'dummykey'));