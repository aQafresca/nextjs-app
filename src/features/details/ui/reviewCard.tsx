import { formatDate } from '@/shared/lib/utils/dateFormatter';

import type { IReview } from '@/entities/products/model';

export const ReviewCard = ({
  rating,
  comment,
  date,
  reviewerName,
}: IReview) => {
  const formattedDate = formatDate(date);

  return (
    <div className="border-b border-border py-4 last:border-0">
      <div className="flex items-center justify-between mb-2">
        <div className={'flex gap-2 items-center'}>
          <h5 className="font-semibold text-sm text-foreground">
            {reviewerName}
          </h5>
          <span className={'text-xm'}>rating {rating}</span>
        </div>
        <span className="text-xs text-gray-400">{formattedDate}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic">
        &ldquo;{comment}&rdquo;
      </p>
    </div>
  );
};
