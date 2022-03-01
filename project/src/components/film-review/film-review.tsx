import { Review } from '../../types/review';
import dayjs from 'dayjs';

type FilmReview = {
  review: Review;
};

function FilmCardReview({ review }: FilmReview): JSX.Element {
  const { user, comment, date, rating } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dayjs(date).format('YYYY-MM-DD')}>
            {date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmCardReview;
