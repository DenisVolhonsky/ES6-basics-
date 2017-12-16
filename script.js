// // lesson---1
//
// "use strict";
// // Для объявления переменной используется ключевые слова var, let и const за которыми следует имя переменной.
// var firstNumber;
// let secondNumber;
// // Переменные объявленые используя const обязательно должны быть инициализированы значение во время объявления, иначе будет ошибка
// const thirdNumber = 15;
//
// // После объявления, можно записать в переменную значение.
// firstNumber = 5;
// secondNumber = 10;
// // Помним о том что нельзя перезаписать значение переменной объявленой используя const
// // thirdNumber = 666;  !!!!!!!!!!!!!!!!!!!
//
// //После присваивания значений
// console.log('Первое число: ', firstNumber);
// console.log('Второе число: ', secondNumber);
// console.log('Третье число: ', thirdNumber);
//
// // Результат работы confirm и promp мы можем записать в переменную.
// // В дальнейшем мы научимся проверять введенные данные, выбраную опцию и т.д.
//
// // Мы можем попросить клиента подтвертить бронь на отель
// // const isComing = confirm('Please confirm hotel reservation');
// // console.log(isComing);
//
// // Тут мы можем спросить имя отеля в котором хотел бы остановится клиент
// // const hotelName = prompt('Please enter desired hotel name:', '');
// // console.log(hotelName);
//
// // остаток от деления
// console.log(9 % 4); // 1
// console.log(13 % 5); // 3
//
// // Научный формат, <число>e<количество нулей>
// console.log( 2e3 ); // 2000
// // Если количество нулей отрицательно, то число сдвигается вправо за десятичную точку, так что получается десятичная дробь
// console.log( 2e-3 ); // 0.002
//
// // Преобразование к числу
// const num = "14.57";
// console.log( +num ); // 14.57
// console.log( +"12test" ); // NaN
// console.log( '10' / "-2" ); // -5
// console.log( parseInt('10px') ); //10
// console.log( parseFloat('10.5.5') ); // 10.5
// console.log( parseInt('a12345') ); // NaN
// console.log( isNaN('hello') ); //true
// console.log( isNaN(123) ); //false
//
// console.log( 0.1 + 0.2 === 0.3); //false
// console.log(0.1 + 0.2);
// console.log( +0.33333333333.toFixed(3) );
//
// const message = 'Welcome to Bahamas!';
//
// console.log(message.length); // 19
// console.log('Любой метод или свойство можно использовать непосредственно на строчном литерале'.length); //80
//
//
// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!
//
// console.log(message.charAt(0)); // W
// console.log(message.charAt(5)); // m
//
// // Все методы строки чувствительны к регистру
// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1
//
// console.log(message.startsWith('Welcome')); // true
// console.log(message.startsWith('welcome')); // false
// console.log(message.startsWith('Bahamas')); // false
//
// console.log(message.endsWith('Welcome')); // false
// console.log(message.endsWith('Bahamas')); // false
// console.log(message.endsWith('Bahamas!')); // true
//
// console.log(message.includes('welcome')); //false
// console.log(message.includes('Welcome')); //true
//
// const whiteSpaceString = '    A lot of whitespace    ';
// console.log('whiteSpaceString: ', whiteSpaceString); //     A lot of whitespace
// console.log('whiteSpaceString.trim():', whiteSpaceString.trim()); // A lot of whitespace
//
//
// // split
// const message1 = "Welcome to Bahamas!";
//
// console.log(message1.split(" ")); // ["Welcome", "to", "Bahamas!"]
//
// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message1.split(""));
//
// // join
// const clients2 = ["Mango", "Poly", "Ajax"];
//
// console.log( clients2.join(" ")); // "Mango Poly Ajax"
// console.log( clients2.join(",")); // "Mango,Poly,Ajax"
// console.log( clients2.join("-")); // "Mango-Poly-Ajax"
//
// // На помощь приходят шаблонные строки и интерполяция
// // `My name is ${name}, I'm ${age} years old and very ${mood}.`;
//
//
// // lesson---2
//
// let name = 'asd';
//
// // тернарный оператор
// name === 'asd'? console.log('asd') : console.log('not asd');
//
// // медленнее чем if else
// switch(name) {
//     case 'asd':
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default:
//         console.log('Else!');
// }
//
// // Math
// console.log(Math.random());
// console.log(Math.max(1, 2, 3, 5, 4));
// console.log(Math.min(1, 2, 3, 5, 4));
// console.log(`Math.ceil 1.5: ${Math.ceil(1.5)}`);
// console.log(`Math.floor 1.5: ${Math.floor(1.5)}`);
// console.log(`Math.round 1.5: ${Math.round(1.5)}`);
// console.log(`2 в 3-й степени: ${Math.pow(2,3)}`);
//
// // Array methods
// const clients = ["Mango", "Ajax", "Poly", "Chelsey"];
//
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1
//
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false
//
// const stack = [];
//
// stack.push(1);
// console.log(stack); // [1]
//
// stack.push(2);
// console.log(stack); // [1,2]
//
// stack.push(3);
// console.log(stack); // [1,2,3]
//
// // pop
// console.log(stack.pop()); //  5
// console.log(stack); // [1,2,3,4];
//
// console.log(stack.pop()); //  4
// console.log(stack); // [1,2,3];
//
// console.log(stack.pop()); //  3
// console.log(stack); // [1,2];
//
// console.log(stack.pop()); //  2
// console.log(stack); // [1];
//
// console.log(stack.pop()); //  1
// console.log(stack); // []; -> empty
//
// console.log(stack.pop()); //  undefined
//
// // медленные shift и unshift
// const clients1 = ["Mango", "Ajax", "Poly"];
//
// console.log(clients1.shift()); // Mango
// console.log(clients1); // ["Ajax", "Poly"]
//
// clients.unshift("Chelsey");
// console.log(clients1); // ["Chelsey", "Ajax", "Poly"]
//
//
// //Деструктуризация массивов
//
// // Используем деструктуризирующее присваивание
// // После ключевого слова const или let мы ставим открывающую и закрывающую квадратные скобки
// // Внутри скобок, через запятую, указываем имена переменных в которые будут помещены значение массива
// // После чего мы "присваиваем" этой конструкции массив
// // Что происходит - будут созданы 3 переменные first/second/third и в них будут помещены
// // элементы массива в нумерованом порядке от 0 до конца массива
// // В first будет записано значение из clients[0] итд
// // Если в массиве нету значения для переменной то будет присвоено значение по умолчанию
//
// // Допустим у нас есть массив имен клиентов и мы хотим каждое имя выбрать в
// // отдельную переменную
// const [first, second, third, fourth]=["Mango", "Poly", "Ajax"];
//
// console.log("first: ", first);
// console.log("second: ", second);
// console.log("third: ", third);
// console.log("fourth: ", fourth);
//

// // Деструктуризация массивов
// const clients = ["Mango", "Poly", "Ajax"];
// [first,second,third,fourth] = clients;
//
// console.log("firstName: ", first);
// console.log("secondName: ", second);
// console.log("thirdName: ", third);
// console.log("fourthName: ", fourth); // undefined
//
//
// // Вспомним про операцию a % b и выведем остаток от деления используя цикл
// for(let i = 0, max = 10; i < max; i += 1) {
//     console.log(`${max} % ${i} = ${max % i}`);
// }



// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];
//
// for(let value of clients) {
//     console.log(value);
// }
//
// // Итерация по строке
// const iterable = 'javascript';
//
// for (const value of iterable) {
//     console.log(value);
// }

// Далее в курсе мы познакомимся с такими коллекциями как Map, Set и Arguments.
// Их можно перебирать с помощью for...of


// //================================================
// //break, continue
// // Давайте искать имя клиента в массиве имен, если нашли прервем цикл так как нет смысла искать дальше, имена у нас уникальные
// const clients = ["Mango", "Poly", "Ajax"];
// const clientName = "Poly";
// let resultMessage = "";
//
// // На каждой итерации мы будем проверять совпадает ли элемент массива с именем
// // Если совпадает то мы записываем в resultMessage сообщение об успехе и делаем break чтобы не искать дальше
// // Если они не совпадают то запишем в resultMessage сообещние об отсутсвии имени
// // Уберите break и посмотрите что в результате запишется в resultMessage если имя клиента не стоит последним
// // в массиве, всегда будет сообщение о отуствии имени. Так как даже после того как будет совпадение, цикл
// // продолжит выполнение и последующие несовпадения перезапишут resultMessage
// for (const value of clients) {
//     if (value === clientName) {
//         resultMessage = "Клиент с таким именем есть в базе данных!";
//         break;
//     }
//     resultMessage = "Клиента с таким именем нету в базе данных!";
//
// }
// console.log(resultMessage);
//
// // PS: Можно изначально задать resultMessage значение неудачи поиска, а в цикле перезаписать ее на успех если
// // нашли имя. Но break всеравно пригодится, так как если у нас массив из 10000 клиентов а нужный нам стоит
// // на позиции 2, то нет абсолютно никакого смысла перебирать оставшиеся 9998 элементов.
//
//
// //================================================
// // Используем цикл для вывода только нечетных чисел!
// // Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на
// // следующий проход for.
// const number = 10;
// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) continue;
//     console.log("Нечетное i: ", i);
// }
//


//////////////Функции//////////////


// let outerString = "Меня видно внутри и снаружи. ";
//
// function hide () {
//     let innerString = "Меня видно внутри. ";
//     console.log("In: outerString said - " + outerString);
//     console.log("In: innerString said - " + innerString);
// }
// hide ();
// console.log("Out: outerString said - " + outerString);
// console.log("Out: innerString said - " + innerString);



// ES6 Параметры функции по умолчанию
function showTestHowrs(str = "неизвестно", num = 30) {
    let testHowrs = num,
        name = str;
    return `Имя студента(ки) ${name}, использовано ${testHowrs} тестовых часа(ов)`;
}
console.log(showTestHowrs());
console.log(showTestHowrs("Анна", 0));
// "Имя студента(ки) неизвестно, использовано 30 тестовых часа(ов)"
// "Имя студента(ки) Анна, использовано 0 тестовых часа(ов)"

// hoisting
function foo () {
    let top;
    console.log(`top is ${top}`);  // "top is undefined"
    top = "top";
    console.log(`top is ${top}`);  // "top is top;"
}
foo();


// Функция-объявление
f1();
function f1() {
    console.log(`Функция-объявление`);
}

// функция-выражение
// f2(); в отличие от функции-объявления вызов функции до ее объявления приведет к ошибке "TypeError: ... is not a function".
const f2 = function() {
    console.log(`функция-выражение`);
}
f2();

// return без значения
function showMovie(age) {
    if (age<17) {
        alert( "Фильм не для всех" );
        return; // прерывает выполнение функции
    }

    alert( "Добро пожаловать!" );
}
showMovie(17);

// пример 2
const countDownFrom = function recursionFoo (n) {   // Именнованая функция-выражение
    if (n < 0) return; //выход
    console.log(`recursionFoo =  ${n}`);  // рекурсия
    recursionFoo(n - 1);
};
countDownFrom(5);

// Анонимная функция хороша тем что ее имя сразу удаляется сборщиком мусора



// Стрелочные функции (Arrow functions)
// не явный возврат
const nothing = () => "nothing";   //  fat arrow function
const abs = x => Math.abs(x);
const add = (x, y) => x + y;

console.log(nothing());  // nothing
console.log(abs(-5));    // 5
console.log(add(2, 5)); // 7
// явный возврат
// Если фигурные скобки после символа => стоят, значит необходимо явно задать то, что должна вернуть функция
// - написать слово return и выражение. Это явный возврат - explicit return.
const add1 = (x, y) => {return x + y};
console.log(add1(10, 2)); // 12

// callback-функции

// Функция обратного вызова - это функция,
// переданная в другую функцию в качестве аргумента, где она вызывается внутри тела внешней функции.

function foo1 (callback) {
    return callback();
}
function getOne () {
    return 1;
}
console.log(foo1(getOne)); // 1


// Пример угадай число:
function congratulate (callback) {
    const secretNumber = 5;  // секретное число
    alert(callback(secretNumber));
}

function guessNumber (num) {  //num==secretNumber==5
    let userNumber = +prompt('Введите число');
    return num === userNumber ? "Поздравляем! Вы угадали секретное число" : "Сожалеем! Вы не угадали секретное число";
}

congratulate(guessNumber);