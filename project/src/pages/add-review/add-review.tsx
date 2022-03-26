import AddReviewHeader from '../../components/add-review-header/add-review-header';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film as FilmType } from '../../types/film';

type AddReviewProps = {
  filmsData: FilmType[];
};

function AddReview({ filmsData }: AddReviewProps): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const film = filmsData.find((filmCard) => id && filmCard.id === +id);
  if (!film) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <section className="film-card film-card--full">
      <AddReviewHeader filmData={film} />
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
