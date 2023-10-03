import '../../App.css'
import Footer from '../Layout/Footer'
import banner from '../Images/bg_header.png'
import Header from '../Layout/Header'
import Main from '../Layout/Main'
import {getPoularMovies} from '../Services/data.js'
import { useEffect, useState } from 'react'




function Home() {

  const fetchMoviesPopular = async()=> {
    const {data} = await getPoularMovies()
    setMoviesP(data.results)
  }

  const [MoviesP, setMoviesP] = useState([])
  console.log(MoviesP)



  useEffect(() => {
    fetchMoviesPopular()    
  }, [])

        return (
      <>
        <Header titulo="Bem vindo a Metflix" banner={banner} ></Header>
        <Main movies={MoviesP}></Main>
        <Footer></Footer>
      </>
    )
  }
  
  export default Home
  