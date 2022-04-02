(() => {
  //In TS we can add return types to functions as below,
  // notice "number" Type annotation between : and =>.
  const calcTotal = (prices: number[]): number => {
    let total: number = 0;
    prices.map(item => total +=item);
    return total;
  }

  //If the function doesn't return anything it's type is void.
  // we can leave it implicit of explicit as below
  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices);
    console.log(`The total is: ${total}`);
  }
  printTotal([1,2,3,4]);
})();
