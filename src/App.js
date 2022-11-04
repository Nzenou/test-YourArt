
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Artwork from './component/Artwork';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/artwork/:id' element={<Artwork/>}> hey</Route>
    </Routes>
  );
}

export default App;
