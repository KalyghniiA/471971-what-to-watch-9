import { FilmType } from '../../types/film';
import FilmPromoCard from '../../components/film-promo-card/film-promo-card';
import Catalog from '../../components/catalog/catalog';
import { CatalogTitle, CatalogTitleClassName } from '../../const';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { resetShownCards } from '../../store/action';

type MainProps = {
  filmPromoData: FilmType;
};

function Main({ filmPromoData }: MainProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetShownCards());
  }, []);

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
