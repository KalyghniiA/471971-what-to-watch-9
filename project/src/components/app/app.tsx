import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import { AppRoute } from '../../const';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../../pages/add-review/add-review';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { selectFilms } from '../../store/film-data-process/film-data-process';
import { selectAuthorizationStatus } from '../../store/user-process/user-process';

function App(): JSX.Element {
  const films = useAppSelector(selectFilms);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={`${AppRoute.Film}/:id`} element={<Film />} />
        <Route path={`${AppRoute.Film}/:id/${AppRoute.AddReview}`} element={<AddReview filmsData={films} />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
