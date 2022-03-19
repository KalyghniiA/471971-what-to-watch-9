import { FilmType } from '../../types/film';
import FilmPromoCard from '../../components/film-promo-card/film-promo-card';
import Catalog from '../../components/catalog/catalog';
import { CatalogTitle, CatalogTitleClassName } from '../../const';
import Footer from '../../components/footer/footer';

type MainProps = {
  filmPromoData: FilmType;
  filmsData: FilmType[];
};

function Main({ filmPromoData, filmsData }: MainProps) {
  return (
    <>
      <FilmPromoCard filmPromoData={filmPromoData} />
      <div className="page-content">
        <Catalog title={CatalogTitle.Main} titleClass={CatalogTitleClassName.Main} isMainView />
        <Footer />
      </div>
    </>
  );
}

export default Main;
