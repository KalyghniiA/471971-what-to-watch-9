import FilmCardReview from '../film-review/film-review';
import { Review } from '../../types/review';

type FilmCardReviewsProps = {
  reviews: Review[];
};

function FilmReviews({ reviews }: FilmCardReviewsProps): JSX.Element {

  const middleIndex = Math.floor(reviews.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, middleIndex).map((review) => (
          <FilmCardReview review={review} key={review.id} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(middleIndex + 1).map((review) => (
          <FilmCardReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default FilmReviews;
