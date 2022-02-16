import PageContent from '../page-content/page-content';
import {Film, FilmPromo} from '../../types/film';
import FilmPromoCard from '../film-promo-card/film-promo-card';


type AppScreenProps = {
  filmPromoData: FilmPromo,
  filmsData: Film[]
}

function App({filmPromoData, filmsData}: AppScreenProps): JSX.Element {
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

export default App;
