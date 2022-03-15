import { FilmCardTabActiveClassName } from '../../const';

type FilmCardTabsProps = {
  activeValue: string;
  onActiveValue: (value: string) => void;
};

type FilmCardTabProps = FilmCardTabsProps & {
  value: string;
};

const tabValues = ['Overview', 'Details', 'Reviews'];

function FilmCardTab({ activeValue, onActiveValue, value }: FilmCardTabProps): JSX.Element {
  const activeClass = activeValue === value ? FilmCardTabActiveClassName.Active : '';

  return (
    <li className={`film-nav__item ${activeClass}`}>
      <a href="#" className="film-nav__link" data-value={value} onClick={() => onActiveValue(value)}>
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
