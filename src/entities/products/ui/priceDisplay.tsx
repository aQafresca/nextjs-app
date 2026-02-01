interface PriceDisplayProps {
  price: number;
  finalPrice: number;
  hasDiscount: boolean;
}

export const PriceDisplay = ({
  price,
  finalPrice,
  hasDiscount,
}: PriceDisplayProps) => {
  if (!hasDiscount) {
    return (
      <span className={'text-gray-400 font-bold text-center'}>${price}</span>
    );
  }

  return (
    <div className="flex items-baseline gap-4">
      <span className={'font-semibold text-sm'}>${finalPrice}</span>
      <span className={'line-through text-muted-foreground text-sm'}>
        ${price}
      </span>
    </div>
  );
};
