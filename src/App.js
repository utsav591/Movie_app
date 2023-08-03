import './App.css';
import Home from './Pages/Home/Home'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from './Componets/Header/Header';
import MovieList from './Componets/movieList/Movielist';
import Movies from './Pages/Movies/Movies'


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movies />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
