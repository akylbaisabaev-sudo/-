const userName = "Акылбек";
const userAge = 20;
const isStudent = true;
const hobbies = ["футбол", "музыка", "программирование"];

console.log(userName);
console.log(userAge);
console.log(isStudent);
console.log(hobbies);

const num1 = 50;
const num2 = 10;

console.log("Сумма:", num1 + num2);
console.log("Разность:", num1 - num2);
console.log("Произведение:", num1 * num2);
console.log("Частное:", num1 / num2);

const name = "John";
const age = 20;

console.log(`${name} is ${age} years old`);

const statusAge = Number(prompt("Введите возраст"));

if (statusAge < 13) {
  console.log("Ребенок");
} else if (statusAge <= 17) {
  console.log("Подросток");
} else if (statusAge <= 65) {
  console.log("Взрослый");
} else {
  console.log("Пенсионер");
}

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }
}

checkEvenOdd(4);
checkEvenOdd(7);
checkEvenOdd(0);
checkEvenOdd(15);

const rideAge = Number(prompt("Введите возраст для аттракциона"));
const rideHeight = Number(prompt("Введите рост в сантиметрах"));

if (rideAge < 5) {
  console.log("Слишком мал");
} else if (rideAge >= 5 && rideAge <= 12) {
  console.log("Добро пожаловать");
} else if (rideAge >= 13 && rideAge <= 18 && rideHeight > 160) {
  console.log("Добро пожаловать");
} else {
  console.log("Не разрешено");
}

for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}

function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumNumbers(5));
console.log(sumNumbers(10));
console.log(sumNumbers(100));

let countdown = 20;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

const grades = [5, 4, 3, 5, 2, 4, 5];

for (let grade of grades) {
  console.log(grade);
}

let gradesSum = 0;
for (let grade of grades) {
  gradesSum = gradesSum + grade;
}
console.log("Сумма оценок:", gradesSum);

console.log("Средняя оценка:", gradesSum / grades.length);

let maxGrade = grades[0];
for (let grade of grades) {
  if (grade > maxGrade) {
    maxGrade = grade;
  }
}
console.log("Максимальная оценка:", maxGrade);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === city) {
      return i;
    }
  }
  return -1;
}

console.log(findCity(cities, "Каракол"));
console.log(findCity(cities, "Бишкек"));
console.log(findCity(cities, "Нарын"));

const student = {
  name: "Акылбек",
  age: 20,
  courses: ["HTML", "CSS", "JavaScript"],
  isActive: true
};

console.log(student);

student.age = student.age + 1;
console.log(student.age);

for (let i = 0; i < student.courses.length; i++) {
  console.log(student.courses[i]);
}

const product = {
  name: "Ноутбук",
  price: 50000,
  quantity: 3
};

function getTotalCost(item) {
  const total = item.price * item.quantity;
  console.log(`Стоимость: ${total}`);
  return total;
}

getTotalCost(product);

const books = [
  { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 },
  { title: "Преступление и наказание", author: "Фёдор Достоевский", year: 1866 },
  { title: "Белый пароход", author: "Чингиз Айтматов", year: 1970 }
];

for (let book of books) {
  console.log(`${book.title} — ${book.author}, ${book.year}`);
}

let oldestBook = books[0];
for (let book of books) {
  if (book.year < oldestBook.year) {
    oldestBook = book;
  }
}
console.log(`Самая старая книга: ${oldestBook.title} (${oldestBook.year})`);

const calculateDiscount = (price, discount) => price - price * discount / 100;

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(2500, 20));
console.log(calculateDiscount(500, 50));

function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 40) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrade(95));
console.log(getGrade(70));
console.log(getGrade(45));
console.log(getGrade(10));

function getMaxNumber(arr) {
  let max = arr[0];
  for (let element of arr) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log(getMaxNumber([3, 9, 2, 7]));
console.log(getMaxNumber([-5, -2, -9]));
console.log(getMaxNumber([42]));
