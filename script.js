// Задание 1
console.log("Задание 1");

let findNum = [1, 5, 4, 10, 0, 3];

for (let i = 0; i <= findNum.length; i++) {
  if (findNum[i] < 1) break;

  console.log(findNum[i]);
}

// Задание 2
console.log("Задание 2");

const findPos = [1, 5, 4, 10, 0, 3];

console.log(findPos.indexOf(4));

// Задание 3
console.log("Задание 3");

let numAdd = [1, 3, 5, 10, 20];

console.log(numAdd.join(" "));

// Задание 4
console.log("Задание 4");

const tenArr = Array(10);
const evenArr = [];

for (let i = 0; i < tenArr.length; i++) {
  tenArr[i] = Math.round(Math.random() * 11);
  if (tenArr[i] % 2 === 0) {
    evenArr.push(tenArr[i]);
  }
}

console.log(tenArr);
console.log(evenArr);

// Задание 5
console.log("Задание 5");

const numArr = [];

for (let i = 0; i < 3; i++) {
  numArr[i] = [];

  for (let j = 0; j < 3; j++) {
    numArr[i].push(1);
  }
}

console.log(numArr);

// Задание 6
console.log("Задание 6");

let numPush = [1, 1, 1];

numPush.push(2, 2, 2);

console.log(numPush);

// Задание 7
console.log("Задание 7");

let numSort = [9, 8, 7, "a", 6, 5];

numSort = numSort.sort();
numSort.pop();

console.log(numSort);

// Задание 8
console.log("Задание 8");

const numCheck = [9, 8, 7, 6, 5];
const numQuest = Number(prompt("Введите число от 1 до 10"));

if (numCheck.includes(numQuest)) {
  console.log(`Данное число есть в массиве`);
} else {
  console.log(`Данное число отсутствует в массиве`);
}

// Задание 9
console.log("Задание 9");

const text = "abcdef";
const textReverse = text.split("");

textReverse.reverse();

console.log(textReverse.join(""));

// Задание 10
console.log("Задание 10");

const sixArr = new Array(6);

const randomArr = (arr) => {
  for (let i = 0, min = 1, max = 10; i < arr.length; i++) {
    arr[i] = Math.round(Math.random() * (max - min)) + min;
  }
};

const averageArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

randomArr(sixArr);

console.log(sixArr);
console.log(averageArr(sixArr));

// Задание 11
console.log("Задание 11");

let arrConcat = [
  [1, 2, 3],
  [4, 5, 6],
];

let resultConcat = [].concat(...arrConcat);

console.log(resultConcat);

// Задание 12
console.log("Задание 12");

const arrSort = Array(10);

for (let i = 0; i < arrSort.length; i++) {
  arrSort[(i += 1)] = Math.round(Math.random() * 11);
}

console.log(arrSort);
