import Header from '../header/header';
import { Film as FilmType } from '../../types/film';
import FilmPromoInfo from '../film-promo-info/film-promo-info';

type FilmPromoDataProps = {
  filmPromoData: FilmType;
};

function FilmPromoCard({ filmPromoData }: FilmPromoDataProps): JSX.Element {
  const { backgroundImage, name } = filmPromoData;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <FilmPromoInfo filmPromoData={filmPromoData} />
      </div>
    </section>
  );
}
export default FilmPromoCard;
