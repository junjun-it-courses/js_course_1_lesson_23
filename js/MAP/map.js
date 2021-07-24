// Map – это коллекция ключ/значение, как и Object. Но основное отличие
// в том, что Map позволяет использовать ключи любого типа.
// https://learn.javascript.ru/map-set#map

// let obj = {
//     key: 'value',
//     [2 + 2]: 3,
//     [`asdas ${2 + 2}`] : 20,
//     func(a) {
//         console.log(a);
//         return a;
//     }
// }
//
// console.log(obj);


// Если Object может использовать только строковые ключи (названия) свойств и методов
// то в Map ключем (названием) может быть и объект и функция - не только строка!

// let myMap = new Map();
//
// // console.log(myMap)
//
// let keyString = "строка";
// let keyObj = {name: 'John'};
// let keyFunc = function() {};
//
// // устанавливаем значения
// myMap.set(keyString, "значение, связанное со 'строка'");
// myMap.set(keyObj, "значение, связанное с keyObj");
// myMap.set(keyFunc, "значение, связанное с keyFunc");

// myMap.size; // 3
//
// console.log(myMap)

// // получаем значения
// myMap.get(keyString);    // "значение, связанное со 'строка'"
// console.log(myMap.get(keyObj));       // "значение, связанное с keyObj"
// myMap.get(keyFunc);      // "значение, связанное с keyFunc"


// Map может использовать объекты в качестве ключей.

// let john = { id: 1, name: "John" };
// // сохраним количество посещений для каждого пользователя
//
// let visitsCountMap = new Map();
// // объект john - это ключ для значения в объекте Map
// visitsCountMap.set(john, 123);
// console.log(visitsCountMap)
//
// console.log(visitsCountMap.get(john)); // 123


// и еще пример

// let usersVisits = new Map();
// const usersArr = [{id:1, name: 'Vlad'}, {id:2, name: 'Alex'}, {id: 3, name: 'Helen'}];
//
// usersArr.forEach(item => {
//         const randomNum = Math.floor(Math.random() * 10);
//         usersVisits.set(item, randomNum);
//     }
// )

// for(let i = 0; i < usersArr.length; i++) {
//     console.log(usersArr[i], usersVisits.get(usersArr[i]))
// }

// console.log(usersVisits.get(usersArr[1]));

// можно и так

// usersArr
//     .filter(item => item.id % 2 !== 0)
//     .forEach(item => {
//         console.log(item, usersVisits.get(item));
//     })


// можно наполнить Map при вызове конструктора, если в него передать массив с массивами
// в который под индексом 0 ключ, а под индексом 1 значение, они так и будут
// записаны в Map

// let arr = [
//     ["огурец", 500],
//     [20, 350],
//     [20n, 350],
//     [NaN, 50],
//     [undefined, 50],
//     [null, 50],
//     [true, 50],
//     [false, 50],
//     [{name: 'vova'}, 50],
//     [[1, 2, 3], 50],
//     [Symbol(), 100]
// ]
//
// let newMap = new Map(arr);
//
// console.log(newMap)


// аналогоия с обычным object

// let demoObject = {};
// let user = {name: 'vlad'};
//
// demoObject[user] = 100
//
// console.log(demoObject) // не работает


// Цепочка вызовов
// Каждый вызов map.set возвращает объект map, так что мы
// можем объединить вызовы в цепочку:

// let map = new Map();
// map.set({name: 'vlad'}, "str1")
//    .set([1, 2, 3], "num1")
//    .set(true, "bool1");
//
// console.log(map);


// Как перебирать данные которые хранятся в объекте Map ?
// Для перебора коллекции Map есть 3 метода:
//     map.keys() – возвращает итерируемый объект по ключам,
//     map.values() – возвращает итерируемый объект по значениям,
//     map.entries() – возвращает итерируемый объект по парам вида [ключ, значение],
//     этот вариант используется по умолчанию в for..of.

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

// console.log(recipeMap)              // получаем сам объект map
// console.log(recipeMap.keys())       // получаем ключи
// console.log(recipeMap.values())     // получаем значение
// console.log(recipeMap.entries())    // получаем пары ключ - значение


// перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// }

// перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// }

// перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//     console.log(entry); // огурец,500 (и так далее)
// }


// Также Map имеет свой личный метод forEach

// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`); // огурец: 500 и так далее
// });

