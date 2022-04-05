import FilmPromoCard from '../../components/film-promo-card/film-promo-card';
import Catalog from '../../components/catalog/catalog';
import { CatalogTitle, CatalogTitleClassName, LoadingStatus, ViewLink } from '../../const';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';
import { resetShownCards, selectViewLink } from '../../store/app-process/app-process';
import ServerFailed from '../../components/server-failed/server-failed';

function Main() {
  const dispatch = useAppDispatch();
  const { promoFilm, isFilmsStatus, isPromoFilmStatus } = useAppSelector(({ FILM_DATA }) => FILM_DATA);

  useEffect(() => {
    dispatch(resetShownCards());
    dispatch(selectViewLink(ViewLink.Main));
  }, []);

  if (isFilmsStatus === LoadingStatus.LOADING || isPromoFilmStatus === LoadingStatus.LOADING) {
    return <Preloader />;
  }

  if (isFilmsStatus === LoadingStatus.FAILED || isPromoFilmStatus === LoadingStatus.FAILED) {
    return <ServerFailed />;
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
