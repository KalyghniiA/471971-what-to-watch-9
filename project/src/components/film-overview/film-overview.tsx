import { Film as FilmType } from '../../types/film';

type FilmOverviewProps = {
  filmData: FilmType;
};

function FilmOverview({ filmData }: FilmOverviewProps): JSX.Element {
  const { rating, scoresCount, description, director, starring } = filmData;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;
