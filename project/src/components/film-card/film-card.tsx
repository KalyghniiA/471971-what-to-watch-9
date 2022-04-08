import { Film as FilmType } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useEffect, useRef, useState } from 'react';
import FilmCardPlayer from '../film-card-player/film-card-player';

type FilmCardProps = {
  filmData: FilmType;
};

const VIDEO_START_TIMEOUT = 1000;

function FilmCard({ filmData }: FilmCardProps): JSX.Element {
  const [active, setActive] = useState(false);
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const { id, name, previewImage, previewVideoLink } = filmData;

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const handlerLaunchVideo = () => {
    timerRef.current = setTimeout(() => setActive(true), VIDEO_START_TIMEOUT);
  };

  const handlerStopVideo = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActive(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handlerLaunchVideo}
      onMouseLeave={handlerStopVideo}
    >
      <Link to={`${AppRoute.Film}/${id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          {active ? (
            <FilmCardPlayer previewVideoLink={previewVideoLink} previewImage={previewImage} />
          ) : (
            <img src={previewImage} alt={name} width="280" height="175" />
          )}
        </div>
        {!active && <h3 className="small-film-card__title">{name}</h3>}
      </Link>
    </article>
  );
}

export default FilmCard;
