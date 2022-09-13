import Dashboard from "./pages/users/Dashboard";
import NotFound from "./pages/users/NotFound";
import NewSale from "./pages/users/NewSale";
import Expenses from "./pages/users/Expenses";
import Store from "./pages/users/Store";
import Profile from "./pages/users/Profile";
import Branches from "./pages/users/Branches";
import Staff from "./pages/users/Staff";
import Supplier from "./pages/users/Supplier";
import SingleBranch from "./pages/users/SingleBranch";
import BranchHistory from "./pages/users/BranchHistory";
import AddProduct from "./pages/users/AddProduct";
import AddStaff from "./pages/users/AddStaff";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/new-sale" component={NewSale} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/all-branch" component={Branches} />
          <Route exact path="/all-staff" component={Staff} />
          <Route exact path="/supplier" component={Supplier} />
          <Route exact path="/branch" component={SingleBranch} />
          <Route exact path="/branch-details" component={BranchHistory} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route exact path="/add-staff" component={AddStaff} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
