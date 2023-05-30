
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Navbar } from './NavBar/Navbar';
import { Favourites } from './Pages/Fav/Favourites';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/myfavourites' element={<Favourites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


