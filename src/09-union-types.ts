(() => {
  //Union types allows us to specify the type or types a variable might be.
  let foo: string | number;
  foo = 123;
  foo = "Hello";
  //Not allowed as this type is not included in TS but in JS will work fine in certain escenarios.
  foo = true;
  console.log(foo);

  //Following function prints data depending on data type input.
  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`Hello ${myText.toUpperCase()}`);
    } else {
      console.log(`Number: ${myText.toFixed(1)}`)
    }
  }

  greeting("victor");
  greeting(56.342);

})();
