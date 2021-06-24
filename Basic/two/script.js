function ageCalculator(birthYear) {
  var year = new Date();
  var exactYear = year.getFullYear();
  let age = exactYear - birthYear;
  let ageMinusOne = age - 1;
  return `You are either ${age} or ${ageMinusOne}`;
}

console.log(ageCalculator(1980, 2021));
