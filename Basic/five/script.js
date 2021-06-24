function calculater(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  let br = "<br>";
  return "The area of the box is:" + area + br +
    "The volume of the box is:" + volume
}

console.log(calculater(1, 2, 3));
document.write(calculater(1, 2, 3));