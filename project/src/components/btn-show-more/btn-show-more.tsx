import { useAppDispatch } from '../../hooks';
import { increaseLimit } from '../../store/app-process/app-process';

function BtnShowMore(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(increaseLimit())}>
        Show more
      </button>
    </div>
  );
}

export default BtnShowMore;
