
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Form from './components/form';
import Greet from './components/greet';


function App() {
  return (
    <Router>
      

      <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/greet' element={<Greet/>} />
    
      </Routes>
      </Router>
  );
}

export default App;
