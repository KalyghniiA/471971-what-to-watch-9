type RatingData = {
  score: number,
  ratingCount: number
}

type FilmRatingProps = {
  ratingData: RatingData,
}

function FilmRating({ratingData}: FilmRatingProps): JSX.Element {
  const {score, ratingCount} = ratingData;

  return (
    <div className="film-rating">
      <div className="film-rating__score">{score}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">Very good</span>
        <span className="film-rating__count">{ratingCount} ratings</span>
      </p>
    </div>
  );
}

export default FilmRating;
