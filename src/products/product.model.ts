export type Sizes = 'S' | 'M' | 'L' | 'XL';

//Creating Type which value is an object structur with optional parameters.
export type Product = {
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
  };
