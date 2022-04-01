import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogClassName, CatalogTitle, LoadingStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { resetLoadDataStatus } from '../../store/film-data-process/film-data-process';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
    return () => {
      dispatch(resetLoadDataStatus());
    };
  }, [id]);

  const { film, isFilmStatus, isSimilarFilmsStatus, isReviewsStatus } = useAppSelector(({ DATA }) => DATA);

  if (
    isFilmStatus === LoadingStatus.LOADING ||
    isSimilarFilmsStatus === LoadingStatus.LOADING ||
    isReviewsStatus === LoadingStatus.LOADING
  ) {
    return <Preloader />;
  }

  if (
    isFilmStatus === LoadingStatus.FAILED ||
    isSimilarFilmsStatus === LoadingStatus.FAILED ||
    isReviewsStatus === LoadingStatus.FAILED
  ) {
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
