import Header from '../header/header';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

function FilmHero(): JSX.Element {
  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={''} alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">The Grand Budapest Hotel</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">Drama</span>
            <span className="film-card__year">2014</span>
          </p>

          <FilmCardButtons />
        </div>
      </div>
    </div>);
}

export default FilmHero;
