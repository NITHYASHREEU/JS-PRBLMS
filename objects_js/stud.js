let students = [
  { name: "Siddharth Abhimanyu", age: 21}, 
  { name: "Malar", age: 25},
  { name: "Maari",age: 18},
  { name: "Bhallala Deva",age: 17},
  { name: "Baahubali",age: 16},
  { name: "AAK chandran",age: 23},
  { name:"Gabbar Singh",age: 33},
  { name: "Mogambo",age: 13},
  { name: "Munnabhai",age: 40},
  { name: "Sher Khan",age: 20},
  { name: "Chulbul Pandey",age: 19},
  { name: "Anthony",age: 28},
  { name: "Devdas",age: 56}
  ];
  function returnMinors(arr)
  {
    return arr.filter(students => students.age < 20);
  }
  console.log(returnMinors(students));