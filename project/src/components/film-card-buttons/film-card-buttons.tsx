import BtnPlay from '../btn-play/btn-play';
import BtnAddList from '../btn-add-list/btn-add-list';
import BtnAddReview from '../btn-add-review/btn-add-review';

type FilmCardButtonsProps = {
  modification: boolean,
}

function FilmCardButtons ({modification}: FilmCardButtonsProps): JSX.Element {
  return (
    <div className="film-card__buttons">
      <BtnPlay />
      <BtnAddList />
      {modification ? <BtnAddReview /> : ''}
    </div>
  );
}
export default FilmCardButtons;
