import FilmOverview from '../film-overview/film-overview';
import { FilmType } from '../../types/film';
import FilmCardTabs from '../film-card-tabs/film-card-tabs';
import { useState } from 'react';
import { FilmCardTabsValue } from '../../const';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import { mockReviews } from '../../mocks/reviews';

type FilmInfoProps = {
  filmCardData: FilmType;
};

function FilmInfo({ filmCardData }: FilmInfoProps): JSX.Element {
  const [activeValue, setActiveValue] = useState<string>(FilmCardTabsValue.Overview);

  const handleActiveValue = (value: string): void => {
    setActiveValue(value);
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
        <div className="film-card__desc">
          <FilmCardTabs activeValue={activeValue} onActiveValue={handleActiveValue} />

          {activeValue === FilmCardTabsValue.Overview && <FilmOverview filmData={filmCardData} />}
          {activeValue === FilmCardTabsValue.Details && <FilmDetails filmData={filmCardData} />}
          {activeValue === FilmCardTabsValue.Reviews && <FilmReviews reviews={mockReviews} />}
        </div>
      </div>
    </div>
  );
}

export default FilmInfo;
