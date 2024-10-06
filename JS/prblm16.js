function getFullName(firstName,lastName){
  if (!firstName) firstName = "";
  if (!lastName) lastName = "";
  return (firstName + " " + lastName);
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI",));
console.log(getFullName("","GEEK"));
console.log(getFullName("",""));