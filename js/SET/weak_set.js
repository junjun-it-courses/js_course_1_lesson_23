// Она аналогична Set, но мы можем добавлять в WeakSet только объекты
// (не примитивные значения).

// Объект присутствует в WeakSet только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys()
// и не является перебираемой.
// Объект в WeakSet содержит только уникальные значения.

// let visitedSet = new WeakSet();
//
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// visitedSet.add(john); // John заходил к нам
// visitedSet.add(pete); // потом Pete
// visitedSet.add(john); // John снова

// console.log(visitedSet);

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
// console.log(visitedSet.has(john)); // true
//
// проверим, заходила ли Mary?
// console.log(visitedSet.has(mary)); // false

// john = null;
// console.log(visitedSet)

// структура данных visitedSet будет очищена автоматически