import React, { useEffect ,useState } from 'react'
import Cards from "../card/Cards"
import "./movie.css"
import { useParams } from 'react-router-dom'


const MovieList = ()=>{

    const[movieList, setMovieList]= useState([])
    const {type}= useParams()

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[ type])

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular" }?api_key=aef1574ce171d6639331e61a0d31aa67&language=en-US`)
        .then(res =>res.json())
        .then(data => setMovieList(data.results))
    }

    return(
        <div className='Movie_list'>
            <h2 className='list_title'>{(type ? type : "POPULAR")}</h2>
            <div className='list_cards'>
                {
                    movieList.map(movie=>(
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}


export default MovieList


