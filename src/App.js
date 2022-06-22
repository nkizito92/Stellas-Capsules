import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/index'
import Navigation from './components/navComponent/Navigation';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App