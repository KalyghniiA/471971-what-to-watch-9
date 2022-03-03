import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './not-found.module.css';

function NotFound(): JSX.Element {
  return (
    <div className={styles.div}>
      <h1 className={styles.header}>404 Not Found</h1>
      <Link to={AppRoute.Root} className={styles.button}>
        Back
      </Link>
    </div>
  );
}

export default NotFound;
