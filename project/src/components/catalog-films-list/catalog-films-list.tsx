import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/film';

type CatalogFilmsListProps = {
  filmCardsData: FilmType[];
};

function CatalogFilmsList({ filmCardsData }: CatalogFilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {filmCardsData.map((filmData) => (
        <FilmCard filmData={filmData} key={filmData.id} />
      ))}
    </div>
  );
}

export default CatalogFilmsList;
