import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/index'
import Navigation from './components/navComponent/Navigation';
import Capsules from './components/capsulesComponent/Capsules'
import ViewCapsule from "./components/capsulesComponent/ViewCapsule";
import './App.css';

function App() {
  // make nav bump to a section in the page
  return (
    <div className="mainCenter">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/capsules' element={<Capsules />}/>
          <Route exact path='/capsules/:id' element={<ViewCapsule />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App