import React from 'react'
import Header from '../Layout/Header'
import style from '../Styles/Detail.module.css'
import Footer from '../Layout/Footer'
import {  useParams, useNavigate  } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieDetail } from '../Services/data'

const Detail = () => {

  const {mID} = useParams()
  console.log(mID)
let navigate = useNavigate()

  const [Movie,setMovie] = useState([])
  
  
  const getMovie = async () => {
    const {data} = await getMovieDetail(mID)
    setMovie(data)
  }
  
  
  useEffect(() => {
    getMovie()    
  }, [])
  


const getImage = `https://image.tmdb.org/t/p/w500${Movie.poster_path}`

  return (
    <>
         <Header titulo="DETALHES"></Header>
     
         <div className={style.detail_container}>
             <div className={style.detail_moviecontainer}>
                 <img src={getImage} alt="" />
             </div>
             <div className={style.detail_info_container}>
                 <p>{Movie.title}</p>
                 <br></br>
                 <br></br>
                 <p>{Movie.overview}</p>
                 <button onClick={()=> navigate("/")}>Voltar</button>
             </div>
         </div>
         <Footer></Footer>
    </>
   
  )
}

export default Detail