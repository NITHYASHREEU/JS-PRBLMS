let ar22 = function countPositiveSumNegatives(arr){
  if(arr === null || arr.length === 0){
    return [];
  }
  let countPositives = 0;
  let sumNegatives = 0;

  arr.forEach((num) => {
    if(num > 0){
      countPositives++;
    }else if (num < 0){
      sumNegatives += num;
    }
  });

  return [countPositives,sumNegatives];
}
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
console.log(ar22(arr));
    
