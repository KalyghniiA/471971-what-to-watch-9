import FilmPromoCard from '../../components/film-promo-card/film-promo-card';
import Catalog from '../../components/catalog/catalog';
import { CatalogTitle, CatalogTitleClassName } from '../../const';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetShownCards } from '../../store/action';
import Preloader from '../../components/preloader/preloader';

function Main() {
  const dispatch = useAppDispatch();
  const { promoFilm, isFilmsDataLoaded, isPromoFilmDataLoaded } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(resetShownCards());
  }, []);

  if (!isFilmsDataLoaded && !isPromoFilmDataLoaded) {
    return <Preloader />;
  }

  if (!promoFilm) {
    return <Preloader />;
  }

  return (
    <>
      <FilmPromoCard filmPromoData={promoFilm} />
      <div className="page-content">
        <Catalog title={CatalogTitle.Main} titleClass={CatalogTitleClassName.Main} isMainView />
        <Footer />
      </div>
    </>
  );
}

export default Main;
