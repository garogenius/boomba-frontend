//guest pages..
import NotFound from "./pages/guest/NotFound";
import Home from "./pages/guest/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routes from "./utils/routes/userRoutes";
import guestRoute from "./utils/routes/guestRoutes";

// import ProtectedRoute from "./ProtectedRoute";

function App() {
  let allroutes = routes.concat(guestRoute);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/404" component={NotFound} />

          {allroutes.map((route) => {
            return <Route path={route.path} component={route.component} />;
          })}
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
