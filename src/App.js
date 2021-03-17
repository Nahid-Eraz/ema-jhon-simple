import React, { createContext, useState } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
            {/* product যদি লেখা থাকে, এরপর যদি যেকোন একটা value থাকে সেটাকেই productKey এর value হিসেবে ধরে নেও। অর্থাৎ ঃ দিলে এইটা dynamic হিসেবে কাজ করে*/}
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
