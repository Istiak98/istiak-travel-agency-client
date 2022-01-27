import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
// import Navbar from "./components/Shared/Navbar/Navbar";
import DashBoard from "./components/Home/DashBoard/DashBoard"
import Contactus from "./components/Home/Contactus/Contactus";
import RegistrationForm from "./components/Home/RegistrationForm/RegistrationForm";
import LoginForm from "./components/Home/LoginForm/LoginForm";
// import NavBar from "./components/Home/NavBar/NavBar";
import TourInfo from "./components/Home/TourInfo/TourInfo";
import PrivateRoute from "./components/Shared/Login/PrivateRoute/PrivateRoute";
import NotFound from "./components/Shared/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navbar></Navbar> */}
          {/* <NavBar></NavBar> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contactus">
              <Contactus></Contactus>
            </Route>
            <Route path="/loginform">
              <LoginForm></LoginForm>
            </Route>
            <Route path="/registrationform">
              <RegistrationForm></RegistrationForm>
            </Route>
            <PrivateRoute path="/detailTours/:id">
              <TourInfo></TourInfo>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard/>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
