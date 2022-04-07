import FilmPromoCard from '../../components/film-promo-card/film-promo-card';
import Catalog from '../../components/catalog/catalog';
import { CatalogTitle, CatalogTitleClassName, LoadingStatus, ViewLink } from '../../const';
import Footer from '../../components/footer/footer';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';
import { resetShownCards, selectViewLink } from '../../store/app-process/app-process';
import ServerFailed from '../../components/server-failed/server-failed';
import {
  selectFilmsStatus,
  selectPromoFilm,
  selectPromoFilmStatus
} from '../../store/film-data-process/film-data-process';

function Main() {
  const dispatch = useAppDispatch();

  const promoFilm = useAppSelector(selectPromoFilm);
  const filmsStatus = useAppSelector(selectFilmsStatus);
  const promoFilmStatus = useAppSelector(selectPromoFilmStatus);

  useEffect(() => {
    dispatch(resetShownCards());
    dispatch(selectViewLink(ViewLink.Main));
  }, []);

  if (filmsStatus === LoadingStatus.Loading || promoFilmStatus === LoadingStatus.Loading) {
    return <Preloader />;
  }

  if (filmsStatus === LoadingStatus.Failed || promoFilmStatus === LoadingStatus.Failed) {
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
