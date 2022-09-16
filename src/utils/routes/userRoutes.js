import Dashboard from "../../pages/users/Dashboard";
import Login from "../../pages/users/Login";
import AddProduct from "../../pages/users/AddProduct";
import AddStaff from "../../pages/users/AddStaff";
import Branches from "../../pages/users/Branches";
import BranchHistory from "../../pages/users/BranchHistory";
import Expenses from "../../pages/users/Expenses";
import NewSale from "../../pages/users/NewSale";
import Profile from "../../pages/users/Profile";
import SingleBranch from "../../pages/users/SingleBranch";
import Staff from "../../pages/users/Staff";
import Store from "../../pages/users/Store";
import Supplier from "../../pages/users/Supplier";
import CreateBusiness from "../../pages/users/CreateBusiness";

let prefix = "";
let routes = [
  {
    path: `${prefix}/dashboard`,
    component: Dashboard,
    protected: false,
  },
  {
    path: `${prefix}/login`,
    component: Login,
    protected: false,
  },
  {
    path: `${prefix}/add-product`,
    component: AddProduct,
    protected: false,
  },
  {
    path: `${prefix}/add-staff`,
    component: AddStaff,
    protected: false,
  },
  {
    path: `${prefix}/all-branch`,
    component: Branches,
    protected: false,
  },
  {
    path: `${prefix}/branch-details`,
    component: BranchHistory,
    protected: false,
  },
  {
    path: `${prefix}/expenses`,
    component: Expenses,
    protected: false,
  },
  {
    path: `${prefix}/new-sale`,
    component: NewSale,
    protected: false,
  },
  {
    path: `${prefix}/profile`,
    component: Profile,
    protected: false,
  },
  {
    path: `${prefix}/single-branch`,
    component: SingleBranch,
    protected: false,
  },
  {
    path: `${prefix}/all-staff`,
    component: Staff,
    protected: false,
  },
  {
    path: `${prefix}/store`,
    component: Store,
    protected: false,
  },
  {
    path: `${prefix}/supplier`,
    component: Supplier,
    protected: false,
  },
  {
    path: `${prefix}/create-business`,
    component: CreateBusiness,
    protected: false,
  },
];
export default routes;
