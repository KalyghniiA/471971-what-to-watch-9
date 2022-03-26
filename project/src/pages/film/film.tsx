import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogClassName, CatalogTitle } from '../../const';
import { useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';

function Film(): JSX.Element {
  const { film, isFilmDataLoaded, isSimilarFilmsDataLoaded } = useAppSelector((state) => state);

  if (!isFilmDataLoaded && !isSimilarFilmsDataLoaded) {
    return <Preloader />;
  }

  if (!film) {
    return <Preloader />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <FilmHero filmCardData={film} />
        <FilmInfo filmCardData={film} />
      </section>
      <div className="page-content">
        <Catalog title={CatalogTitle.Card} className={CatalogClassName.Card} />
        <Footer />
      </div>
    </>
  );
}

export default Film;
