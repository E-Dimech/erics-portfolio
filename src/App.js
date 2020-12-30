import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Background from "./components/Background/Background";
// import GooBubble from "./components/GooBubble/GooBubble";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Background />
        {/* <GooBubble /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
