import {FilmType} from '../../types/film';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main/main';
import Film from '../../pages/film/film';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Player from '../../pages/player/player';
import { AppRoute } from '../../const';

type AppScreenProps = {
  filmsData : FilmType[],
}


function App({filmsData}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main filmPromoData={filmsData[0]} filmsData={filmsData} />} />
        <Route path={AppRoute.Film} element={<Film filmsData={filmsData} />}/>
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={<MyList filmsData={filmsData} />} />
        <Route path={AppRoute.Player} element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
