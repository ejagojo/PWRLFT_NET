import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from "./pages/auth/loginPage/index"
import {Home} from "./pages/homePage/index"
import Image from "../../pwrlft_net/src/assets/images/PWRLFT.png"

function App() {
      
    // Style
    const logoStyle = {
        position: 'absolute',
        top: '10px',
        left: '100px',
        height: '150px'
    }


  return (
    <div className="App">
      <header>
          <img src={Image} alt="Logo" className="app logo" style={logoStyle}/>
      </header>
      <Router>
        <Routes>
          <Route path='/' exact element ={<Auth />}/>
          <Route path='home-page' element ={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
