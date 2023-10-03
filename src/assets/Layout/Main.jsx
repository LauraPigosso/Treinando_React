import React from 'react'
import style from "../Styles/Main.module.css"
import Card from '../Components/Card'

const Main = (props) => {
  return (
    <div className={style.container}>
         <h2>Continue assistindo</h2>
       
            <ul className={style.moviecontainer}>
              {props.movies.map( movie =>
              <>
              <p key={movie.id}></p>
                <Card titulo={movie.title} description={movie.overview} movie={movie}></Card>
              </>
              )}
            </ul>
    </div>

  )
}

export default Main