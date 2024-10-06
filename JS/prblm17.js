function getLengthOfWord(word1){
  if (typeof word1 !=="string"){
    return -1;
  }
  return word1.length;
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));