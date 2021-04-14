"use strict";
/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)*/

function sum(n) {
  let accumulator = 0;
  for (let i = 1; i <= n; i++) {
    accumulator += i;
  }
  return accumulator;
}
console.log(sum(4));

/* function sum(n) {
    if( n < 0 ) return null;
  
    let factCounter = 1;
    let countedSum = 1;
  
    while (factCounter < n) {
      factCounter++;
      countedSum += factCounter;
    }
    return countedSum;
  }
  const factNumber = +prompt("Enter number: ");
  console.log(sum(factNumber));*/

/*// Реализовать с использованием классов. Для каждого поля создать get и set с проверкой типов.
2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте*/

class Student {
  constructor(name, surname, isMale, contact, universityInfo) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contact = contact;
    this.universityInfo = universityInfo;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._surname = newSurname;
  }

  get surname() {
    return this._surname;
  }

  set isMale(newIsMale) {
    if (typeof newIsMale !== "boolean") {
      throw new TypeError("Wrong type, its not a boolean");
    }
    this._isMale = newIsMale;
  }

  get isMale() {
    return this._isMale;
  }

  set contact(newContact) {
    if (typeof newContact !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._contact = newContact;
  }

  get contact() {
    return this._contact;
  }

  set universityInfo(newUniversityInfo) {
    if (!newUniversityInfo instanceof University) {
      throw new Error("Wrong, students not found");
    }
    this._universityInfo = newUniversityInfo;
  }

  get universityInfo() {
    return this._universityInfo;
  }

  get faculty() {
    return this.universityInfo.faculty;
  }

  get chair() {
    return this.universityInfo.chair;
  }
}

class University {
  constructor(faculty, chair) {
    this.faculty = faculty;
    this.chair = chair;
  }

  set faculty(newFaculty) {
    if (typeof newFaculty !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._faculty = newFaculty;
  }

  get faculty() {
    return this._faculty;
  }

  set chair(newChair) {
    if (typeof newChair !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._chair = newChair;
  }

  get chair() {
    return this._chair;
  }
}

const university = new University("IT", "Finance IT");

const student1 = new Student(
  "Bob", 
  "Smith", 
  true, 
  "Ukraine, Kiev", 
  university
);

const student2 = new Student(
  "Kate",
  "Willis",
  false,
  "Ukraine, Zaporizhzhia",
  university
);

function studentInfo(student) {
  console.log(
    ` Name:${student.name}\n Surname:${student.surname}\n Gender:${
      student.isMale ? "Male" : "Woman"
    } \n Contact:${student.contact}\n Faculty:${student.faculty}\n Chair:${
      student.chair
    }`
  );
}

console.log(studentInfo(student1));
console.log(studentInfo(student2));

/*3.1 Создать числовой массив и проинициализировать его из 25 элементов.
   3.1*Инициализация с помощью случайных чисел*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = new Array();
for (let i = 0; i < 25; i++) {
  arr.push(getRandomIntInclusive(0, 10));
}

console.log(arr);

/*3.2 Вывести элементы с четными индексами*/

function evenIndex(array) {
  let evenInd = [];
  array.forEach(function (item, index) {
    if (index % 2 === 0) {
      evenInd.push(item);
    }
  });
  return evenInd;
}

console.log(evenIndex(arr));

//3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)

function evenItem(array) {
  let evenIt = [];
  array.forEach(function (item) {
    if (item % 2 == 0) {
      evenIt.push(item);
    }
  });
  return evenIt;
}

console.log(evenItem(arr));

//3.4 Вывести индексы нулевых элементов (элемент равен нулю)

function elemNull(array) {
  let elemNl = [];
  array.forEach(function (item, index) {
    if (item === 0) {
      elemNl.push(index);
    }
  });
  return elemNl;
}

console.log(elemNull(arr));

//3.5 Подсчитать количество нулевых элементов

console.log(elemNull(arr).length);

/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
4.1 Для каждого поля создать get и set с проверкой типов.*/

class Book {
  constructor(author, title, yearOfPublication, publisher) {
    this.author = author;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._author = newAuthor;
  }

  get author() {
    return this._author;
  }

  set title(newTitle) {
    if (typeof newTitle !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._title = newTitle;
  }

  get title() {
    return this._title;
  }

  set publisher(newPublisher) {
    if (typeof newPublisher !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._publisher = newPublisher;
  }

  get publisher() {
    return this._publisher;
  }

  set yearOfPublication(newYearOfPublication) {
    if (typeof newYearOfPublication !== "number") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._yearOfPublication = newYearOfPublication;
  }

  get yearOfPublication() {
    return this._yearOfPublication;
  }
}

class ElectronicBook extends Book {
  constructor(
    author,
    title,
    yearOfPublication,
    publisher,
    format,
    electronicNumber
  ) {
    super(author, title, yearOfPublication, publisher);
    this.format = format;
    this.electronicNumber = electronicNumber;
  }

  set format(newFormat) {
    if (typeof newFormat !== "string") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._format = newFormat;
  }

  get format() {
    return this._format;
  }

  set electronicNumber(newElectronicNumber) {
    if (typeof newElectronicNumber !== "number") {
      throw new TypeError("Wrong type, its not a string");
    }
    this._electronicNumber = newElectronicNumber;
  }

  get electronicNumber() {
    return this._electronicNumber;
  }
}

const book = new Book(
  "Stiven King", 
  "About nature", 
  2021, 
  "UniversCompany"
);
const eBook = new ElectronicBook(
  "Felicity O`Dell",
  "English vocabulary in use",
  2017,
  "Cambridge University Press",
  "A2",
  9781316631539
);

/*5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/

function integer(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("fizzbuzz");
  } else if (n % 3 === 0) {
    console.log("fizz");
  } else if (n % 5 === 0) {
    console.log("buzz");
  } else {
    return n;
  }
}
