
import styles from './App.module.css';
import { Card } from './components/Card/Card';
import Home from './components/Home';
import Nav from './components/Nav/Nav'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Favorites } from './components/Favorites';
import SearchBar from './components/SearchBar';
import { MovieContainer } from './components/MovieContainer';
import  MovieDetails  from './components/MovieDetails';



function App() {
  return (
    <>
    
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<Home />} />
            <Route path="/MovieDetails/:id" element={<MovieDetails />} />
            <Route path="/MovieContainer" element={<MovieContainer />} />
            
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
