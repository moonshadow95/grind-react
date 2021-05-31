import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Body from './components/body/body';
import Home from './components/home/home';
import Login from './components/login/login';

function App({ FileInput, authService, bodyRepository }) {
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
            <Body
              FileInput={FileInput}
              authService={authService}
              type={typeIsBody}
              bodyRepository={bodyRepository}
            />
          </Route>
          <Route path="/home/diet">
            <Body
              FileInput={FileInput}
              authService={authService}
              type={typeIsDiet}
              bodyRepository={bodyRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
