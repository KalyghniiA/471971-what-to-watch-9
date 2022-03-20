import { Link } from 'react-router-dom';
import { AppRoute, ViewLink } from '../../const';
import { useAppDispatch } from '../../hooks';
import { selectViewLink } from '../../store/action';

type LogoProps = {
  className?: string;
};

function Logo({ className = '' }: LogoProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="logo">
      <Link
        className={`logo__link ${className}`}
        to={AppRoute.Root}
        onClick={() => {
          dispatch(selectViewLink(ViewLink.Main));
        }}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
