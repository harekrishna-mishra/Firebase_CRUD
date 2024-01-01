import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navb from './components/Nav';
import Emp from './pages/Employee';
import Users from './pages/Users';

function App() {
  return (
    <div className='container'>
      <Navb/>
      <Routes>
          <Route path='/' element={<Emp/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
