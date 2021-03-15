import './App.css';
import Home from '../src/home/home.js';
import Header from '../src/home/header.js';
import Footer from '../src/home/footer.js';
import Login from '../src/authentification/login.js';
import Courses from '../src/courses/courses.js';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
         <Header/>
          <Login/>
         <Footer/>
      </div>
    </Router>
    
   
  );
}

export default App;
