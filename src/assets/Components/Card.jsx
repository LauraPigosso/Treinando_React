import React from 'react'
import style from '../Styles/Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {

  const getImage = 'https://image.tmdb.org/t/p/w500'

  console.log(props)

  return (
    <li className={style.card} >
    <div className={style.cardwrapper}>
        <Link to={`/movie/${props.movie.id}`}><img src={`${getImage}${props.movie.poster_path}`}></img></Link>
    </div>
    
    <p>{props.titulo}</p>
    <br></br>
    <p className={style.desc}> {props.description}</p>
    </li >
  )
}

export default Card