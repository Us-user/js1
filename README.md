<!-- # 🟨 JAVASCRIPT

## 📘 ЧТО ТАКОЕ JAVASCRIPT  
**JAVASCRIPT (JS)** — ЭТО ЯЗЫК ПРОГРАММИРОВАНИЯ, КОТОРЫЙ ДЕЛАЕТ САЙТЫ **ЖИВЫМИ И ИНТЕРАКТИВНЫМИ**.  
ЕСЛИ **HTML** ОТВЕЧАЕТ ЗА СТРУКТУРУ, А **CSS** ЗА ВНЕШНИЙ ВИД, ТО **JS** УПРАВЛЯЕТ ПОВЕДЕНИЕМ — КЛИКАМИ, ДВИЖЕНИЕМ, ФОРМАМИ И Т.Д.  

ОН РАБОТАЕТ ПРЯМО В БРАУЗЕРЕ, А С ПОМОЩЬЮ **NODE.JS** — ЕЩЁ И НА СЕРВЕРЕ.

---

## ⚙️ ЧТО МОЖНО ДЕЛАТЬ С JAVASCRIPT  
- МЕНЯТЬ ТЕКСТ, КАРТИНКИ И СТИЛИ НА САЙТЕ  
- РЕАГИРОВАТЬ НА ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ  
- ОТПРАВЛЯТЬ И ПОЛУЧАТЬ ДАННЫЕ С СЕРВЕРА  
- ДЕЛАТЬ АНИМАЦИИ И ЭФФЕКТЫ  
- ПИСАТЬ СЕРВЕРЫ, ИГРЫ И МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ  

---

## 🧠 ОСОБЕННОСТИ ЯЗЫКА  
- ЛЕГКО НАЧАТЬ — НЕ НУЖНО КОМПИЛИРОВАТЬ  
- МОЖНО ПИСАТЬ И ЗАПУСКАТЬ ПРЯМО В БРАУЗЕРЕ  
- ПОДДЕРЖИВАЕТ **АСИНХРОННОСТЬ** (ВЫПОЛНЕНИЕ КОДА БЕЗ ЗАДЕРЖЕК)  
- РАБОТАЕТ ПОЧТИ ВЕЗДЕ — НА САЙТЕ, В ПРИЛОЖЕНИИ, НА СЕРВЕРЕ  
- ИМЕЕТ ОГРОМНОЕ КОЛИЧЕСТВО БИБЛИОТЕК И ФРЕЙМВОРКОВ  

---

## 🧩 ПРИМЕРЫ КОДА

### 🔹 ПЕРЕМЕННЫЕ
```js
let name = "Umar";
let age = 20;

### 🔹 ФУНКЦИИ
```js
function hello(name) {
  console.log("Привет, " + name + "!");
}

hello("Умар");

### 🔹 ЦИКЛЫ
```js
for (let i = 1; i <= 3; i++) {
  console.log("Число: " + i);
} -->



<!-- ## 🔁 УСЛОВИЯ И ЦИКЛЫ В JAVASCRIPT

### ✅ УСЛОВНЫЕ ОПЕРАТОРЫ

**`if / else`** — позволяет выполнять код в зависимости от условия.

```javascript
let age = 18;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
```
## Можно использовать else if для проверки нескольких условий:

```javascript
let score = 85;

if (score >= 90) {
  console.log("Оценка: A");
} else if (score >= 75) {
  console.log("Оценка: B");
} else {
  console.log("Оценка ниже B");
}
```

## Тернарный оператор — короткая форма if / else:

```javascript
let isLoggedIn = true;

let message = isLoggedIn ? "Привет!" : "Пожалуйста, войдите.";
console.log(message);
```

### 🔄 ЦИКЛЫ
## for — классический цикл с счётчиком:
 
``` javascript
for (let i = 0; i < 5; i++) {
  console.log("Итерация №", i);
}
```

## while — цикл с условием:
```javascript
let i = 0;

while (i < 5) {
  console.log("Счётчик:", i);
  i++;
}
``` -->




<!-- ### 🔍 SCOPE В JAVASCRIPT
## 💡 ЧТО ТАКОЕ SCOPE

Scope (область видимости) — это зона, в которой можно обращаться к переменной или функции.
Если переменная находится внутри области, мы можем её использовать.
Если вне области — доступ к ней будет невозможен.

Scope помогает JS понимать, где переменная "живет" и где её можно использовать.

### ВИДЫ SCOPE
## 1. 🌍 ГЛОБАЛЬНЫЙ SCOPE
# Переменные, созданные вне функции или блока, имеют глобальную видимость.
# Они доступны везде в коде.

```javascript
let name = "Umar";

function name() {
  console.log(name); // Работает
}
name();
```

## 2. 🧩 ЛОКАЛЬНЫЙ (FUNCTION) SCOPE
# Переменные, объявленные внутри функции, видны только внутри неё.

```javascript
function qq() {
  let slovo = "Hello";
  console.log(slovo); // будет работаь
}
console.log(slovo); // не будет работаь — так как переменная вне области
```

## 3. 🔒 БЛОКОВЫЙ (BLOCK) SCOPE
# Работает с { } — например, в if, for и т.д.
# Переменные, объявленные с let или let, доступны только внутри блока.

```javascript
if (true) {
  let a = 10;
  console.log(a); // правильно
}
console.log(a); //  не правильно — так как нет доступа
```
 -->


<!-- ### 🔁 РЕКУРСИЯ И 🔒 ЗАМЫКАНИЕ В JAVASCRIPT

## 🔁 РЕКУРСИЯ (Recursion)

Рекурсия — это когда функция вызывает саму себя до тех пор, пока не будет достигнуто определённое условие, а после же останавливается.
Рекурсия часто используется для решения задач, которые можно разбить на более мелкие подзадачи, чтобы облегчить работу.

# Например как найти факториал числа (5)
```javascript
function factorial(a){
  if(a==1) return 1; // не ставим 0, так как ответ выдаст 0
  return a * factorial(a - 1);
}

console.log(factorial(5)); // ответ будет-120 ВЕРНО
```
# ⚠️ Важно
Одна из важных моментов, условие для остановки рекурсии должны быть правильной, иначе будет бессконечная рекурсия.


## 🔒 ЗАМЫКАНИЕ (CLOSURE)

Замыкание — это функция, которая запоминает переменные из своего внешнего окружения, даже если внешняя функция уже завершила выполнение.

Например 
```javascript
function qq(){
    let cnt = 0
    return function qw(){
        cnt++
        return cnt
    }
}
let ee=qq()
console.log(ee());//1
console.log(ee());//2
console.log(ee());//3 -->



<!-- # Методы в JS для работы со String

## 🧩 1. charAt() и at()
Возвращают символ строки по указанному индексу (позиции).

```javascript
let text = "Hello";
console.log(text.charAt(1)); // "e"
console.log(text.at(-1));    // "o" — можно считать с конца
```

## 🧩 2. toString()
Преобразует значение в строку.

```javascript
let num = 123;
console.log(num.toString()); // "123"
```

## 🧩 3. concat()
Объединяет (склеивает) две или больше строк.

```javascript
let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // "Hello World"
```

## 🧩 4. trim()
Удаляет пробелы в начале и конце строки.

```javascript
let text = "   Hello world !  ";
console.log(text.trim()); // "Hello world!"
```

## 🧩 5. includes()
Проверяет, содержит ли строка заданное слово. Возвращает true или false.

```javascript
let text = "JavaScript";
console.log(text.includes("Java")); // true
console.log(text.includes("Python")); // false
```

## 🧩 6. indexOf() и lastIndexOf()
Возвращают индекс первого или последнего вхождения подстроки.

```javascript
let text = "banana";
console.log(text.indexOf("a"));      // 1 (первое "a")
console.log(text.lastIndexOf("a"));  // 5 (последнее "a")
```

## 🧩 7. replace() и replaceAll()
Заменяют часть строки.


```javascript
let text = "I like apples";
console.log(text.replace("apples", "bananas")); // "I like bananas"

let t = "apple apple apple";
console.log(t.replaceAll("apple", "banana"));   // "banana banana banana"
```

## 🧩 8. substring() и slice()
Извлекают часть строки.

```javascript
let text = "JavaScript";
console.log(text.substring(0, 4)); // "Java"
console.log(text.slice(4, 10));    // "Script"

console.log(text.slice(-6)); // "Script"

```

slice() также может использовать отрицательные индексы (считает с конца).

## 🧩 9. split()
Разделяет строку на массив по указанному разделителю.

```javascript
let text = "apple,banana,orange";
console.log(text.split(",")); // ["apple", "banana", "orange"]
```

## 🧩 10. toLowerCase() и toUpperCase()
Преобразуют строку с загдавными или прописными буквами

```javascript
let text = "Hello World";
console.log(text.toLowerCase()); // "hello world"
console.log(text.toUpperCase()); // "HELLO WORLD"
```



# 🧮 МАТЕМАТИЧЕСКИЕ ФУНКЦИИ В JAVASCRIPT
## В JavaScript все математические функции находятся в объекте Math. Он содержит методы (функции) и константы, которые помогают выполнять разные вычисления.


### 1. Math.round(x)
Округляет число до ближайшего целого.

```javascript
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.3)); // 4
```

### 2. Math.floor(x)
Округляет вниз (до меньшего целого).

```javascript
console.log(Math.floor(4.9)); // 4
```

### 3. Math.ceil(x)
Округляет вверх (до большего целого).

```javascript
console.log(Math.ceil(4.1)); // 5
```

### 4. Math.pow(x, y)
Возводит число x в степень y.

```javascript
console.log(Math.pow(2, 3)); // 8
// то же самое: 
console.log(2 ** 3); // 8
```

### 5. Math.sqrt(x)
Извлекает квадратный корень.

```javascript
console.log(Math.sqrt(9)); // 3
```

### 6. Math.abs(x)
Возвращает модуль числа (всегда положительное значение).

```javascript
console.log(Math.abs(-5)); // 5
```

### 7-8. Math.min(numbers) и Math.max(numbers)
Возвращают минимальное и максимальное значение из списка чисел.

```javascript
console.log(Math.min(3, 7, -2)); // -2
console.log(Math.max(3, 7, -2)); // 7
```

### 9. Math.random()
Возвращает случайное число от 0 до 1 (не включая 1).

```javascript
console.log(Math.random()); // например 0.3721
```

Чтобы получить случайное число в диапазоне:
```javascript
// От 0 до 10
console.log(Math.random() * 10);

// От 10 до 30 (целое)
console.log(Math.floor(Math.random() * (30 - 10 + 1)) + 10);
```

### 10. isNaN()
Проверяет являеться ли значение числом, или нет

```javascript
let n= Nan;
concole.log(isNaN(n)); //true

let n= 3
concole.log(isNaN(n)); //false
``` 




# 📦 МАССИВ В JAVASCRIPT
## 🔹 Что такое массив
Массив (Array) — это структура данных, в которой можно хранить несколько значений в одной переменной.
Например, список чисел, имён или объектов.

```javascript
let numbers = [1, 2, 3, 4];
let fruits = ["apple", "banana", "orange"];
```

## 🔹 Особенности массива
Массив хранит элементы в определённом порядке (по индексам).

Индексы начинаются с 0.
→ Первый элемент — arr[0], второй — arr[1] и т.д.

Можно хранить данные разных типов:
```javascript
let mix = [10, "hi", true];
```

## Так-же существуют методы для работы с массивом
Пример 12-и методов:

### 1. push()
Добавляет элемент(ы) в конец массива.

```javascript
let arr = [1, 2];
arr.push(3);  
console.log(arr); // [1, 2, 3]
```

### 2. pop()
Удаляет последний элемент массива и возвращает его.

```javascript
let arr = [1, 2, 3];
let last = arr.pop();  
console.log(last); // 3  
console.log(arr);  // [1, 2]
```

### 3. shift()
Удаляет первый элемент массива и возвращает его.

```javascript
let arr = [1, 2, 3];
let first = arr.shift();  
console.log(first); // 1  
console.log(arr);   // [2, 3]
```

### 4. unshift()
Добавляет элемент(ы) в начало массива.

```javascript
let arr = [2, 3];
arr.unshift(1);  
console.log(arr); // [1, 2, 3]
```

### 5. splice()
Позволяет удалять, добавлять или заменять элементы массива.

```javascript
let arr = ['a', 'b', 'c', 'd'];
arr.splice(1, 2, 'x', 'y'); // с позиции 1 удалить 2 элемента и вставить 'x','y'
console.log(arr); // ['a', 'x', 'y', 'd']
```

### 6. concat()
Объединяет два (или больше) массива в новый.

```javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]
```

### 7. slice()
Возвращает копию части массива, не изменяя оригинал.

```javascript
let arr = [10, 20, 30, 40];
let part = arr.slice(1, 3);  
console.log(part); // [20, 30]
console.log(arr);  // [10, 20, 30, 40]
```

### 8. join()
Создаёт строку из элементов массива, разделяя их указанным символом.

```javascript
let arr = ['apple', 'banana', 'pear'];
let str = arr.join(', ');
console.log(str); // "apple, banana, pear"
```

### 9. toString()
Преобразует массив в строку (аналогично join(',')).

```javascript
let arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

### 10. toReversed()
Создаёт новый массив, где элементы идут в обратном порядке (не изменяя оригинал).

```javascript
let arr = [1, 2, 3];
let reversed = arr.toReversed();
console.log(reversed); // [3, 2, 1]
console.log(arr);      // [1, 2, 3]
```

### 11. includes()
Проверяет, есть ли элемент в массиве (возвращает true или false).

```javascript
let arr = [10, 20, 30];
console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false
```

### 12. indexOf()
Возвращает индекс первого найденного элемента (или -1, если не найден).

```javascript
let arr = ['a', 'b', 'c'];
console.log(arr.indexOf('b')); // 1
console.log(arr.indexOf('z')); // -1
```

### 13.flat()
Чтобы убрать внутренние массивы (сделать всё одним списком):
```javascript
const arr = [1, [2, 3], [4, 5], [6, 7]];
const newArr = arr.flat();
console.log(newArr);
//result - [1, 2, 3, 4, 5, 6, 7]
```


# Так-же существуют механизмы в JS
## 1. Destructuring assignment — деструктуризация
Позволяет «распаковать» значения из массивов или объектов в отдельные переменные.

```javascript
let arr = [10, 20, 30];

let [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

// Пропуск элементов
let [first, , third] = arr;
console.log(first, third); // 10 30
```

## 2. Spread syntax
Используется для разворачивания (spread) элементов массива или свойств объекта в новый массив/объект или список аргументов функции.

```javascript
let a = [1,2];
let b = [3,4];

// объединение
let c = [...a, ...b];
console.log(c); // [1,2,3,4]

// копия
let copy = [...a];
console.log(copy); // [1,2]
```

Spread в вызове функции-показывает длину массива

```javascript
let nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3
```

## 3. Rest parameters
Похож синтаксически (...), но используется, чтобы собрать оставшиеся элементы в массив.

```javascript
function sum(...nums) {
  // nums — массив всех переданных аргументов
  return nums.reduce((s, n) => s + n, 0);
}

console.log(sum(1,2,3,4)); // 10
```
 
Или же:

```javascript
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```



# 🔹 Что такое Callback?
### Callback — это функция, которую ты передаёшь в другую функцию как аргумент, чтобы она выполнилась позже, когда нужно.

# Array Callbacks

## 🔹 1. forEach()
Позволяет перебрать все элементы массива и выполнить функцию для каждого элемента.

## 🔹 2. map()
Заменяет каждый элемент в массиве

## 🔹 3. filter()
Возвращает новый массив, состоящий из элементов, прошедших проверку (условие в функции).

## 🔹 4. find()
Перебирает весь масси сравнивая с условием, как только условие выйдет True он его покажет и закончится 

## 🔹 5. toSorted()
Создаёт новый отсортированный массив, не изменяя исходный.

## 🔹 6. reduce()
Сводит массив к одному значению (например, суммирует).

## 🔹 7. some()
Проверяет, есть ли хотя бы один элемент, который соответствует условию.
Возвращает true или false.

## 🔹 8. every()
Проверяет, все ли элементы соответствуют условию.
Возвращает true или false.






# 💡 Что такое объект в JavaScript
## Объект — это структура данных, в которой хранятся свойства и значения в формате 
ключ: значение.

📦 Его можно представить как коробку с данными, где у каждого предмета (свойства) есть имя (ключ) и значение.

```javascript 
let person = {
  name: "Умар",
  age: 18,
  city: "Душанбе"
};
```
name, age, city — это ключи (свойства);

"Умар", 18, "Душанбе" — это значения этих свойств.

## 🔍 Как обращаться к значениям объекта
Ты можешь получить значение двумя способами:

### 1. Через точку:
```javascript
console.log(person.name); // Выведет: Умар
```

### 2. Через скобки:
```javascript
console.log(person["age"]); // Выведет: 18
```

## ✏️ Как добавить новое свойство в объект
```javascript
person.country = "Таджикистан";
```

Туперь person стал:
```javascript
let person={
  name: "Умар",
  age: 18,
  city: "Душанбе",
  country: "Таджикистан"
}
```

## Также можно удалять свойства

```javascript
delete person.age
```
Возвраст исчезает из объекта.


# Также имеються Object metods:
## 1. For in
Крутиться для каждого ключа

<!-- ```javascript
let person={
  name: "Умар",
  age: 18,
  city: "Душанбе"
}
for(let i in person){
  result //name,age,sity
}
``` -->

<!-- ## 2. Object.keys()
Выводит ключи всего обьекта в одном массиве
```javascript
let obj={
  a:1,
  b:2,
  c:3
}
console.log(Object.keys(obj))//Вывод: ['a','b','c']
```

## 3. Object. values()
Выводит значение всего объекта в одном массиве
```javascript
let obj={
  a:1,
  b:2,
  c:3
}
console.log(Object.keys(obj))//Вывод: [1,2,3]
```

## 4. Object.entries()
Создает массив из массивов, где в каждом массиве ключ со своим значением
```javascript
let obj={
  a:1,
  b:2
}
console.log(Object.entries(obj))//[['a',1],['b',2]]
```

# DESTRUCTURlNG
Для объектов также существует деструктеризация
Например:
```javascript
let person={
  name: "Умар",
  age: 18,
  city: "Душанбе",
  country: "Таджикистан"
}
let {name,age,city}=person
let (country:locate)
console.log(name)//"Умар"
console.log(age)//18
console.log(city)//"Душанбе"
console.log(locate)//"Таджикистан"
```

# KEYWORD 'THIS'
Ключевое слово используеться в объекте для того чтобы позвать сам объект, а не зазывать каждый раз его имя
```javascript
let obj={
  name:"John",
  sayName:()=>{
    return `${this.name}`
  }
}
console.log(obj.sayName)//"John"
``` -->


# 🕒 Работа с датой и временем в JavaScript
### JavaScript имеет встроенный объект Date, который используется для создания, хранения и работы с датой и временем.

## 📅 1. Создание объекта даты
### ✅ Создание текущей даты и времени

```javascript
const now = new Date();
console.log(now); // Пример: 2025-10-28T10:30:45.123Z
```

### ✅ Создание даты по параметрам
```javascript
const date = new Date(2025, 9, 28, 15, 45, 0);
// Параметры: (год, месяц, день, часы, минуты, секунды)
// Месяцы считаются с 0 → январь = 0, октябрь = 9
console.log(date); // Tue Oct 28 2025 15:45:00
```

### ✅ Создание из строки
```javascript
const dateFromString = new Date("2025-10-28T15:00:00");
console.log(dateFromString);
```

### ✅ Создание по миллисекундам (с 1 января 1970)
```javascript
const dateFromMs = new Date(0); // Начало эпохи UNIX
console.log(dateFromMs); // Thu Jan 01 1970 03:00:00 (в зависимости от часового пояса)
```


## ⏱️ 2. Получение частей даты и времени
```javascript
const now = new Date();

console.log(now.getFullYear());  // Год (2025)
console.log(now.getMonth());     // Месяц (0–11)
console.log(now.getDate());      // День месяца (1–31)
console.log(now.getDay());       // День недели (0 – воскресенье)
console.log(now.getHours());     // Часы (0–23)
console.log(now.getMinutes());   // Минуты (0–59)
console.log(now.getSeconds());   // Секунды (0–59)
console.log(now.getMilliseconds()); // Миллисекунды (0–999)
```

## 🧮 3. Изменение даты и времени
```javascript
const date = new Date();

date.setFullYear(2030);
date.setMonth(11); // декабрь
date.setDate(25);
date.setHours(12);
date.setMinutes(30);
console.log(date);
```


# 🧩 Map в JavaScript
### Map — это встроенный объект в JavaScript (добавлен в ES6), который хранит данные в виде пар “ключ — значение”.

## ⚙️ Основные методы и свойства

| Метод / свойство  | Описание                        | Пример                  |
| ----------------- | ------------------------------- | ----------------------- |
| `set(key, value)` | Добавляет или обновляет элемент | `map.set('x', 10)`      |
| `get(key)`        | Возвращает значение по ключу    | `map.get('x')` → `10`   |
| `has(key)`        | Проверяет, есть ли такой ключ   | `map.has('x')` → `true` |
| `delete(key)`     | Удаляет элемент по ключу        | `map.delete('x')`       |
| `clear()`         | Очищает всю карту               | `map.clear()`           |
| `size`            | Количество элементов            | `map.size` → `2`        |


# 🧩 Set в JavaScript
### Set — это встроенный объект (добавлен в ES6), который хранит уникальные значения любого типа. То есть в Set не может быть повторяющихся элементов.

## ⚙️ Основные методы и свойства

| Метод / свойство | Описание                   | Пример                      |
| ---------------- | -------------------------- | --------------------------- |
| `add(value)`     | Добавляет элемент          | `set.add(5)`                |
| `has(value)`     | Проверяет, есть ли элемент | `set.has(5)` → `true/false` |
| `delete(value)`  | Удаляет элемент            | `set.delete(5)`             |
| `clear()`        | Удаляет все элементы       | `set.clear()`               |
| `size`           | Количество элементов       | `set.size`                  |
