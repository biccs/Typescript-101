import { addProduct, calcGeneralStock, products } from "./product.service";

addProduct({
  title: "Product",
  createdAt: new Date(),
  stock: 5,
});

//Creating a full product object
addProduct({
  title: "Product2",
  createdAt: new Date(),
  stock: 6,
  size: 'M'
});


console.log(products);
console.log(calcGeneralStock());
