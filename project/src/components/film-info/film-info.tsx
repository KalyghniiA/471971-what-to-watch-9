import FilmOverview from '../film-overview/film-overview';
import { FilmType } from '../../types/film';

type FilmInfoProps = {
  filmCardData: FilmType;
};

function FilmInfo({ filmCardData }: FilmInfoProps): JSX.Element {
  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className="film-nav__item film-nav__item--active">
                <a href="#" className="film-nav__link" data-value="Overview" >
                  Overview
                </a>
              </li>
              <li className="film-nav__item">
                <a href="#" className="film-nav__link" >
                  Details
                </a>
              </li>
              <li className="film-nav__item">
                <a href="#" className="film-nav__link" >
                  Reviews
                </a>
              </li>
            </ul>
          </nav>

          <FilmOverview filmData={filmCardData} />
        </div>
      </div>
    </div>
  );
}

export default FilmInfo;
