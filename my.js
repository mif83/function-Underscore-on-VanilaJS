/**
 * Created by dima on 13.03.2017.
 */
/*
_.flatten([1, [2], [3, [[4]]]]);
=> [1, 2, 3, 4];*/

function flatten(arr){
    return arr.map( item => {
        if(Array.isArray(item)){
           return flatten(item)[0];
        }
        return item;
    });
}


var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
/** _.max
 * Возвращает элемент с максимальным значение какогото поля или -infinity если список пустой
 * @param {Array} arr  - входной список [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
 * @param {functuion}func функция которая возвращает заданный параметр сортировки stooge => stooge.age;
 * @returns {Object} элемент с максимальным параметром из всех по заданому полю {name: 'curly', age: 60}
 */
function max(arr, func){
    if(arr.length === 0) return -Infinity;
    let max = func(arr[0]),
        result;
    arr.forEach( (item, i) => {if(max < func(item)) result = item;});
    return result;
}
/**
 * Возвращает массив из элементов выбраного поля аналог _.pluck()
 * @param {Array} arr  - входной список [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
 * @param {String} field название поля в обьекте "name"
 * @returns {Array} новый массив ["moe", "larry", "curly"]
 */
function pluck(arr, field){
    return arr.map(item => item[field]);
}

/** _.compact
 * Возвращает копию массива, без всех "ложных" значений. В JavaScript "ложными" считаются false, null, 0, "", undefined и NaN.
 * @param {Array} arr входящий массив
 * @returns {Array} новый массив без ложных значений
 */
function compact(arr){
    return arr.filter( item =>!(item === "" || item === 0 || item === null || item === false || item === undefined ) && (item === item));
}
/** _.findIndex
 * возвращает первый индекс того значения, для которого func вернёт true. Если такой элемент не был найден, вернёт -1.
 * @param {Array}arr
 * @param {Function} func функция должна возвращать true или false
 * @returns {number}
 *
 *_.findIndex([4, 6, 8, 12], isPrime);
 * => -1 // не найден
 * _.findIndex([4, 6, 7, 12], isPrime);
 * => 2
 *
 */
function findIndex(arr, func){
    for (let i =0; i < arr.length; i++){
        if(func(arr[i])) return i;
    }
    return -1;
}
/**_.range([start], stop, [step])
 * Создает набор целых чисел от start до end, если передали только один параметр то сгенерирует последовательность
 * от 0 до param с шагом 1
 * @param {number} start начальное значение
 * @param {number} end конечное значение
 * @param {number} step шаг
 * @returns {Array}
 */
function range(start, end , step){
    let result = [];
    if (end === undefined){
        end = start;
        start = 0;
        step = 1;
    };
    if(start <= end && (step || 1) > 0){
        for (let i = start || 0; i < end; i+=step || 1 ){
            result.push(i);
        }
    };
    if (start > end && step < 0){
        for (let i = start || 0; i > end; i+=step  ){
            result.push(i);
        }
    };
    return result;
}