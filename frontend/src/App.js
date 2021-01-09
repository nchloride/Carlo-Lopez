import NavBar from "./Components/NavigationBar/NavBar"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import "./App.css"
import {motion,AnimatePresence} from "framer-motion";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
