import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardButtons = {
  id: number;
};

function FilmCardButtons({ id }: FilmCardButtons): JSX.Element {
  return (
    <div className="film-card__buttons">
      <Link to={`${AppRoute.Player}/${id}}`} className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
        <span>My list</span>
      </Link>
      <Link to={`${AppRoute.Film}/${id}/${AppRoute.AddReview}`} className="btn film-card__button">
        Add review
      </Link>
    </div>
  );
}
export default FilmCardButtons;
