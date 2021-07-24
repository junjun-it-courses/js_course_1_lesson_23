// Применение для кеширования - WeakMap

// 📁 cache.js
let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
    if (!cache.has(obj)) {
        let result = obj.salary + 100;
        cache.set(obj, result);
    }

    return cache.get(obj);
}

// 📁 main.js
let obj = {name: 'vlad', salary: 100};

let result1 = process(obj);
let result2 = process(obj);


// ...позже, когда объект больше не нужен:
obj = null;
console.log(cache)

// Нет возможности получить cache.size, так как это WeakMap,
// но он равен 0 или скоро будет равен 0
// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются