import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServicesCard from "./components/ServicesCard/ServicesCard";
import About from "./components/About/About";
import Logout from "./components/Logout/Logout";
import Checkout from "./components/Checkout/Checkout";

export const UserContext = createContext();

function App() {
  const [loggerInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggerInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/services">
              <Header />
              <Footer />
            </PrivateRoute>
            <Route path="/courses">
              <Header />
              <ServicesCard />
              <Footer />
            </Route>
            <Route path="/schedule">
              <Header />
              <Footer />
            </Route>
            <Route path="/blog">
              <Header />
              <Footer />
            </Route>
            <PrivateRoute path="/checkout/:key">
              <Admin />
              <Checkout />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/manageCourses">
              <Admin />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/manageTrainers">
              <Admin />
              <Footer />
            </PrivateRoute>
            <Route path="/about">
              <Header />
              <About />
              <Footer />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
              <Footer />
            </Route>
            <Route path="/logout">
              <Header />
              <Logout />
              <Footer />
            </Route>
            <Route path="/signup">
              <Header />
              <Signup />
              <Footer />
            </Route>
            <Route path="*">
              <Header />
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
