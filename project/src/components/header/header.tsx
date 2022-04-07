import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus, ViewLink } from '../../const';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { getAvatarUrl } from '../../services/avatarUrl';
import { selectStateActiveLink, selectViewLink } from '../../store/app-process/app-process';
import { fetchFavoriteFilmsAction } from '../../store/favorite-film-data-process/favorite-film-data-process';
import { logoutAction, selectAuthorizationStatus } from '../../store/user-process/user-process';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

function UserBlockNoAuth(): JSX.Element {
  return (
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
}

function UserBlockAuth(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatarUrl = getAvatarUrl();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link
            to={AppRoute.MyList}
            onClick={() => {
              dispatch(selectViewLink(ViewLink.List));
              dispatch(fetchFavoriteFilmsAction());
            }}
          >
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}

function Header(): JSX.Element {
  const activeLink = useAppSelector(selectStateActiveLink);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const headerClassName = classNames('page-header', {
    'film-card__head': activeLink !== ViewLink.List,
    'user-page__head': activeLink === ViewLink.List,
  });

  return (
    <header className={headerClassName}>
      <Logo />
      {activeLink === ViewLink.List && <h1 className="page-title user-page__title">My list</h1>}
      {activeLink === ViewLink.AddReview && <Breadcrumbs />}
      {authorizationStatus !== AuthorizationStatus.Auth && <UserBlockNoAuth />}
      {authorizationStatus === AuthorizationStatus.Auth && <UserBlockAuth />}
    </header>
  );
}

export default Header;
