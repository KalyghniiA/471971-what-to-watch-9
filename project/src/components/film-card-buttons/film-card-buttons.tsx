import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, ViewLink } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FilmCardButtons as FilmCardButtonsTypes } from '../../types/film';
import { updateIsFavoriteFilmAction } from '../../store/favorite-film-data-process/favorite-film-data-process';

function FilmCardButtons({ id, isFavorite }: FilmCardButtonsTypes): JSX.Element {
  const { activeLink } = useAppSelector(({ APP }) => APP);
  const { authorizationStatus } = useAppSelector(({ LOGIN }) => LOGIN);

  const dispatch = useAppDispatch();

  const onClickMyList = () => {
    dispatch(
      updateIsFavoriteFilmAction({
        id: id,
        isFavorite: Number(!isFavorite),
      }),
    );
  };

  return (
    <div className="film-card__buttons">
      <Link to={`${AppRoute.Player}/${id}`} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <a
        href="#"
        className="btn btn--list film-card__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          onClickMyList();
        }}
      >
        {!isFavorite ? (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add" />
          </svg>
        ) : (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        )}
        <span>My list</span>
      </a>
      {activeLink !== ViewLink.Main && authorizationStatus === AuthorizationStatus.Auth && (
        <Link to={`${AppRoute.Film}/${id}/${AppRoute.AddReview}`} className="btn film-card__button">
          Add review
        </Link>
      )}
    </div>
  );
}
export default FilmCardButtons;
