(() =>{
  //Implicity way to determine type
  let isEnable = true;

  //Explicit way to determine type
  let isNew: boolean = false;
  console.log(isNew);
  isNew = true;
  console.log(isNew);

  //Eventhough the code below might be correct under some circumstances
  // TS thows an alert saying that the wrong data type is being fed into the variable
  // but when we run this file analogous in JS, it runs fine.
  const rand = Math.random();
  console.log(rand);
  isNew = rand > 0.5 ? "true" : "false";
  console.log(isNew);

  //myBoolean is different from tsBoolean, the difference lies
  // in the first letter of the Type Annotation, myBoolean
  // starts with a Capital Letter which indicates an Object type Boolean,
  // where tsBoolean start with a lowercase which indicates a TS Type Annotation.
  const myBoolean: Boolean = false;
  const tsBoolean: boolean = true;

})();
