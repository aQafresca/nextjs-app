export const calculateDiscountedPrice = (
  price: number,
  discount: number,
): number => {
  const finalPrice = price * (1 - discount / 100);

  return Math.round(finalPrice * 100) / 100;
};
