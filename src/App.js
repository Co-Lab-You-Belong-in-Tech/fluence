import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import HowItWorks from './HowItWorks';
import Calculator from './Calculator';
import Analysis from './Analysis';

const App = () => (
  <Router>
    <div className="wrapper">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <HowItWorks /> */}
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/analysis">
          <Analysis />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
