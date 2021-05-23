import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Calculator from './Calculator';
import Analysis from './Analysis';

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator />
      </Route>
      <Route path="/analysis">
        <Analysis />
      </Route>
    </Switch>
  </Router>
);

export default App;
