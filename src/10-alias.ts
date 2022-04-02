(() => {
  //TS Alias allows us to create our own data types as below.
  type Foo = string | number;
  //Newly created data type can be used as Type Annotation.
  let foo: Foo;

    //Literal Types
    //Allows us to create a type with fixed value, if you store
    // a different value tham the ones stated it will pop an alert.
    type Size = 'S' | 'M' | 'L' | 'XL';
    let size: Size;

  //Following function prints data depending on data type input.
  function greeting(foo: Foo, size: Size){
    if(typeof foo === 'string'){
      console.log(`Hello ${foo.toUpperCase()}, you're size ${size}`);
    } else {
      console.log(`Number: ${foo.toFixed(1)}, size ${size}`)
    }
  }

  greeting("victor", 'M');
  greeting(56.342, 'L');
})();
