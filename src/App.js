import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import Results from './components/Results/Results';
import NotFound from './util/NotFound';

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
      <Route path="/results">
        <Results />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
