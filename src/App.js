import './App.css';
import Home from './Pages/Home/Home'
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Header from './Componets/Header/Header';


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="movies/:id" ></Route>
          <Route path="movies/type" element={<h1>Movie List Page</h1>}></Route>
          <Route path="movies/" element={<h1>Error Page</h1>}></Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
