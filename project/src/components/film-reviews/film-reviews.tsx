import FilmReview from '../film-review/film-review';
import { Review as ReviewType } from '../../types/review';

type FilmCardReviewsProps = {
  reviews: ReviewType[];
};

function FilmReviews({ reviews }: FilmCardReviewsProps): JSX.Element {
  const middleIndex = Math.ceil(reviews.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, middleIndex).map((review) => (
          <FilmReview review={review} key={review.id} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(middleIndex).map((review) => (
          <FilmReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
