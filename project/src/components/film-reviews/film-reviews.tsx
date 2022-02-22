import FilmCardReview from '../film-review/film-review';

type Review = {
  id: number
  author: string,
  text: string,
  date: Date,
  rating: number,
}

type FilmCardReviewsProps = {
  reviews: Review[],
}

function FilmReviews({reviews}: FilmCardReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0,3).map((review) => <FilmCardReview review={review} key={review.id} />)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(4,7).map((review) => <FilmCardReview review={review} key={review.id} />)}
      </div>
    </div>
  );
}

export default FilmReviews;