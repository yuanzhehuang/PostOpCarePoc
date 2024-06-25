import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PhysicianList from './pages/PhysicianList';
import DepartmentList from './pages/DepartmentList';
import Disclaimer from './pages/Disclaimer';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/physician-list" component={PhysicianList} />
          <Route path="/department-list" component={DepartmentList} />
          <Route path="/disclaimer" component={Disclaimer} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
