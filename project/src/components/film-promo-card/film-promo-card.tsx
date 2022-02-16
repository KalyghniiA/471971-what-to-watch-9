import Header from '../header/header';
import {FilmPromo} from '../../types/film';
import FilmPromoInfo from '../film-promo-info/film-promo-info';

type FilmPromoDataProps = {
  filmPromoData: FilmPromo
}

function FilmPromoCard({filmPromoData}: FilmPromoDataProps): JSX.Element {
  const {bgImage} = filmPromoData;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={`img/${bgImage}`} alt="The Grand Budapest Hotel"/>
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">

        <FilmPromoInfo
          filmPromoData={filmPromoData}
        />
      </div>
    </section>
  );
}
export default FilmPromoCard;
