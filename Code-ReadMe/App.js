import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar-Header/Navbar';
import Projecter from './components/Projects/Projecter';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  return (

    <HashRouter >

      <div className="App">
        <Navbar />

        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/Projects/Projecter" component={Projecter} />
          <Route path="/AboutMe/AboutMe" component={AboutMe} />
          <Route path="/Skills/Skills" component={Skills} />

        </Switch>

      </div>

    </HashRouter  >

  );
}

export default App;
