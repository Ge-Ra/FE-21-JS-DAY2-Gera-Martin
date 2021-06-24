function ageCalculator(birthYear, currentYear){
         let age = currentYear - birthYear;
         let ageMinusOne = age -1;
         return `You are either ${age} or ${ageMinusOne}`
}

console.log(ageCalculator(1980, 2021));


