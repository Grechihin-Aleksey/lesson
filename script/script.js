let money = 50;
console.log(typeof money);
const income = "Фриланс";
console.log(typeof income);
let addExpenses = "Интернет, Такси, Коммуналка";
console.log(addExpenses.length);
const deposit = false;
console.log(typeof deposit);
const mission = 100;
let period = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let numbers = [];
for (let i = 1; i <= 12; i++) {
  numbers.push(i);
}

//Или при помощи цикла for

let budgetDay = money / 30;

console.log(numbers);

console.log("Период равен " + period[11] + " месяцев.");
console.log("Цель заработать " + mission + " рублей.");
console.log(addExpenses.toLowerCase().split(","));
console.log(budgetDay);
