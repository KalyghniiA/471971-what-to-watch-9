import FilmNavigation from '../film-navigation/film-navigation';
import FilmOverview from '../film-overview/film-overview';

function FilmInfo (): JSX.Element {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
        <div className="film-card__desc">
          <FilmNavigation />

          <FilmOverview />
        </div>
      </div>
    </div>
  );
}

export default FilmInfo;
