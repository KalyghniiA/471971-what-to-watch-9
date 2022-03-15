import { useState } from 'react';
import { CommentLength } from '../../const';

type RatingInputProps = {
  name: string;
  index: number;
  value: number;
  onRatingChange: (id: number) => void;
};

function RatingInput({ name, index, value, onRatingChange }: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${index}`}
        type="radio"
        name="rating"
        value={index}
        checked={index === value}
        onChange={() => onRatingChange(index)}
      />
      <label className="rating__label" htmlFor={`star-${index}`}>
        {`${name} ${index}`}
      </label>
    </>
  );
}

function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (id: number): void => {
    setRating(id);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          -
          <div className="rating__stars">
            {Array.from({ length: 10 }, (_, i) => (
              <RatingInput name="Rating" index={i + 1} key={i + 1} value={rating} onRatingChange={handleRatingChange} />
            )).reverse()}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={(evt) => setReviewText(evt.target.value)}>
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={rating === 0 || reviewText.length < CommentLength.Min || reviewText.length > CommentLength.Max}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
