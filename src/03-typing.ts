//Inference engine is ON, that why i dont
// need to explicitly state the variable type

//The following function is used to create a
// local scope and excecute the code below
// (() -> {})();
(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  myProductName = "Change";
  myProductName.toLowerCase();

  myProductPrice.toFixed();

  const myProductStock = 1000;
  const myProductName2 = "Product 2";
})();
