import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import CustomNav from "../Components/CustomNav";
import Home from "../Pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <CustomNav />
      <Home />
    </Router>
  );
};

export default AppRouter;
