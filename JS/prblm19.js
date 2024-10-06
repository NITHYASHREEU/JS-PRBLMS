function getDistance(x1,y1,x2,y2){
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
console.log(getDistance(100,100,400,300));