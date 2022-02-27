import { FilmType } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FilmCardProps = {
  filmData: FilmType;
  onActive: (value: number)=> void;
};

function FilmCard({ filmData, onActive}: FilmCardProps): JSX.Element {
  const { id, name, previewImage } = filmData;



  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={()=> onActive(id)}>
      <Link to={`${AppRoute.Film}/${id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          <img src={`img/${previewImage}`} alt={name} width="280" height="175" style={{ display: 'block' }} />
        </div>
        <h3 className="small-film-card__title">{name}</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
