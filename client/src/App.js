import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandinPage from './components/Landing/LandinPage';
import Home from './components/Home/home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<LandinPage />} />
      <Route exact path='/home' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
