import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import { fetchFilmsAction, fetchPromoFilmAction } from './store/film-data-process/film-data-process';
import 'react-toastify/dist/ReactToastify.css';
import { checkAuthorization } from './store/user-process/user-process';

store.dispatch(checkAuthorization());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
