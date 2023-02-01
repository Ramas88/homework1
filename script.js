let i = 0;
while (i < 2) {
  console.log("Привет");
  i++;
}

let l = 1;
while (l <= 5) {
  console.log(l);
  l++;
}

let m = 7;
while (m <= 22) {
  console.log(m);
  m++;
}

const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let name in obj) {
  console.log(`${name} - зарплата ${obj[name]} долларов.`);
}

let n = 1000;
let num = 0;
while (n >= 50) {
  n = n / 2;
  num++;
}
console.log("Итераций: " + num + " Результат деления: " + n);

for (let fridayNumber = 1; fridayNumber <= 31; fridayNumber++) {
  if (fridayNumber % 5 == 0) {
    console.log(
      `Сегодня пятница, ${fridayNumber}-e число. Необходимо подготовить отчет`
    );
  }
}
