(() => {
  let productTitle = "My Product";
  productTitle = "New Product";
  console.log(productTitle);

  const productDescription = "This product is great!";
  console.log(productDescription);

  let productPrice = 10;
  let isNew = true;

  //Manage multi line string with backticks ``
  const product = `
    name = ${productTitle}
    description = ${productDescription}
    price = ${productPrice}
    New = ${isNew}
  `;
  console.log(product);
})();
