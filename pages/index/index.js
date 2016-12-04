/*
<p> var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

console.log(searchParams.has('topic'));  // true
console.log(searchParams.get('topic'));  // api
console.log(searchParams.getAll('topic')); // ['api']

console.log(searchParams.get('foo'));   // null
searchParams.set('foo', 2); 
console.log(searchParams.get('foo'));   // 2

searchParams.append('topic2', 'webdev');
console.log(searchParams.toString());  // q=URLUtils.searchParams&topic=api&foo=2&topic2=webdev

searchParams.append('foo', 3);
console.log(searchParams.getAll('foo')); // ['2', '3']

searchParams.delete('topic');
console.log(searchParams.toString()); //q=URLUtils.searchParams&foo=2&topic2=webdev&foo=3

searchParams.set('foo', 8);
console.log(searchParams.toString()); // q=URLUtils.searchParams&foo=8&topic2=webdev
*/

var URLSearchParams2 = require('./url-search-params');
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams2(paramsString);

console.log(searchParams.has('topic'));  // true
console.log(searchParams.get('topic'));  // api
console.log(searchParams.getAll('topic')); // ['api']

console.log(searchParams.get('foo'));   // null
searchParams.set('foo', 2); 
console.log(searchParams.get('foo'));   // 2

searchParams.append('topic2', 'webdev');
console.log(searchParams.toString());  // q=URLUtils.searchParams&topic=api&foo=2&topic2=webdev

searchParams.append('foo', 3);
console.log(searchParams.getAll('foo')); // ['2', '3']

searchParams.delete('topic');
console.log(searchParams.toString()); //q=URLUtils.searchParams&foo=2&topic2=webdev&foo=3

searchParams.set('foo', 8);
console.log(searchParams.toString()); // q=URLUtils.searchParams&foo=8&topic2=webdev

searchParams.append('name2', 222);
console.log(searchParams.toString()); // q=URLUtils.searchParams&foo=8&topic2=webdev&name2=222

// keys 遍历所有参数名
var usp = new URLSearchParams('a=1&a=2&b=3');
var iterator = usp.keys();
var next = iterator.next();
console.log(!next.done);  // true
console.log(next.value === 'a'); // true

next = iterator.next(); 
console.log(!next.done); // true
console.log(next.value === 'a'); // true

next = iterator.next();
console.log(!next.done); // true
console.log(next.value === 'b'); // true

next = iterator.next();
console.log(next.done); // true
console.log(next.value === undefined); // true

// values 遍历所有参数值
console.log('下面是值！！！！！！！！！！！！！！！！！');

var usp = new URLSearchParams('a=1&a=2&b=3');
var iterator = usp.values();
var next = iterator.next();
console.log(!next.done);  // true
console.log(next.value === '1'); // true

next = iterator.next(); 
console.log(!next.done); // true
console.log(next.value === '2'); // true

next = iterator.next();
console.log(!next.done); // true
console.log(next.value === '3'); // true

next = iterator.next();
console.log(next.done); // true
console.log(next.value === undefined); // true

// entries 遍历所有参数的键值对
console.log('entries 遍历所有参数的键值对!!!!!!!!!!!!!!!!!!!!!');

var usp = new URLSearchParams('a=1&a=2&b=3');
var iterator = usp.entries();
var next = iterator.next();
console.log(!next.done); // true
console.log(next.value[0] === 'a' && next.value[1] === '1'); // true

next = iterator.next();
console.log(!next.done); // true
console.log(next.value[0] === 'a' && next.value[1] === '2');  // true

next = iterator.next();
console.log(!next.done); // true
console.log(next.value[0] === 'b' && next.value[1] === '3'); // true

next = iterator.next();
console.log(next.done); // true
console.log(next.value === undefined); // true

// 下面是foreach遍历
console.log('下面是foreach遍历!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
var usp = new URLSearchParams('a=1&a=2&b=3');
var results = [];
usp.forEach(function(value, key, object) {
  results.push({value: value, key: key, object: object});
});
console.log(results.length === 3);    // true
console.log(results[0].key === 'a');  // true
console.log(results[0].value === '1');  // true
console.log(results[0].object === usp); // true
console.log(results[1].key === 'a');   // true
console.log(results[1].value === '2');  // true
console.log(results[1].object === usp);  // true
console.log(results[2].key === 'b');  // true
console.log(results[2].value === '3');  // true
console.log(results[2].object === usp); // true
