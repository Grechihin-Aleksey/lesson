"use strict";

let money = +prompt("Ваш месячный доход?");
let income = "Фриланс";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 100000;
let period = 12;
let expenses1 = prompt("Введите обязательную статью расходов?");
let expenses2 = prompt("Введите еще одну обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let amount2 = +prompt("Еще вариант: во сколько это обойдется?");

let getExpensesMonth = function (amount1, amount2) {
  return amount1 + amount2;
};

let amount3 = getExpensesMonth(amount1, amount2);

let getAccumulatedMonth = function (money, amount3) {
  return money - amount3;
};

let accumulatedMonth = (money, amount3);

let getTargetMonth = function (mission, accumulatedMonth) {
  return mission / accumulatedMonth;
};

let mission2 = Math.ceil(getTargetMonth(mission, accumulatedMonth));

let budgetDay = Math.floor(accumulatedMonth / 30);

console.log("Расходы за месяц: " + amount3);
console.log("Период равен " + period + " месяцев.");
console.log("Цель заработать " + mission + " рублей.");
console.log(addExpenses.toLowerCase().split(","));
console.log("Доход в месяц: " + money);
console.log("Бюджет на месяц: " + accumulatedMonth);
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
