import { Film as FilmType } from '../../types/film';

type FilmOverviewProps = {
  filmData: FilmType;
};

const createGrade = (rating: number) => {
  switch (true) {
    case rating <= 2:
      return 'Bad';
    case rating > 2 && rating <= 4:
      return 'Normal';
    case rating > 4 && rating <= 6:
      return 'Good';
    case rating > 6 && rating <= 8:
      return 'Very good';
    case rating > 8 && rating <= 10:
      return 'Awesome';
  }
};

function FilmOverview({ filmData }: FilmOverviewProps): JSX.Element {
  const { rating, scoresCount, description, director, starring } = filmData;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{createGrade(rating)}</span>
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
