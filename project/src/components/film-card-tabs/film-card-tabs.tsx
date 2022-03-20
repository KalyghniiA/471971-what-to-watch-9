import { FilmCardTabsValue } from '../../const';
import classNames from 'classnames';

type FilmCardTabsProps = {
  activeValue: string;
  onActiveValue: (value: FilmCardTabsValue) => void;
};

type FilmCardTabProps = FilmCardTabsProps & {
  value: FilmCardTabsValue;
};

const tabValues = [FilmCardTabsValue.Overview, FilmCardTabsValue.Details, FilmCardTabsValue.Reviews];

function FilmCardTab({ activeValue, onActiveValue, value }: FilmCardTabProps): JSX.Element {
  return (
    <li
      className={classNames('film-nav__item', {
        'film-nav__item--active': activeValue === value,
      })}
    >
      <a
        href="#"
        className="film-nav__link"
        onClick={(evt) => {
          evt.preventDefault();
          onActiveValue(value);
        }}
      >
        {value}
      </a>
    </li>
  );
}

function FilmCardTabs({ activeValue, onActiveValue }: FilmCardTabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {tabValues.map((value) => (
          <FilmCardTab activeValue={activeValue} value={value} key={value} onActiveValue={onActiveValue} />
        ))}
      </ul>
    </nav>
  );
}

export default FilmCardTabs;
