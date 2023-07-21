import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import MovieList from '../../Componets/movieList/Movielist';




function Home (){

    const [popularMovie,setPopularMovie]= useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=aef1574ce171d6639331e61a0d31aa67&language=en-US")
        .then(res =>res.json())
        .then(data => setPopularMovie(data.results))
    },[])
    
    return (
        <div className='home'>
            <Carousel 
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popularMovie.map(movie =>(
                        <Link style={{textDecoration:"none", color:"white"}} key={`/movies/${movie.id}`}>
                            <div className='posterImage' >
                             <img alt="" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                           </div>
                       <div className='posterImage_overlay'>
                        <div className="posterImage_title">{movie ? movie.original_title: ""}</div>
                        <div className='posteImage_runtime'>
                            {movie ? movie.release_date: ''}
                            <span className='posterImage_rating'>
                                {movie ? movie.vote_average:""}
                                <i className='fas fa-star'/>{" "}
                            </span>
                        </div>
                        <div className='posterImage_description'>{movie? movie.overview:" "}</div>
                       </div>
                        </Link>
                       
                    ))
                }
            </Carousel>
            <div className='container p-5'>
                <MovieList/>
            </div>
        </div>
        
    )
}

export default Home;