import Dashboard from "./pages/users/Dashboard";
import NotFound from "./pages/users/NotFound";
import NewSale from "./pages/users/NewSale";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
