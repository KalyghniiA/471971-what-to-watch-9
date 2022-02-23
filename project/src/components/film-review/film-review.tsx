import { Review } from '../../types/film';

type FilmReview = {
  review: Review
}

function FilmCardReview({review}: FilmReview): JSX.Element {
  const {author, text, date, rating} = review;


  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmCardReview;
