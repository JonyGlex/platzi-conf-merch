const handleSumTotal = (cart) => {
  //En sí solo hay que agregar “cart” como parametro
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
