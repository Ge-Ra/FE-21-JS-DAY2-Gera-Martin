function radian(degree) {
  var pi = Math.PI;
  let sum = degree * (pi / 180);
  return `If user passes ${degree} degrees it should get the result of ${sum} radians`

}

console.log(radian(90));