import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Main from './components/main/main';

function App({ FileInput, authService, bodyRepository, dietRepository }) {
  const typeIsBody = 'body';
  const typeIsDiet = 'diet';
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/home">
            <Home authService={authService} />
          </Route>
          <Route path="/home/body">
            <Main
              FileInput={FileInput}
              authService={authService}
              type={typeIsBody}
              bodyRepository={bodyRepository}
            />
          </Route>
          <Route path="/home/diet">
            <Main
              FileInput={FileInput}
              authService={authService}
              type={typeIsDiet}
              dietRepository={dietRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
