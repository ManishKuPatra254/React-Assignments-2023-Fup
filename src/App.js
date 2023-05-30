
import { Adminlogin } from './AdminLogin/Adminlogin';
import './App.css';
import { HomePage } from './MainPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentLogin } from './StudentLogin/StudentLogin';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/adminlogin' element={<Adminlogin />}></Route>
          <Route path='/studentlogin' element={<StudentLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
