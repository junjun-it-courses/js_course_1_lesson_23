// Применение для кеширования - MAP

// 📁 cache.js
let cache = new Map();

// вычисляем и запоминаем результат
function process(obj) {
    if (!cache.has(obj)) {
        console.log('Вычисление ...');
        let result = obj.salary + 100;
        cache.set(obj, result);
    } else {
        console.log('Достали с кеша ...');
    }
    return cache.get(obj);
}

// Теперь используем process() в другом файле:

// 📁 main.js
let obj = {name: 'vlad', salary: 100};
// let obj2 = {name: 'alex', salary: 100};

let result1 = process(obj); // вычислен результат
console.log(result1)

// ...позже, из другого места в коде...
let result2 = process(obj); // ранее вычисленный результат взят из кеша
console.log(result2)


// ...позже, когда объект больше не нужен:
// obj = null;
// console.log(cache);
// console.log(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)