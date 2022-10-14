import './App.css';
import Navbar from './navbar';
import Home from './home';
import Favourites from './favourites';
import Footer from './footer';
import Addfavourites from './addfavourites';
import About from './about';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import State from './state';


function App() {
  let title= "Favourite Shows and Movies"
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites data={title}/>} />
          <Route path='/addfavourites' element={<Addfavourites />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
