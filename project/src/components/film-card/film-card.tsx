import { FilmType } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useEffect, useState } from 'react';
import FilmCardPlayer from '../film-card-player/film-card-player';

type FilmCardProps = {
  filmData: FilmType;
};

function FilmCard({ filmData }: FilmCardProps): JSX.Element {
  const { id, name, previewImage, previewVideoLink } = filmData;

  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    return () => {
      clearTimeout(timer);
      setTimer(0);
    };
  }, [active]);

  const launchVideo = () => {
    setTimer(window.setTimeout(() => setActive(true), 1000));
  };

  const stopVideo = () => {
    if (timer) {
      clearTimeout(timer);
      setTimer(0);
    }
    setActive(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={launchVideo} onMouseLeave={stopVideo}>
      <Link to={`${AppRoute.Film}/${id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          {active ? (
            <FilmCardPlayer previewVideoLink={previewVideoLink} previewImage={previewImage} />
          ) : (
            <img src={`img/${previewImage}`} alt={name} width="280" height="175" />
          )}
        </div>
        {!active && <h3 className="small-film-card__title">{name}</h3>}
      </Link>
    </article>
  );
}

export default FilmCard;
