(() => {
  //Function objects allows us to set objects as parameters for functions.
  const login = (data: {email: string, password: number}) => {
    console.log(data.email,data.password);
  }

  login({
    email: "vic@gmail.com",
    password: 123456
  });

  //Creating custom Type Annotation
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  //Below we create a function that takes an object as a parameter
  // and one parameter is optional by "?" notation, we can pass
  // an object with or without it.
  const addProduct = (
    data: {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
    }
  ) => {
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

})();
