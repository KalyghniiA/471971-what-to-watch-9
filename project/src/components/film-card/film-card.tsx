import { FilmType } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardProps = {
  filmData: FilmType,
}

function FilmCard({filmData}: FilmCardProps): JSX.Element {
  const  {
    id,
    name,
    previewImage,
  } = filmData;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <Link to={`${AppRoute.Film}/${id}`} style={{display: 'block'}}>
          <img src={`img/${previewImage}`} alt={name} width="280" height="175" style={{display: 'block'}}/>
        </Link>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
