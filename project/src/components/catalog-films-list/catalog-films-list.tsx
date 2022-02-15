import SmallFilmCard from '../small-film-card/small-film-card';

type DataProps = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type CatalogFilmsListProps = {
  cardsData: DataProps[]
}


function CatalogFilmsList ({cardsData}: CatalogFilmsListProps):JSX.Element {
  return (
    <div className="catalog__films-list">
      {cardsData.map((film) => <SmallFilmCard data = {film} key = {film.id}/>)}
    </div>
  );
}

export default CatalogFilmsList;
