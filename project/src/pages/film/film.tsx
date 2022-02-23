import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import { FilmType } from '../../types/film';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogClassName, CatalogTitle } from '../../const';

type FilmProps = {
  filmsData: FilmType[]
}

function Film({filmsData}: FilmProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <FilmHero />
        <FilmInfo />
      </section>
      <div className="page-content">
        <Catalog
          filmCardsData={filmsData}
          title={CatalogTitle.Card}
          className={CatalogClassName.Card}
        />
        <Footer />
      </div>
    </>
  );
}

export default Film;
