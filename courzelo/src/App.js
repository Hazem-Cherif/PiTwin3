import './App.css';
import Home from '../src/home/home.js';
import Header from '../src/home/header.js';
import Footer from '../src/home/footer.js';
import Courses from '../src/courses/courses.js';


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Courses/>
      <Footer/>
      
    </div>
    
   
  );
}

export default App;
