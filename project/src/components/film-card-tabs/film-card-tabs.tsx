import { FilmCardTabActiveClassName, FilmCardTabsValue } from '../../const';

type FilmCardTabsProps = {
  activeValue: string;
  onActiveValue: (value: FilmCardTabsValue) => void;
};

type FilmCardTabProps = FilmCardTabsProps & {
  value: FilmCardTabsValue;
};

const tabValues = [FilmCardTabsValue.Overview, FilmCardTabsValue.Details, FilmCardTabsValue.Details];

function FilmCardTab({ activeValue, onActiveValue, value }: FilmCardTabProps): JSX.Element {
  const activeClass = activeValue === value ? FilmCardTabActiveClassName.Active : ''; //,библиотека classnames

  return (
    <li className={`film-nav__item ${activeClass}`}>
      <a
        href="#"
        className="film-nav__link"
        data-value={value}
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
