(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //Creating Type which value is an object structur with optional parameters.
  type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
  };

  //Solved last topic's problem using "any" as array Type Annotation,
  const products: Product[] = [];

  //Below we create a function that takes an object as a parameter
  // and one parameter is optional by "?" notation, we can pass
  // an object with or without it.
  const addProduct = (data: Product) => {
    products.push(data);
  };

  //Creating product without size, as it is a optional attribute.
  addProduct({
    title: "Product",
    createdAt: new Date(),
    stock: 55,
  });

  //Creating a full product object
  addProduct({
    title: "Product2",
    createdAt: new Date(),
    stock: 12,
    size: 'M'
  });

  //Cant push any type object
  products.push({});
  //We can only push Product Type into array
  products.push({
    title: "Product 3",
    createdAt: new Date(1999, 24, 7),
    stock: 55
  });

  console.log(products);

})();
