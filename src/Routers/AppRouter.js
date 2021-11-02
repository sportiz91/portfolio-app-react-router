import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";
import CustomNav from "../Components/CustomNav";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Home from "../Pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <CustomNav />

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
