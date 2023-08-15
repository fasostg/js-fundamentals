// tipo de dado

// conversão implícita
const number = 456;
const numberString = "456";

console.log(number===numberString);
console.log(number==numberString);

console.log(number+numberString);

// conversão explícita
console.log(number+Number(numberString));