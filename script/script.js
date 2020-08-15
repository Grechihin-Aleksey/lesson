"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
let getExpensesMonth;
let money;
let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};
start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  getAccumulatedMonth: function () {
    return money - expensesAmount;
  },
  getTargetMonth: function () {
    return appData.mission / accumulatedMonth;
  },
  getStatusIncome: function () {
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
  },
  asking: (getExpensesMonth = function () {
    let sum = 0;
    let ans;
    for (let i = 0; i < 2; i++) {
      expenses = prompt("Введите обязательную статью расходов?");
      do {
        ans = prompt("Во сколько это обойдется?");
      } while (!isNumber(ans));
      sum = sum + +ans;
      appData.expenses[expenses] = ans;
    }
    return sum;
  }),
  function() {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");

    appData.deposit = confirm("Есть ли у вас депозит в банке?");
  },
};

appData.asking();
console.log(appData);

let expenses = [];

let expensesAmount = appData.getExpensesMonth();

let accumulatedMonth = appData.getAccumulatedMonth();

let mission2 = Math.ceil(
  appData.getTargetMonth(appData.mission, accumulatedMonth)
);

if (mission2 > 0) {
  console.log("Цель будет достигнута за " + mission2 + " месяца.");
} else if (mission2 <= 0) {
  console.log("Цель не будет достигнута.");
}

let budgetDay = Math.floor(accumulatedMonth / 30);

console.log("Расходы за месяц: " + expensesAmount);
console.log("Период равен " + appData.period + " месяцев.");
console.log("Цель заработать " + appData.mission + " рублей.");
console.log("Доход в месяц: " + money);
console.log("Бюджет на месяц: " + appData.getAccumulatedMonth());
console.log("Бюджет в день: " + budgetDay);

console.log(appData.getStatusIncome());
