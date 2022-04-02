(() => {
  //TS helps us suggesting related methods such as prices.push(), .pop(), etc...
  // also it identifies the variable as a array and what types it stores.
  //The type or types, of an array are stated at variable initialization, by the type of the
  // values it stores.

  //** Implicit way of stating an array

  //prices is an array capable of storing only type number.
  let prices = [10,3,30,25,102,1];
  prices.push(105);
  prices.pop();
  prices.unshift(214);
  console.log(prices.length);
  console.log(typeof(prices));

  //data is an array capable of storing number, string and boolean.
  let data = [10, 'hello', true];
  data.push('world');
  data.push(false);
  data.unshift(5);
  data.pop();
  console.log(data.length);
  console.log(typeof(data));

  //** Explicit way of stating an array using TS
  let mixed: (number | boolean | string)[] = [true, "hi", 55, "people"];
  console.log(mixed);

  let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
  console.log(numbers.map(item => item * 2));

})();
