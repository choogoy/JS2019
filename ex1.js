var money = prompt ('Ваш бюджет на месяц?', 25000);
var time = prompt ('Введите дату в формате YYYY-MM-DD', '2019-08-08');
var optionalExpenses;

var appData = {
	money,
	timeData: time,
	expenses: {},
	optionalExpenses,
	income: {},
	savings: false
}
appData.expenses[0] = prompt ('Введите обязательную статью расходов в этом месяце', 'Продукты');
appData.expenses[1] = prompt ('Во сколько обойдется?', 15000);

alert('бюджет на 1 день: ' + Math.round(Number(money)/30));