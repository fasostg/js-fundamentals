function shows(name) {
    return `my name is ${name}`;
}

//Arrow function
const showsArrow = nome => `my name is ${name}`;
const soma = (num1, num2) => num1+num2;

const somaNumerosPequenos = (num1, num2) => {
    if(num1 < 10 && num2 < 10) {
        return num1+num2;
    }
    else {
        return new Error("DEU MERDA");
    }
}

console.log(somaNumerosPequenos(1,21));