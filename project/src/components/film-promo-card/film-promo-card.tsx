import Header from '../header/header';
import { FilmType } from '../../types/film';
import FilmPromoInfo from '../film-promo-info/film-promo-info';

type FilmPromoDataProps = {
  filmPromoData: FilmType
}

function FilmPromoCard({filmPromoData}: FilmPromoDataProps): JSX.Element {
  const {backgroundImage} = filmPromoData;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={`img/${backgroundImage}`} alt="The Grand Budapest Hotel"/>
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
