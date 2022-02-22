import {FilmType} from '../../types/film';
import FilmPromoCard from '../../components/film-promo-card/film-promo-card';
import PageContent from '../../components/page-content/page-content';

type MainProps = {
  filmPromoData: FilmType,
  filmsData: FilmType[]
}

function Main({filmPromoData, filmsData}: MainProps) {
  return (
    <>
      <FilmPromoCard
        filmPromoData={filmPromoData}
      />
      <PageContent
        filmsData={filmsData}
      />
    </>
  );
}

export default Main;
