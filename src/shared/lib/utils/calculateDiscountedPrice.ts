export const calculateDiscountedPrice = (
  price: number,
  discount: number,
): string => {
  const finalPrice = price * (1 - discount / 100);

  return finalPrice.toFixed(2);
};
