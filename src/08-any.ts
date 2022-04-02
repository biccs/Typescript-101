(() => {
  //Type Annotation "any" disables TS type engine, making it work as JS vanilla
  let myVariable: any;
  myVariable = 5;
  console.log(myVariable);
  myVariable = "hi";
  console.log(myVariable);
  myVariable = false;
  console.log(myVariable);

  //Type annotation "any" is not recommended in most of the cases,
  // it is usually used when migrating from JS to TS.
  
})();
