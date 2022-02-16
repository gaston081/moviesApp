
import Home from './components/Home';
import Nav from './components/Nav/Nav'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Favorites } from './components/Favorites';
import MovieDetails from './components/MovieDetails';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/MovieDetails/:id" element={<MovieDetails />} />        
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
