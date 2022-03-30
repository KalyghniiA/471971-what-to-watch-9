import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogClassName, CatalogTitle } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
  }, []);

  const { film, isFilmDataLoaded, isSimilarFilmsDataLoaded, isReviewsDataLoaded } = useAppSelector((state) => state);

  if (!isFilmDataLoaded && !isSimilarFilmsDataLoaded && !isReviewsDataLoaded) {
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
