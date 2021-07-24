// Объекты Set это коллекции уникальных значений. Дублированные значения
// игнорируются, т.к. коллекция должна содержать только уникальные значения.
// Значения могут быть примитивами или ссылками на объекты.

// https://developer.mozilla.org/ru/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Set/Set

// Для создания юзаем new Set(iterable); iterable - итерируемый объект (массив)

// let newSet = new Set();
// console.log(newSet)

// или

// const exampleArr = [1, 'string', null, NaN, undefined, {name: 'Joui'}];
// let newSet2 = new Set(exampleArr);
// console.log(newSet2)

// или

// let newSet3 = new Set([
//     ['name', 'vova'],
//     [100, 'number'],
//     [{name: 'User Name'}, 'John'],
//     [[1, 2, 3, {}, []], 123],
// ])
//
// console.log(newSet3)


// Для добавление новых значений в Set объект мы используем метод .add(value)

// let mySet1 = new Set();
// mySet1.add(10);
// console.log(mySet1);

// так как метод .add(value) возвращает объект обновленный Set в который сразу-же
// можно записать новые значения

// let mySet2 = new Set();
// mySet2.add(10)
//       .add(20)
//       .add(20)
//       .add(30)
//       .add(30);
// console.log(mySet2);


// Для удаления значений из Set используем метод .delete(value)
// Если значение былл удалено метод вернет true если нет то false

// let mySet3 = new Set([1, 2, 'John', true, false]);
// mySet3.delete('John');
// console.log(mySet3)


// Проверяем присутствие элемента внутри нашего Set
// Для этого используем метод .has(value) возвращает true или false в зависимости
// от того найден элемент или нет

// let mySet4 = new Set([1, 2, 3]);
// console.log(mySet4)
// console.log(mySet4.has(1));
// console.log(mySet4.has(4));


// Для полной очистки текущего Set объекта используем метод .clear()
// Метод возвращает undefined после очистки

// let mySet5 = new Set([1, 3, 2, 5, 10, 'string']);
// console.log(mySet5)
// console.log(mySet5.clear())
// console.log(mySet5)

// Так как Set это итерируемый объект ты мы можем посмотеть его длинну
// посмотрев на свойство size текущего Set объекта

// let mySet6 = new Set([1, 2, 3, 4, 5, 6, 7]);
// console.log(mySet6);
// console.log(mySet6.size);

// Перебор объекта Set

// let mySet7 = new Set(["апельсин", "яблоко", "банан"]);

// Не работает
// for (let i = 0; i < mySet7.size; i++) {
//     console.log(mySet7[i])
// }

// Работает
// for (let value of mySet7) {
//     console.log(value);
// }

// // то же самое с forEach:

// mySet7.forEach((value, valueAgain, set) => {
//     console.log(value);
// });

// Доп методы

// Set имеет те же встроенные методы, что и Map:
//
//     set.values() – возвращает перебираемый объект для значений,
//     set.keys() – то же самое, что и set.values(), присутствует
//     для обратной совместимости с Map,
//     set.entries() – возвращает перебираемый объект для пар
//     вида [значение, значение], присутствует для обратной совместимости с Map.

let mySet8 = new Set([1, 2, 3, 4, 5, 6, 7]);

// возвращает итератор
let setValuesIterator = mySet8.values()
// console.log(setValuesIterator);


//А значит может работать с обычными циклами например while

// console.log(setValuesIterator.next())
// console.log(setValuesIterator.next())
// console.log(setValuesIterator.next())

// while (true) {
//     let currentSetElement = setValuesIterator.next();
//
//     if(currentSetElement.done) break;
//     console.log(currentSetElement.value);
// }

// Аналогично с for
// for(;;) {
//     let currentSetElement = setValuesIterator.next();
//
//     if(currentSetElement.done) break;
//     console.log(currentSetElement.value);
// }

// for(let el of mySet8) {
//     console.log(el);
// }


// Личный Метод forEach

// mySet8.forEach((value, valueAgain, set) => {
//     console.log(value);
// });