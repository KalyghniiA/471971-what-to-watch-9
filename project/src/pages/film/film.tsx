import FilmHero from '../../components/film-hero/film-hero';
import FilmInfo from '../../components/film-info/film-info';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogClassName, CatalogTitle, LoadingStatus, ViewLink } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchFilmAction,
  fetchSimilarFilmsAction,
  resetLoadDataStatus,
  selectFilm,
  selectFilmStatus
} from '../../store/film-data-process/film-data-process';
import { selectViewLink } from '../../store/app-process/app-process';
import NotFound from '../not-found/not-found';
import { fetchCommentsAction } from '../../store/review-data-process/review-data-process';

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchFilmAction(Number(id)));
    dispatch(fetchSimilarFilmsAction(Number(id)));
    dispatch(fetchCommentsAction(Number(id)));
    dispatch(selectViewLink(ViewLink.Card));
    return () => {
      dispatch(resetLoadDataStatus());
    };
  }, [id, dispatch]);

  const film = useAppSelector(selectFilm);
  const filmStatus = useAppSelector(selectFilmStatus);

  if (filmStatus === LoadingStatus.Loading) {
    return <Preloader />;
  }

  if (!film) {
    return <NotFound />;
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
