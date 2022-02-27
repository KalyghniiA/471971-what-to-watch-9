import FilmCard from '../film-card/film-card';
import { FilmType } from '../../types/film';
import { useState } from 'react';

type CatalogFilmsListProps = {
  filmCardsData: FilmType[];
};

function CatalogFilmsList({ filmCardsData }: CatalogFilmsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState(0)

  const updateActiveCard = (value: number): void  => {
    setActiveCard(value);
  }

  return (
    <div className="catalog__films-list">
      {filmCardsData.map((filmData) => (
        <FilmCard filmData={filmData} key={filmData.id} onActive={updateActiveCard}/>
      ))}
    </div>
  );
}

export default CatalogFilmsList;
