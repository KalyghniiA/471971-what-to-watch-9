import { Film as FilmType } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute, ViewLink } from '../../const';
import { useEffect, useRef, useState } from 'react';
import FilmCardPlayer from '../film-card-player/film-card-player';
import { useAppDispatch } from '../../hooks';
import { resetLoadDataStatus, selectViewLink } from '../../store/action';

type FilmCardProps = {
  filmData: FilmType;
};

function FilmCard({ filmData }: FilmCardProps): JSX.Element {
  const [active, setActive] = useState(false);
  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);

  const dispatch = useAppDispatch();

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
    timerRef.current = setTimeout(() => setActive(true), 1000);
  };

  const handlerStopVideo = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActive(false);
  };

  const handleNavigateToFilm = () => {
    dispatch(selectViewLink(ViewLink.Card));
    dispatch(resetLoadDataStatus());
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handlerLaunchVideo}
      onMouseLeave={handlerStopVideo}
    >
      <Link to={`${AppRoute.Film}/${id}`} className="small-film-card__link" onClick={handleNavigateToFilm}>
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
