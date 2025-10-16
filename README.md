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
const age = 20;

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
const age = 18;

if (age >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
```
## Можно использовать else if для проверки нескольких условий:

```javascript
const score = 85;

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
const isLoggedIn = true;

const message = isLoggedIn ? "Привет!" : "Пожалуйста, войдите.";
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
# Переменные, объявленные с let или const, доступны только внутри блока.

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


# Существует 3 вида создания String
### First:
используя Double quotes

### Second:
используя Single quotes

### Third:
используя Backticks


# Методы в JS для работы со String

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