import GenresList from '../genres-list/genres-list';
import CatalogFilmsList from '../catalog-films-list/catalog-films-list';
import CatalogMore from '../catalog-more/catalog-more';

type DataProps = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type CatalogProps = {
  cardsData: DataProps[]
}

function Catalog ({cardsData}: CatalogProps):JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <CatalogFilmsList cardsData = {cardsData}/>
      <CatalogMore />
    </section>
  );
}

export default Catalog;
