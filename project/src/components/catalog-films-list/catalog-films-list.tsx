import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';


type CatalogFilmsListProps = {
  filmCardsData: Film[]
}


function CatalogFilmsList({filmCardsData}: CatalogFilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {filmCardsData.map((filmData) => <FilmCard filmData={filmData} key={filmData.id} />)}
    </div>
  );
}

export default CatalogFilmsList;
