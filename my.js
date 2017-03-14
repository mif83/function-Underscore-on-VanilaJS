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



/*
http://underscorejs.org/#max
http://underscorejs.org/#pluck
http://underscorejs.org/#compact
http://underscorejs.org/#findIndex
http://underscorejs.org/#range
*/
/*
 var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
 _.max(stooges, function(stooge){ return stooge.age; });
 => {name: 'curly', age: 60};*/

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
function max(arr, func){
    if(arr.length === 0) return -Infinity;
    let max = func(arr[0]),
        result;
    arr.forEach( (item, i) => {if(max < func(item)) result = item;});
    return result;
}
max(stooges, function(stooge){ return stooge.age; });