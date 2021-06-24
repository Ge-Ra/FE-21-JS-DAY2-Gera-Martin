const grade = (math, physics, english)=>
  {
  let sum = (math + physics + english);
  let average = sum / 3;
  let arr = [sum, average];
  return arr
}
  
console.log(grade(3, 4, 5)[0], grade(3, 4, 5)[1]);
document.write(`${ grade(3,4,5)[0]} ${ grade(3,4,5)[1]}`);