import './App.css';
import Home from './Pages/Home/Home'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from './Componets/Header/Header';
import MovieList from './Componets/movieList/Movielist';
import Movies from './Pages/Movies/Movies'


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="movies/:id" element={<h1>Error Page</h1>}>
            <Movies/>
          </Route>
          <Route path="movies/:type">
          <Home/>
           <MovieList/>
          </Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
