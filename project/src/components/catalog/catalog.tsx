import GenresList from '../genres-list/genres-list';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import BtnShowMore from '../btn-show-more/btn-show-more';
import { filterFilm } from '../../utils';
import { useAppSelector } from '../../hooks';
import { QuantityCards, ViewLink } from '../../const';

type CatalogProps = {
  title: string;
  className?: string;
  titleClass?: string;
  isMainView?: boolean;
};

function Catalog({ title, className = '', titleClass = '', isMainView = false }: CatalogProps): JSX.Element {
  const { films, activeGenre, activeLink, quantityShownCards, similarFilms } = useAppSelector((state) => state);
  const filmsData = isMainView ? filterFilm(films, activeGenre) : films;

  const getActiveCatalogList = () => {
    switch (activeLink) {
      case ViewLink.Main:
        return <CatalogFilmsList filmCardsData={filmsData.slice(0, quantityShownCards)} />;
      case ViewLink.Card:
        return <CatalogFilmsList filmCardsData={similarFilms.slice(0, QuantityCards.Card)} />;
      case ViewLink.List:
        return <CatalogFilmsList filmCardsData={filmsData} />;
    }
  };

  const isShowMoreVisible = () => filmsData.length > quantityShownCards;

  return (
    <section className={`catalog ${className}`}>
      <h2 className={`catalog__title ${titleClass}`}>{title}</h2>
      {isMainView && <GenresList />}
      {getActiveCatalogList()}
      {isMainView && isShowMoreVisible() && <BtnShowMore />}
    </section>
  );
}

export default Catalog;
