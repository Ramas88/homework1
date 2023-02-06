//Задание 1

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(10, 6));

//Задание 2

function showNumber(n) {
  if (n % 2 == 0) {
    console.log(`Число четное`);
  } else {
    console.log(`Число нечетное`);
  }
}
showNumber(6);

//Задание 3.1

const square = (c) => c * c;

console.log(square(5));

//Задание 3.2

function squareVer(f) {
  return f * f;
}

let result = squareVer(6);

console.log(`${result}`);

//Задание 4

function question() {
  let answer = prompt("Сколько вам лет?");

  if (answer >= 13) {
    console.log(`Добро пожаловать!`);
  }
  if (answer <= 12) {
    console.log(`Привет, друг!`);
  } else {
    console.log(`Вы ввели неправильное значение`);
  }
}

question();

//Задание 5

function checkNum(g, h) {
  console.log(isNaN(g * h));
  if (g >= 0 && h >= 0) {
    console.log(g * h);
  } else {
    console.log(`Одно или оба значения не являются числом`);
  }
}

checkNum(7, 7);

//Задание 6

function questionCube() {
  let answerCube = prompt("Скажите число");

  if (answerCube <= 10) {
    console.log(
      `${answerCube} в кубе равняется ${answerCube * answerCube * answerCube}`
    );
  } else {
    console.log(`Переданный параметр не является числом`);
  }
}

questionCube();

//Задание 7

function monthYear(m) {
  if (m === 3 && m === 4 && m === 5) {
    console.log(`сезон года - Весна`);
  }
  if ((m === 6 && m === 7) || m === 8) {
    console.log(`сезон года - Лето`);
  }
  if (m === 9 && m === 10 && m === 11) {
    console.log(`сезон года - Осень`);
  }
  if (m === 12 && m === 1 && m === 2) {
    console.log(`сезон года - Зима`);
  } else {
    console.log(`Это не месяцы, ошибочка`);
  }
}

monthYear(18);
