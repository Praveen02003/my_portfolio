import logo from './logo.svg';
import './App.css';
import { Header } from './Headers/Header';
import { Home } from './home/Home';
import { About } from './about/About';
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contacts } from './contacts/Contacts';
function App() {
  return (
    <div>
      <Router>
         <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
