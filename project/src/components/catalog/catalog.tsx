import GenresList from '../genres-list/genres-list';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import {Film} from '../../types/film';
import BtnShowMore from '../btn-show-more/btn-show-more';


type CatalogProps = {
  filmCardsData: Film[]
}

function Catalog({filmCardsData}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <CatalogFilmsList filmCardsData={filmCardsData} />
      <BtnShowMore />
    </section>
  );
}

export default Catalog;
