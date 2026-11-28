// Task one: 
// Combine two arrays into one array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);

// task two:
// Using the Rest Parameter (...)
function multiply(...numbers) {
    return numbers.reduce((total, number) => total * number, 1);
}

console.log(multiply(2, 3));
console.log(multiply(2, 3, 4));
console.log(multiply(1, 2, 3, 4, 5));