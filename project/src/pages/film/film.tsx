import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import { FilmType } from '../../types/film';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { AppRoute, CatalogClassName, CatalogTitle } from '../../const';
import { Navigate, useParams } from 'react-router-dom';

type FilmProps = {
  filmsData: FilmType[];
};

function Film({ filmsData }: FilmProps): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const film = filmsData.find((filmCard) => id && filmCard.id === +id);
  if (!film) {
    return <Navigate to={AppRoute.Root} />;
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
