import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const notFoundStyle = {
  backgroundImage: 'url(img/404_bg.jpeg)',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100vh',
};

const headerStyle = {
  display: 'block',
  width: '300px',
  margin: '0 auto',
  paddingTop: '35vh',
  color: 'white',
};

const linkStyle = {
  display: 'block',
  width: '150px',
  margin: '40px auto',
  border: '1px solid white',
  borderRadius: '3px',
  padding: '10px 50px',
  color: 'white',
};

function NotFound (): JSX.Element {
  return (
    <div style={notFoundStyle}>
      <h1 style={headerStyle}>404 Not Found</h1>
      <Link to={AppRoute.Root} style={linkStyle}>Back</Link>
    </div>
  );
}

export default NotFound;
