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
import Contact from "./components/Contact/Contact";
import Logout from "./components/Logout/Logout";
import Checkout from "./components/Checkout/Checkout";
import ManageCourses from "./components/ManageCourses/ManageCourses";
import ManageTrainers from "./components/ManageTrainers/ManageTrainers";
import AddTrainer from "./components/AddTrainer/AddTrainer";
import AddCourse from "./components/AddCourse/AddCourse";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

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
            <Route path="/contact">
              <Header />
              <Contact />
              <Footer />
            </Route>
            <Route path="/blog">
              <Header />
              <Footer />
            </Route>
            <PrivateRoute path="/profile">
              <Header />
              <UserDashboard />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Header />
              <OrderConfirmation />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
              <AdminDashboard />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/manageCourses">
              <Admin />
              <ManageCourses />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/manageTrainers">
              <Admin />
              <ManageTrainers />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/addTrainer">
              <Admin />
              <AddTrainer />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/addCourse">
              <Admin />
              <AddCourse />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <Admin />
              <AddAdmin />
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
