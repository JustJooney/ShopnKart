//Header & Nav
import Header from './components/Header';
import Navigation from './components/Navigation';
//Pages
import Home from './pages/Home';
import GivingBack from './pages/GivingBack';
import Recipes from './pages/Recipes';
import Employment from './pages/Employment';
import Contact from './pages/Contact';
//router-dom 
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/giving-back'>
          <GivingBack/>
        </Route>
        <Route path='/recipes'>
          <Recipes/>
        </Route>
        <Route path='/employment'>
          <Employment/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
