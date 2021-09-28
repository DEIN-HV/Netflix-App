import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="home">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route exact path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/login">
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>

          {user &&
            <>
              <Route path="/movies">
                <Home type="movies" />
              </Route>

              <Route path="/series">
                <Home type="series" />
              </Route>
              <Route path="/watch">
                <Watch />
              </Route>
            </>
          }



        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
