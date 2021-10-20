import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

import NewsDetails from "./pages/Home/NewsDetails/NewsDetails";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";
import ServiceDetails from "./pages/Home/Services/ServiceDetails";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/news/:newsId">
              <NewsDetails></NewsDetails>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/contactUs">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
