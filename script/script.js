"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

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
  mission: 100000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    let totall = 0;
    for (let key in appData.expenses) {

      totall += appData.expenses[key];

    }
    return totall;
  },

  getBudget: function () {
    return appData.budget - appData.expensesMonth;
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.getBudget());
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      return "У Вас высокий уровень дохода.";
    } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1200) {
      return "У Вас средний уровень дохода.";
    } else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
      return "У Вас низкий уровень дохода.";
    }
    if (appData.budgetDay < 0) {
      console.log("Что-то пошло не так.");
    }
  },
  asking: function () {
    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");

    appData.deposit = confirm("Есть ли у вас депозит в банке?");


    let ans;
    for (let i = 0; i < 2; i++) {
      let expenses = prompt("Введите обязательную статью расходов?");
      do {
        ans = prompt("Во сколько это обойдется?");
      } while (!isNumber(ans));

      appData.expenses[expenses] = +ans;
    }


  },
};

appData.asking();
console.log(appData);
appData.expensesMonth = appData.getExpensesMonth();
appData.budgetMonth = appData.getTargetMonth;
appData.budgetDay = Math.floor(appData.getBudget() / 30);


if (appData.getTargetMonth() > 0) {
  console.log("Цель будет достигнута за " + appData.getTargetMonth() + " месяца.");
} else if (appData.getTargetMonth() <= 0) {
  console.log("Цель не будет достигнута.");
}

console.log("Расходы за месяц: " + appData.expensesMonth);
console.log("Период равен " + appData.period + " месяцев.");
console.log("Цель заработать " + appData.mission + " рублей.");
console.log("Доход в месяц: " + money);
console.log("Бюджет на месяц: " + appData.getBudget());
console.log("Бюджет в день: " + appData.budgetDay);

console.log(appData.getStatusIncome());