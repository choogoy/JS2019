var money;
var time;

money = prompt ('Ваш бюджет на месяц?', 25000);
time = prompt ('Введите дату в формате YYYY-MM-DD', '2019-08-08');

var timeData = time;
document.write(money);
document.write(time);

var expenses, optionalExpenses, income;

var appData = {
	money,
	timeData: time,
	expenses: {},
	optionalExpenses,
	income: {},
	savings: false
}

console.log(appData.expenses);

push.appData.
push.appData.expenses[0] = prompt ('Введите обязательную статью расходов в этом месяце', 'Продукты');

push.expenses[1] = prompt ('Во сколько обойдется?', 15000);

alert (money/expenses[1]);
