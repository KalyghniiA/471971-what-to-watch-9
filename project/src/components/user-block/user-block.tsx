import { Link } from 'react-router-dom';
import { AppRoute, ViewLink } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchFavoriteFilmsAction, logoutAction } from '../../store/api-actions';
import { getAvatarUrl } from '../../services/avatarUrl';
import { selectViewLink } from '../../store/app-process/app-process';

function UserBlock(): JSX.Element {
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

export default UserBlock;
