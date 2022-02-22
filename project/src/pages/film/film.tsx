import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import { FilmType } from '../../types/film';
import Catalog from '../../components/catalog/catalog';
import { CatalogType } from '../../const';
import Footer from '../../components/footer/footer';

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
        <Catalog filmCardsData={filmsData} type={CatalogType.Card} />
        <Footer />
      </div>
    </>
  );
}

export default Film;
