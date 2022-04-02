import { Product } from "./product.model";

//Solved last topic's problem using "any" as array Type Annotation,
export const products: Product[] = [];

//Below we create a function that takes an object as a parameter
// and one parameter is optional by "?" notation, we can pass
// an object with or without it.
export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcGeneralStock = (): number => {
  let total = 0;
  products.map(item => {total += item.stock});
  return total;
};
