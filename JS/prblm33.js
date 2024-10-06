function sumCSV(s) {
  return s.split(',').reduce((acc, num) => acc + parseFloat(num.trim()),0);
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5 6, 7, 8, 9,10.9"));