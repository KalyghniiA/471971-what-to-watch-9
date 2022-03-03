import { FilmType } from '../../types/film';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import AddReview from '../../pages/add-review/add-review';

type AppScreenProps = {
  filmsData: FilmType[];
};

function App({ filmsData }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main filmPromoData={filmsData[0]} filmsData={filmsData} />} />
        <Route path={`${AppRoute.Film}/:id`} element={<Film filmsData={filmsData} />} />
        <Route path={`${AppRoute.Film}/:id/${AppRoute.AddReview}`} element={<AddReview filmsData={filmsData} />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList filmsData={filmsData} />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
