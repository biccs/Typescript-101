(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice);

  let customerAge: number = 20;

  //below statement shows error in TS as they are different types
  // although in JS it runs correctly.
  customerAge = customerAge + "1";
  console.log(customerAge);

  let productInStock: number;
  // TS alerts us if trying to use a uninitialized variable
  console.log(productInStock);

  //Type annotation inference native with TS,
  // properly manages variable type.
  let discount = parseInt('10');
  console.log(discount);
  console.log(typeof(discount));

  

})();
