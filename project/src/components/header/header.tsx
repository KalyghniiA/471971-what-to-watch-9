import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus, ViewLink } from '../../const';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function UserBlockNoAuth(): JSX.Element {
  return (
    <div className="user-block">
      <Link to={AppRoute.Login} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
}

function Header(): JSX.Element {
  const { authorizationStatus, activeLink } = useAppSelector((state) => state);

  const headerClassName = classNames('page-header', {
    'film-card__head': activeLink !== ViewLink.List,
    'user-page__head': activeLink === ViewLink.List,
  });

  return (
    <header className={headerClassName}>
      <Logo />
      {activeLink === ViewLink.List && <h1 className="page-title user-page__title">My list</h1>}
      {authorizationStatus !== AuthorizationStatus.Auth && <UserBlockNoAuth />}
      {authorizationStatus === AuthorizationStatus.Auth && <UserBlock />}
    </header>
  );
}

export default Header;
