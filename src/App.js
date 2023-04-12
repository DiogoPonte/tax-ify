//React imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//Component imports
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Sales from "./Pages/Sales";
import Dashboard from "./Pages/Dashboard";


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
