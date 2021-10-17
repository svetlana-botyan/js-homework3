
/*task2 - она же из урока №3 task2
Определить массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.*/

function findPositiveNumbers(array) {
    const ArrayPositive = [];
    for (let item of array) {
        if (item > 0) {
            console.log(item); //2.1 task 
            ArrayPositive.push(item);
        }
    }
    console.log(ArrayPositive); //2.2 task
    return ArrayPositive; //2.3 task
}
const arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]; //2.4 task 
findPositiveNumbers(arr); //2.3 task

console.log(findPositiveNumbers(arr)); // отображаю в консоли все действия функции + return

/*task3 она же из урока №3 task3
Определить массив, например let arr = [5, 4, 3, 8, 0]; и переменную let limit = 5; Создать новый пустой массив. В цикле наполнить его элементами arr, но в новом должны содержаться элементы больше и равные (>=) значения переменной limit.*/

const array3 = [5, 4, 3, 8, 0];

function filterFor(arr, a) {
    const ArrayMoreLimit = [];
    for (let item of arr) {
        if (item >= a) {
            ArrayMoreLimit.push(item);
        }
    }
    return ArrayMoreLimit;
}

console.log(filterFor(array3, 5));
console.log(filterFor(array3, 10));
console.log(filterFor(array3, 3.11));


/*task 4
Описать массив из объектов с двумя полями: строковым и числовым. Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.*/

const details = [
    { name: 'cover', weight: 5.4 },
    { name: 'frame', weight: 1.2 },
    { name: 'body', weight: 10.5 },
    { name: 'screw', weight: 0.5 },
    { name: 'tube', weight: 32.4 }];

function getItemDetail(array) {
    for (let item of array) {
        if (item.weight > 10) console.log(item.name);
    }
}
getItemDetail(details);


/*task5
Задать массив слов. В цикле сформировать массив объектов с ключами word (само слово), length (длина слова)
5.1 Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"*/

function createArray(array) {
    let newWeek = [];
    for (let day of array) {
        newWeek.push({
            word: day,
            length: day.length
        })
    }
    return newWeek
}
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница',];
console.log(createArray(week));

//5.1
function showItem(array) {
    for (let item of array) {
        console.log(item.word + ' - ' + item.length);
    }
}
let array5 = createArray(week);
showItem(array5);

//--------------------------------------------------------------
//task 4 * (задачи из ДЗ №1)

/*Прописать в коде две переменные с числами. Вывести в консоль бОльшее из них. Если они равны, то так и написать 'Значения равны между собой'
1.1*) Устанавливать значения переменных не в коде, а при помощи функции prompt.*/

let number1 = +prompt('Введите первое число', 1);
let number2 = +prompt('Введите второе число', 2);

function showMaxNumber(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    }
    return 'Значения равны между собой';
}
console.log(showMaxNumber(number1, number2))



/*task 2
Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
Задавать количество чисел, которые нужно вывести, при помощи функции prompt.*/

let number = +prompt('Введите количество чисел от 1 до 100', 3);

function showSquareNumber(number) {
    for (let i = 1; i <= number; i++) {
        if (number < 100) {
            console.log(i ** 2);
        } else break;
    }
}
showSquareNumber(number);

// task3
/*3 раза попросить пользователя ввести любое имя. Вывести в диалоговом окне (alert) склеенные имена через пробел (например, "Таня Витя Коля").
3.1**) 3 раза попросить пользователя ввести число. Вывести в диалоговом окне (alert) сумму введенных чисел.*/

let name1 = prompt('Введите имя', 'Петр');
let name2 = prompt('Введите имя', 'Настя');
let name3 = prompt('Введите имя', 'Виктор');

function showNames(name1 = 'Анна', name2 = 'Сергей', name3 = 'Руслан') {
    alert(name1 + ' ' + name2 + ' ' + name3);
}
showNames(name1, name2, name3);
showNames();
//3.1
let value1 = +prompt('Введите число ', '1');
let value2 = +prompt('Введите число', '2');
let value3 = +prompt('Введите число', '3');

function calcSumValues(value1, value2, value3) {
    let sum = value1 + value2 + value3;
    return sum;
}
alert(calcSumValues(value1, value2, value3));

//--------------------------------------------------------------
//Задачи https://www.hackerrank.com/contests/myfreedom-front-2-lesson-2.

// 3. Задать массив чисел. Найти минимальное число в массиве и максимальное. Вывести их в консоль. В input передается массив. 

const input = [2, 4, 1, 3, 29, 7];

function calcMinAndMaxNumber(input) {
    let min = input[0];
    let max = input[0];
    for (let i = 0; i < input.length; i++) {
        if (min > input[i]) min = input[i];
    }
    console.log('Минимальное значение: ' + min);

    for (let i = 0; i < input.length; i++) {
        if (max < input[i]) max = input[i];
    }
    console.log('Максимальное значение: ' + max);
}
calcMinAndMaxNumber(input);

// 4 Задать объект человека со свойствоми name, age, male. Проитерироваться по свойствам объекта и вывести строки вида "имя-свойства - значение-свойства". В input передаются 3 свойства в виде массива.

const man = ["vova", 18, true]

function showPropertyPerson(params) {
    let person = {};
    person.name = params[0];
    person.age = params[1];
    person.male = params[2];
    for (let prop in person) {
        console.log(prop + ' - ' + person[prop])
    }
}
showPropertyPerson(man);

//5 На вход подается массив имен. Запустить цикл, перебирающий этот массив. Соединить имена в этом массиве следующим образом: если в массиве одно имя, то зафиксировать только его: "Erlich". Если имен 2, то связать через 'and', пример: "Erlich and Dinesh". Если имен больше 2, то первые слова связывать запятыми, а последнее через 'and', пример: Erlich, Dinesh and Richard

let par1 = ["Erlich"];
let par2 = ["Erlich", "Richard"];
let par3 = ["Erlich", "Richard", "Dinesh", "Gilfoyle"];

function connectNames(names) {
    if (names.length == 1) {
        console.log(names[0])
    } else if (names.length == 2) {
        console.log(names[0] + ' and ' + names[1]);
    } else {
        let sum = '';
        for (let i = 0; i < names.length - 2; i++) {
            sum = sum + names[i] + ', ';
        }
        let result = sum;
        console.log(result + names[names.length - 2] + ' and ' + names[names.length - 1]);
    }
}
connectNames(par1);
connectNames(par2);
connectNames(par3);



