import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import AddNewService from "./Pages/AddNewService/AddNewService";
import Home from "./Pages/Home/Home/Home";
import OrderPlaced from "./Pages/Home/OrderPlaced/OrderPlaced";
import Login from "./Pages/Login/Login/Login";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import MyOrder from "./Pages/Myorder/MyOrder";
import NotPound from "./Pages/NotPound/NotPound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

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
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/orderPlaced/:id">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/addNewService">
              <AddNewService></AddNewService>
            </Route>
            <Route path="*">
              <NotPound></NotPound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
