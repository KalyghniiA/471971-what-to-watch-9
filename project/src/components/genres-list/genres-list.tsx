import { genres } from '../../const';
import { useAppDispatch } from '../../hooks';
import { resetShownCard, selectionGenre } from '../../store/action';

type GenreTabProps = {
  text: string;
  value: string;
};

function GenreTab({ text, value }: GenreTabProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(selectionGenre(value));
          dispatch(resetShownCard());
        }}
      >
        {text}
      </a>
    </li>
  );
}

function GenresList(): JSX.Element {
  const tabs = Object.keys(genres);

  return (
    <ul className="catalog__genres-list">
      {tabs.map((tab) => (
        <GenreTab text={genres[tab]} value={tab} key={tab} />
      ))}
    </ul>
  );
}

export default GenresList;
