import { Link } from 'react-router-dom';
import { AppRoute, ViewLink } from '../../const';
import { useAppDispatch } from '../../hooks';
import { selectViewLink } from '../../store/action';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link
            to={AppRoute.MyList}
            onClick={() => {
              dispatch(selectViewLink(ViewLink.List));
            }}
          >
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}

export default UserBlock;
