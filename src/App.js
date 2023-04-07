//React imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//Component imports
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sales from "./Components/Sales";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard /> 
            </Route>
            <Route path="/sales">
              <Sales />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
