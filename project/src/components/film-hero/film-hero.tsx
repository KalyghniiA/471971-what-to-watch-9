import Header from '../header/header';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import { FilmType } from '../../types/film';

type FilmHeroProps = {
  filmCardData: FilmType;
};

function FilmHero({ filmCardData }: FilmHeroProps): JSX.Element {
  const { id, name, backgroundImage, genre, released } = filmCardData;

  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={`img/${backgroundImage}`} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <FilmCardButtons id={id} />
        </div>
      </div>
    </div>
  );
}

export default FilmHero;
