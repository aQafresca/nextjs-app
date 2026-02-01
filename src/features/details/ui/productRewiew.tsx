import type { IReview } from '@/entities/products/model';

import { ReviewCard } from './reviewCard';

interface IProductReviewsProps {
  reviews?: IReview[];
}

export const ProductReviews = ({ reviews = [] }: IProductReviewsProps) => {
  if (reviews.length === 0) return null;

  return (
    <div className={'border-t border-border'}>
      <h3 className="text-lg font-bold mb-4">Reviews ({reviews.length})</h3>
      <div className="flex flex-col">
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.reviewerName}-${String(index)}`}
            {...review}
          />
        ))}
      </div>
    </div>
  );
};
