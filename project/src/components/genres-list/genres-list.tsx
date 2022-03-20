import { genres } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectGenre, resetShownCards } from '../../store/action';
import classNames from 'classnames';

type GenreTabProps = {
  text: string;
  value: string;
};

function GenreTab({ text, value }: GenreTabProps): JSX.Element {
  const { activeGenre } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <li
      className={classNames('catalog__genres-item', {
        'catalog__genres-item--active': value === activeGenre,
      })}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(selectGenre(value));
          dispatch(resetShownCards());
        }}
      >
        {text}
      </a>
    </li>
  );
}

function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {Object.keys(genres).map((tab) => (
        <GenreTab text={genres[tab]} value={tab} key={tab} />
      ))}
    </ul>
  );
}

export default GenresList;
