import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator Application</h1>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
