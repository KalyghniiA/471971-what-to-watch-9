type RatingInputProps = {
  name: string;
  index: number;
};

function RatingInput({ name, index }: RatingInputProps): JSX.Element {
  return (
    <>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} />
      <label className="rating__label" htmlFor={`star-${index}`}>
        {`${name} ${index}`}
      </label>
    </>
  );
}

const createRatingInput = () => {
  const content = [];

  for (let i = 10; i > 0; i--) {
    const item = <RatingInput name="Rating" index={i} key={i} />;
    content.push(item);
  }

  return content;
};

function AddReviewForm(): JSX.Element {

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">{createRatingInput().map((elem) => elem)}</div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">
          </textarea>
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
