import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { Link, useParams } from 'react-router-dom';

function Breadcrumbs(): JSX.Element {
  const { id } = useParams();

  const { films } = useAppSelector(({ FILM_DATA }) => FILM_DATA);

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}/${id}`} className="breadcrumbs__link">
            {films[Number(id) - 1].name}
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
