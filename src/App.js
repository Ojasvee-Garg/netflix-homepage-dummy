import {HomeScreen} from './Components/HomeScreen';
import './App.css';
import './index.js'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     
      <Router>
        <Routes>
        <Route path="/" element={<HomeScreen/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
