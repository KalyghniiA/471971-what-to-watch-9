import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { Link, useParams } from 'react-router-dom';
import { selectFilms } from '../../store/film-data-process/film-data-process';

function Breadcrumbs(): JSX.Element {
  const { id } = useParams();

  const film = useAppSelector(selectFilms).find((filmData) => Number(id) === filmData.id);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}/${id}`} className="breadcrumbs__link">
            {film?.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
