import Header from '../header/header';
import { Film as FilmType } from '../../types/film';

type AddReviewHeaderProps = {
  filmData: FilmType;
};

function AddReviewHeader({ filmData }: AddReviewHeaderProps): JSX.Element {
  const { backgroundImage, name, posterImage } = filmData;

  return (
    <div className="film-card__header">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="film-card__poster film-card__poster--small">
        <img src={posterImage} alt={name} width="218" height="327" />
      </div>
    </div>
  );
}

export default AddReviewHeader;
