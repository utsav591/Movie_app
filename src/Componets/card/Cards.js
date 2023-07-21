import React , { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "./card.css"
import { Link } from 'react-router-dom';

const Cards = ({movie}) =>{

    const [isLoading , setLIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLIsLoading(false)
        }, 1500)
    }, []) 

    return <>
        {
            isLoading
            ?
            <div className='cards'>
                 <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={200} width={200}  duration={1}/>
                 </SkeletonTheme>
            </div>
            :
            <Link to={`movie/${movie.id}`} style={{texdecoration: "none", color:"white"}}>
                <div className='cards'>
                    <img alt="" className="cards_img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path: ""}`}/>
                    <div className='cards_overlay'>
                        <div className='cards_title'>{movie ? movie.original_title: ""}</div>
                        <div className='cards_runtime'>{movie ? movie.release_date: ""}
                        <span className='cards_rating'>
                            {movie ? movie.vote_average:""}
                        <i className='fas fa-star'/>{" "}
                        </span>
                        </div>
                        <div className='cards_description'>{movie? movie.overview.slice(0,118)+"..." :" "}</div>
                    </div>
                </div>
            </Link>
        }
        </>
    
}

export default Cards