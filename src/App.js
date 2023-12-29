import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navb from './components/Nav';
import Emp from './pages/Employee';
import Title from './components/Title';
import Users from './pages/Users';

function App() {
  return (
    <div>
      <Navb/>
      <Title/>
      <Routes>
          <Route path='/' element={<Emp/>}></Route>
          <Route path='/users' element={<Emp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
