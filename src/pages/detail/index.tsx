import type { IDetailsProductId } from '@/features/details/model';
import { ProductDetailInfo } from '@/features/details/ui';

export const DetailPage = ({ productId }: IDetailsProductId) => {
  return (
    <div className={'flex flex-col py-5 gap-3'}>
      <h1>Product info</h1>
      <ProductDetailInfo productId={productId} />
    </div>
  );
};
