const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce(function(total, number) {
    return total * number;
}, 1);

console.log(result);