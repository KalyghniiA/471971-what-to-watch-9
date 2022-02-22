import { FilmType } from '../../types/film';
import { Link } from 'react-router-dom';

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
        <img src={`img/${previewImage}`} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
