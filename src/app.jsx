import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Gallery from './components/gallery/gallery';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/gallery">
            <Gallery authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
