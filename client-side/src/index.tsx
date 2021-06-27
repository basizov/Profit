import ReactDOM from 'react-dom';
import App from './app/layout/App';
import './app/layout/style.scss';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import ScrollToTop from './app/layout/ScrollToTop';
import { store, StoreContext } from './app/store/store';

export const  history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <ScrollToTop />
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);
