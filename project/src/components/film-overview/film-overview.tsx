import { Film as FilmType } from '../../types/film';
import { FilmGrade } from '../../const';

type FilmOverviewProps = {
  filmData: FilmType;
};

const createGrade = (rating: number) => {
  switch (true) {
    case rating <= FilmGrade.Bad.MIN:
      return 'Bad';
    case rating > FilmGrade.Normal.MIN && rating <= FilmGrade.Normal.MAX:
      return 'Normal';
    case rating > FilmGrade.Good.MIN && rating <= FilmGrade.Good.MAX:
      return 'Good';
    case rating > FilmGrade.VeryGood.MIN && rating <= FilmGrade.VeryGood.MAX:
      return 'Very good';
    case rating > FilmGrade.Awesome.MIN && rating <= FilmGrade.Awesome.MAX:
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
