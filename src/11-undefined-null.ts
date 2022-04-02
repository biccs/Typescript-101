(() => {
  //The proper way to working with null or undefined
  // values in TS is by adding them with union types or alias.
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 55;

  let myString: string | undefined = undefined;
  myString = "Hello World";

  //Prints a specific string to console under specific circumstances.
  function hi(name: string | null){
    let hello = "Hello ";
    //Verify variable type in one line: variableName?.function() || statements to run if variableName is not string.
    hello += name?.toUpperCase() || 'nobody';
    console.log(hello);
  }
  hi("Victor");
  hi(null);
})();
