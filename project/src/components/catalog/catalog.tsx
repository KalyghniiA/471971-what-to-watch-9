import GenresList from '../genres-list/genres-list';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import {FilmType} from '../../types/film';
import BtnShowMore from '../btn-show-more/btn-show-more';

type CatalogProps = {
  filmCardsData: FilmType[],
  title: string,
  className?: string,
  titleClass?: string,
  isMainView?: boolean,
}

function Catalog({filmCardsData, title, className = '', titleClass = '', isMainView = false}: CatalogProps): JSX.Element {
  return (
    <section className={`catalog ${className}`}>
      <h2 className={`catalog__title ${titleClass}`}>{title}</h2>
      {isMainView && <GenresList />}
      <CatalogFilmsList filmCardsData={filmCardsData} />
      {isMainView && <BtnShowMore />}
    </section>
  );
}

export default Catalog;
