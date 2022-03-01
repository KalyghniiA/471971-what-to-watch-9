import { useState } from 'react';

type RatingInputProps = {
  name: string;
  index: number;
  onChecked: (id: string) => void;
};

function RatingInput({ name, index, onChecked }: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${index}`}
        type="radio"
        name="rating"
        value={index}
        onChange={() => onChecked(`star-${index}`)}
      />
      <label className="rating__label" htmlFor={`star-${index}`}>
        {`${name} ${index}`}
      </label>
    </>
  );
}

const createRatingContent = (elem: number, cb: (id: string) => void) => <RatingInput name="Rating" index={elem} key={elem} onChecked={cb} />;


function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState('null');

  const onUpdateRating = (id: string): void => {
    setRating(id);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          -
          <div className="rating__stars">
            {Array.from({ length: 10 }, (elem, i) => {
              elem = createRatingContent(i, () => {
                onUpdateRating(`${i + 1}`);
              });
            }).reverse()}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
