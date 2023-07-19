import React from 'react'
import { Link }  from 'react-router-dom'
import logo from "../../Assets/mlogo.png"

function Header(){
return(
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container">
    <Link className="navbar-brand" to="/"><img className="movielogo" src={logo} alt="movieLogo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movies/popular">Popular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/movies/top_rated">Top Rated</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/movies/upcoming">Upcoming</Link>
        </li>
        <form className="d-flex" role="search">
        <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
    </div>
)

}

export default Header;