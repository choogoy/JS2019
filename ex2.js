let money = prompt('Ваш бюджет на месяц?'), // надо бы добавить проверку на правильность ввода данных...
	time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
}

let err = 0; //счетик количества неправильных вводов данных :)

for (let i = 0; i < 2; i++) {

    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?');
            
     if ((typeof(a))==='string' && (isFinite(a)) === false && (isFinite(b)) === true && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i-=1;
        err++;
        alert('Вводите корректные данные! Количество ошибок: ' + err);
        console.log('error: ' + err);
    }
}

console.log(appData.expenses); // вывод в консоль объекта 'expenses'

appData.moneyPerDay = appData.budget / 30;

alert("Ваш ежедневный бюджет: " + Math.round(appData.moneyPerDay)); // округление результата