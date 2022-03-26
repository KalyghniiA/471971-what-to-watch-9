import FilmOverview from '../film-overview/film-overview';
import { Film as FilmType } from '../../types/film';
import FilmCardTabs from '../film-card-tabs/film-card-tabs';
import { useState } from 'react';
import { FilmCardTabsValue } from '../../const';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import { useAppSelector } from '../../hooks';

type FilmInfoProps = {
  filmCardData: FilmType;
};

function FilmInfo({ filmCardData }: FilmInfoProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<FilmCardTabsValue>(FilmCardTabsValue.Overview);

  const handleActiveValue = (value: FilmCardTabsValue): void => setActiveTab(value);
  const { reviews } = useAppSelector((state) => state);
  const { posterImage, name } = filmCardData;

  const getActiveTabContent = () => {
    switch (activeTab) {
      case FilmCardTabsValue.Overview:
        return <FilmOverview filmData={filmCardData} />;
      case FilmCardTabsValue.Details:
        return <FilmDetails filmData={filmCardData} />;
      case FilmCardTabsValue.Reviews:
        return <FilmReviews reviews={reviews} />;
      default:
        throw new Error(`Unknown tab value: ${activeTab}`);
    }
  };

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
        <div className="film-card__desc">
          <FilmCardTabs activeValue={activeTab} onActiveValue={handleActiveValue} />
          {getActiveTabContent()}
        </div>
      </div>
    </div>
  );
}

export default FilmInfo;
