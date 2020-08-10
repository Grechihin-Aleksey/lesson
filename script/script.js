"use strict";

let money = +prompt("Ваш месячный доход?");
console.log(typeof money);
let income = "Фриланс";
//console.log(typeof income);
//let addExpenses = "Интернет, Такси, Коммуналка";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
//console.log(addExpenses.length);
let deposit = confirm("Есть ли у вас депозит в банке?");
//console.log(typeof deposit);
let mission = 100000;
let period = 12;

let expenses1 = prompt("Введите обязательную статью расходов?");
let expenses2 = prompt("Введите еще одну обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let amount2 = +prompt("Еще вариант: во сколько это обойдется?");

let budgetMonth = money - amount1 - amount2;
let budgetDay = Math.floor(budgetMonth / 30);
let mission2 = Math.ceil(mission / budgetMonth);

console.log("Период равен " + period + " месяцев.");
console.log("Цель заработать " + mission + " рублей.");
console.log(addExpenses.toLowerCase().split(","));
console.log("Доход в месяц: " + money);
console.log("Бюджет на месяц: " + budgetMonth);
console.log("Бюджет в день: " + budgetDay);
console.log("Цель будет достигнута за " + mission2 + " месяца.");

if (budgetDay > 1200) {
  console.log("У Вас высокий уровень дохода.");
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log("У Вас средний уровень дохода.");
} else if (budgetDay <= 600 && budgetDay >= 0) {
  console.log("У Вас низкий уровень дохода.");
}
if (budgetDay < 0) {
  console.log("Что-то пошло не так.");
}
