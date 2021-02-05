import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Insight from "./pages/Insight";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/insight">
            <Insight />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
