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
alert[`info + user.name + user.age`];

let guest = prompt("Как вас зовут?");
alert(`Привет, ${guest}`);
