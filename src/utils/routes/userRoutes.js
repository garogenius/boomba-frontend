import Dashboard from "../../pages/users/Dashboard";

let prefix = "";
let routes = [
  {
    path: `${prefix}/dashboard`,
    component: Dashboard,
    protected: false,
  },
];
export default routes;
