import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Gallery from './components/gallery/gallery';
import Login from './components/login/login';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
