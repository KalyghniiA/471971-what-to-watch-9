import AddReviewHeader from '../../components/add-review-header/add-review-header';
import AddReviewForm from '../../components/add-review-form/add-review-form';

function AddReview(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <AddReviewHeader />
      <AddReviewForm />
    </section>
  )
}

export default AddReview;
