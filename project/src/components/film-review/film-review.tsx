import { Review as ReviewType } from '../../types/review';
import dayjs from 'dayjs';

type FilmReviewProps = {
  review: ReviewType;
};

function FilmReview({ review }: FilmReviewProps): JSX.Element {
  const { user, comment, date, rating } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={dayjs(date).format('YYYY-MM-DD')}>
            {dayjs(date).format('YYYY-MM-DD')}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmReview;
