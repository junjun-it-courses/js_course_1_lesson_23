// WeakMap это Map, в котором ключи обладают неустойчивыми связями,
// что позволяет не мешать сборщику мусора удалять элементы WeakMap.
// Это означает, что можно не беспокоиться об утечках памяти.
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// Стоит отметить, что в WeakMap, в отличие от Map, каждый ключ должен быть объектом.

 // Для WeakMap есть только четыре метода: delete(ключ), has(ключ), get(ключ)
// и set(ключ, значение).


// // Для создания
// let wMap = new WeakMap();
//
// // Добавление
// let obj = {val: 123}
// wMap.set(obj, 100)
//
// // Взятие
// wMap.get(obj)
//
// // Удаление
// wMap.delete(obj)
//
// // Проверка
// wMap.has(obj); // false


// Стандартные объекты
// let john = { name: "John" } // объект доступен, переменная john -- это ссылка на него
// john = null; // перепишем ссылку и объект будет удалён из памяти

// объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
// мы можем взять его значение как array[0]
// let john2 = { name: "John" };
// let array = [ john2 ];
// john2 = null; // перезаписываем ссылку на объект


// Обычный Map
// let john3 = { name: "John" };
// let map = new Map();
// map.set(john3, "...");
// john3 = null; // перезаписываем ссылку на объект

// объект john сохранён внутри объекта `Map`,
// он доступен через map.keys()

// Через WeakMap - ключи только объекты
// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, "ok"); // работает (объект в качестве ключа)
//
// // нельзя использовать строку в качестве ключа
// weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект

// ------------

// let john4 = { name: "John" };
// let weakMap2 = new WeakMap();
// weakMap2.set(john4, "...");
//
//
// john4 = null; // перезаписываем ссылку на объект
//
// console.log(weakMap2)
//
// // объект john удалён из памяти!
