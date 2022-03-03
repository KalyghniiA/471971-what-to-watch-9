import { FilmType } from '../../types/film';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

type FilmPromoInfoProps = {
  filmPromoData: FilmType;
};

function FilmPromoInfo({ filmPromoData }: FilmPromoInfoProps): JSX.Element {
  const { posterImage, name, genre, released } = filmPromoData;

  return (
    <div className="film-card__info">
      <div className="film-card__poster">
        <img src={`img/${posterImage}`} alt="The Grand Budapest Hotel poster" width="218" height="327" />
      </div>
      <div className="film-card__desc">
        <h2 className="film-card__title">{name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{released}</span>
        </p>

        <FilmCardButtons />
      </div>
    </div>
  );
}

export default FilmPromoInfo;
