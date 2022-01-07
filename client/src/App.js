import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Index from './components/Index';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
        <Route exact path='/'>
            <Index />
            <Footer/>
          </Route>
          <Route exact path='/search'>
            <Navbar />
            <Main />
          </Route>
          <Route path='/contact'>
            <Navbar />
            <Contact />
            <Footer/>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
