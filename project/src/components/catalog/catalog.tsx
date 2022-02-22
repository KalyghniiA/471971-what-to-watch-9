import GenresList from '../genres-list/genres-list';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import {FilmType} from '../../types/film';
import BtnShowMore from '../btn-show-more/btn-show-more';
import { CatalogType } from '../../const';


type CatalogProps = {
  filmCardsData: FilmType[],
  type: string,
}

function Catalog({filmCardsData, type}: CatalogProps): JSX.Element {
  switch (type) {
    case CatalogType.MyList:
      return (
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <CatalogFilmsList filmCardsData={filmCardsData} />
        </section>
      );
    case CatalogType.Card:
      return (
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogFilmsList filmCardsData={filmCardsData} />
        </section>
      );
    default:
      return (
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <CatalogFilmsList filmCardsData={filmCardsData} />
          <BtnShowMore />
        </section>
      );

  }
}

export default Catalog;
