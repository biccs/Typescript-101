(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //We use "?" next to variableName, to make that variable optional.
  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  //We do not need to pass the size parameter as it is optional
  const product = createProductToJson('Product1', new Date(), 55);
  console.log(product);
  console.log(product.title);
  console.log(product.stock);
  // console.log(product.size);
  console.log(product.createdAt);

})();
