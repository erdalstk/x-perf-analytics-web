import Home from "../pages/Home";
import About from "../pages/About";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
];
export default Routes;
