"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = "Фриланс";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 100000;
let period = 12;

let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
start();

let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(","));

let expenses = [];

let getExpensesMonth = function () {
  let sum = 0;
  let ans;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt("Введите обязательную статью расходов?");
    do {
      ans = prompt("Во сколько это обойдется?");
      sum = sum + +ans;
    } while (!isNumber(ans));
  }

  console.log(expenses);
  return sum;
};
let expensesAmount = getExpensesMonth();
let getAccumulatedMonth = function () {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function (mission, accumulatedMonth) {
  return mission / accumulatedMonth;
};

let mission2 = Math.ceil(getTargetMonth(mission, accumulatedMonth));

if (mission2 > 0) {
  console.log("Цель будет достигнута за " + mission2 + " месяца.");
} else if (mission2 <= 0) {
  console.log("Цель не будет достигнута.");
}

let budgetDay = Math.floor(accumulatedMonth / 30);

console.log("Расходы за месяц: " + expensesAmount);
console.log("Период равен " + period + " месяцев.");
console.log("Цель заработать " + mission + " рублей.");
console.log("Доход в месяц: " + money);
console.log("Бюджет на месяц: " + getAccumulatedMonth());
console.log("Бюджет в день: " + budgetDay);

let getStatusIncome = function () {
  if (budgetDay > 1200) {
    return "У Вас высокий уровень дохода.";
  } else if (budgetDay >= 600 && budgetDay <= 1200) {
    return "У Вас средний уровень дохода.";
  } else if (budgetDay <= 600 && budgetDay >= 0) {
    return "У Вас низкий уровень дохода.";
  }
  if (budgetDay < 0) {
    console.log("Что-то пошло не так.");
  }
};
