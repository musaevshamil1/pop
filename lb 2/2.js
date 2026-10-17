const numbers = [4, 8, 15, 16, 23, 42];
let sum = 0
let max = 0 
let num2 = []
for (let i = 0; i < numbers.length; i++) {
sum += numbers[i]
if (numbers[i] > max) max = numbers[i];
if (numbers[i] > 10) num2.push(numbers[i]);
}
console.log('сумма:', sum)
console.log('максимальное:', max)
console.log('больше 10:', num2)

const summ = numbers.reduce((all, n) => all + n, 0);
const maxx = Math.max(...numbers);
const num3 = numbers.filter(n => n > 10);
console.log('сумма:', summ)
console.log('максимальное:', maxx)
console.log('больше 10:', num3)