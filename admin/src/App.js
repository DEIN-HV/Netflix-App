import { useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { AuthContext } from "./context/authContext/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <Router>
      <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}
      </Route>

      {user ? (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <ProductList />
              </Route>
              <Route path="/movie/:movieId">
                <Product />
              </Route>
              <Route path="/newmovie">
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </>
      ) :
        <Redirect to="/login" />
      }



    </Router>
  );
}

export default App;
