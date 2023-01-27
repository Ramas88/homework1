let a = 20;
alert(a);

let iPhoneCreate = 2007;
alert(iPhoneCreate);

let JavaScriptCreate = "Brendan Eich";
alert(JavaScriptCreate);

let variable10 = 10;
let variable2 = 2;
let addition = variable10 + variable2;
alert(addition);
let subtraction = variable10 - variable2;
alert(subtraction);
let multiplication = variable10 * variable2;
alert(multiplication);
let division = variable10 / variable2;
alert(division);

let result = variable2 ** 5;
alert(result);

let variable9 = 9;
let module = variable9 % variable2;
alert(module);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num++;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
  name: "Alex",
  age: 34,
  isAdmin: false,
};

user["city of residence"] = true;

user.age = "36";

delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
let a = 20;
alert(a);

let iPhoneCreate = 2007;
alert(iPhoneCreate);

let JavaScriptCreate = "Brendan Eich";
alert(JavaScriptCreate);

let variable10 = 10;
let variable2 = 2;
let addition = variable10 + variable2;
alert(addition);
let subtraction = variable10 - variable2;
alert(subtraction);
let multiplication = variable10 * variable2;
alert(multiplication);
let division = variable10 / variable2;
alert(division);

let result = variable2 ** 5;
alert(result);

let variable9 = 9;
let module = variable9 % variable2;
alert(module);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num++;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
  Surnane: "Alex",
  age: 34,
  isAdmin: false,
};

user["city of residence"] = true;

user.age = "36";

delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let guest = prompt("Как вас зовут?");
alert(`Привет, ${guest}`);

let password = "12345";
let check = prompt("Введите пароль");
if (password === check) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}
 + user.name + user.age`];

let guest = prompt("Как вас зовут?");
alert(`Привет, ${guest}`);

let password = "12345";
let check = prompt("Введите пароль");
if (password === check) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

let num = -3;
if (num >= 0 && num <= 10) {
  alert("Верно");
} else {
  alert("НЕверно");
}

let d = 45;
let e = 150;

if (d >= 100 || e >= 100) {
  alert("Верно");
} else {
  alert("НЕверно");
}

let a = Number("2");
let b = Number("3");
alert(a + b);

let month = String(prompt("Введите номер месяца, чтобы узнать время года"));
switch (month) {
  case "1":
    console.log("зима");
    break;
  case "2":
    console.log("зима");
    break;
  case "3":
    console.log("весна");
    break;
  case "4":
    console.log("весна");
    break;
  case "5":
    console.log("весна");
    break;
  case "6":
    console.log("лето");
    break;
  case "7":
    console.log("лето");
    break;
  case "8":
    console.log("лето");
    break;
  case "9":
    console.log("осень");
    break;
  case "10":
    console.log("осень");
    break;
  case "11":
    console.log("осень");
    break;
  case "12":
    console.log("зима");
    break;
  default:
    console.log("Ввели число больше 12 месяцев");
    break;
}
