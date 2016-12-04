
### 一：下面是浏览器原审支持的URLSearchParams
<pre>
<p>var paramsString = "q=URLUtils.searchParams&topic=api"; </p>
<p>var searchParams = new URLSearchParams(paramsString); </p>

<p>console.log(searchParams.has('topic'));  // true  </p>  
<p>console.log(searchParams.get('topic'));  // api </p>
<p>console.log(searchParams.getAll('topic')); // ['api'] </p>

<p>console.log(searchParams.get('foo'));   // null </p>
<p>searchParams.set('foo', 2); </p>
<p>console.log(searchParams.get('foo'));   // 2 </p>

<p>searchParams.append('topic2', 'webdev');</p>
<p>console.log(searchParams.toString());  // q=URLUtils.searchParams&topic=api&foo=2&topic2=webdev </p>

<p>searchParams.append('foo', 3); </p>
<p>console.log(searchParams.getAll('foo')); // ['2', '3'] </p>

<p>searchParams.delete('topic');</p>
<p>console.log(searchParams.toString()); //q=URLUtils.searchParams&foo=2&topic2=webdev&foo=3 </p>

<p>searchParams.set('foo', 8);</p>
<p>console.log(searchParams.toString()); // q=URLUtils.searchParams&foo=8&topic2=webdev </p>

### 二： 下面是封装后的 url-search-params.js 文件的
<p>var URLSearchParams2 = require('./url-search-params'); </p>
<p>var paramsString = "q=URLUtils.searchParams&topic=api";</p>
<p>var searchParams = new URLSearchParams2(paramsString);</p>

<p>console.log(searchParams.has('topic'));  // true </p>
<p>console.log(searchParams.get('topic'));  // api </p>
<p>console.log(searchParams.getAll('topic')); // ['api'] </p>

<p>console.log(searchParams.get('foo'));   // null </p>
<p>searchParams.set('foo', 2); </p>
<p>console.log(searchParams.get('foo'));   // 2 </p>

<p>earchParams.append('topic2', 'webdev');</p>
<p>console.log(searchParams.toString());  // q=URLUtils.searchParams&topic=api&foo=2&topic2=webdev </p>

<p>searchParams.append('foo', 3);</p>
<p>console.log(searchParams.getAll('foo')); // ['2', '3'] </p>

<p>searchParams.delete('topic');</p>
<p>console.log(searchParams.toString()); //q=URLUtils.searchParams&foo=2&topic2=webdev&foo=3 </p>

<p>searchParams.set('foo', 8);</p>
<p>console.log(searchParams.toString()); // q=URLUtils.searchParams&foo=8&topic2=webdev </p>

<p>searchParams.append('name2', 222);</p>
<p>console.log(searchParams.toString()); // q=URLUtils.searchParams&foo=8&topic2=webdev&name2=222 </p>

<p>// keys 遍历所有参数名</p>
<p>var usp = new URLSearchParams('a=1&a=2&b=3');</p>
<p>var iterator = usp.keys();</p>
<p>var next = iterator.next();</p>
<p>console.log(!next.done);  // true </p>
<p>console.log(next.value === 'a'); // true </p>

<p>next = iterator.next(); </p>
<p>console.log(!next.done); // true </p>
<p>console.log(next.value === 'a'); // true </p>

<p>next = iterator.next();</p>
<p>console.log(!next.done); // true </p>
<p>console.log(next.value === 'b'); // true </p>

<p>next = iterator.next();</p>
<p>console.log(next.done); // true </p>
<p>console.log(next.value === undefined); // true </p>

<p>// values 遍历所有参数值</p>
<p>console.log('下面是值！！！！！！！！！！！！！！！！！'); </p>

<p>var usp = new URLSearchParams('a=1&a=2&b=3');</p>
<p>var iterator = usp.values();</p>
<p>var next = iterator.next();</p>
<p>console.log(!next.done);  // true </p>
<p>console.log(next.value === '1'); // true </p>

<p>next = iterator.next(); </p>
<p>console.log(!next.done); // true </p>
<p>console.log(next.value === '2'); // true </p>

<p>next = iterator.next();</p>
<p>console.log(!next.done); // true </p>
<p>console.log(next.value === '3'); // true </p>

<p>next = iterator.next();</p>
<p>console.log(next.done); // true </p>
<p>console.log(next.value === undefined); // true </p>

// entries 遍历所有参数的键值对</p>
<p>console.log('entries 遍历所有参数的键值对!!!!!!!!!!!!!!!!!!!!!');</p>

<p>var usp = new URLSearchParams('a=1&a=2&b=3');</p>
<p>var iterator = usp.entries();</p>
<p>var next = iterator.next();</p>
<p>console.log(!next.done); // true</p>
<p>console.log(next.value[0] === 'a' && next.value[1] === '1'); // true</p>

<p>next = iterator.next();</p>
<p>console.log(!next.done); // true</p>
<p>console.log(next.value[0] === 'a' && next.value[1] === '2');  // true</p>

<p>next = iterator.next();</p>
<p>console.log(!next.done); // true</p>
<p>console.log(next.value[0] === 'b' && next.value[1] === '3'); // true</p>

<p>next = iterator.next();</p>
<p>console.log(next.done); // true</p>
<p>console.log(next.value === undefined); // true</p>

<p>// 下面是foreach遍历</p>
<p>console.log('下面是foreach遍历!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');</p>
<p>var usp = new URLSearchParams('a=1&a=2&b=3');</p>
<p>var results = [];</p>
usp.forEach(function(value, key, object) {
  results.push({value: value, key: key, object: object});
});
<p>console.log(results.length === 3);    // true </p>
<p>console.log(results[0].key === 'a');  // true</p>
<p>console.log(results[0].value === '1');  // true</p>
<p>console.log(results[0].object === usp); // true</p>
<p>console.log(results[1].key === 'a');   // true</p>
<p>console.log(results[1].value === '2');  // true</p>
<p>console.log(results[1].object === usp);  // true</p>
<p>console.log(results[2].key === 'b');  // true</p>
<p>console.log(results[2].value === '3');  // true</p>
<p>console.log(results[2].object === usp); // true</p>
</pre>