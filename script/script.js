"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = function (n) {
  return !isNaN(parseFloat(n)) || n === null || n.trim() === "";
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
  percentDeposit: 0,
  moneyDeposit: 0,
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
    appData.expensesMonth = totall;
    return totall;
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(appData.mission / appData.getBudget);
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
    if (confirm("Есть ли у Вас дополнительный источник заработка?")) {
      let ItemIcome;
      let cashIcome;
      do {
        ItemIcome = prompt("Какой у Вас дополнительный заработок?", "Таксую");
      } while (
        !isNaN(ItemIcome) ||
        ItemIcome.trim === " " ||
        ItemIcome === null
      );
      do {
        cashIcome = prompt(
          "Сколько в месяц Вы на этом зарабатываете?",
          "10000"
        );
      } while (!isNumber(cashIcome));
      appData.income[ItemIcome] = cashIcome;
    }

    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses = addExpenses.toLowerCase().split(",");

    appData.deposit = confirm("Есть ли у вас депозит в банке?");

    let ans;
    let expenses;
    for (let i = 0; i < 2; i++) {
      do {
        expenses = prompt("Введите обязательную статью расходов?");
      } while (isString(expenses));
      do {
        ans = prompt("Во сколько это обойдется?");
      } while (!isNumber(ans));

      appData.expenses[expenses] = +ans;
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt("Какой годовой процент?", "10");
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt("Какая сумма заложена?", "10000");
      } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSaveMoney: function () {
    return appData.budgetMonth * appData.period;
  },
};

appData.asking();
console.log(appData);
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getInfoDeposit();

if (appData.getTargetMonth() > 0) {
  console.log(
    "Цель будет достигнута за " + appData.getTargetMonth() + " месяца."
  );
} else if (appData.getTargetMonth() <= 0) {
  console.log("Цель не будет достигнута.");
}

console.log("Расходы за месяц: " + appData.expensesMonth);
console.log("Период равен " + appData.period + " месяцев.");
console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key, appData[key]);
}
let res = "";
for (let item of appData.addExpenses) {
  item = item.trim();
  item = item[0].toUpperCase() + item.slice(1);
  res += item + " ,";
}
console.log(res);
