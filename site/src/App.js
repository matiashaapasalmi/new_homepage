import './styles.css'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import Navbar from './navbar';
import About from './pages/About';
import Home from './pages/Home';
import CV from './pages/CV';

const linkit = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
      break
    case "/cv":
      component = <CV />
      break
  }
  return (
      <>
    <Navbar></Navbar>

    <div className='container'>
    {component}
    </div>
   
     </>
  );
}

export default App;
