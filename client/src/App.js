import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandinPage from './components/Landing/LandinPage';
import Home from './components/Home/home';
import DetailDogs from './components/Detail/DetailDogs';
import { CreateDog } from './components/CreateDog/CreateDog';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<LandinPage />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/dogs/:id' element={<DetailDogs />} />
      <Route exact path='/createDog' element={<CreateDog />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
