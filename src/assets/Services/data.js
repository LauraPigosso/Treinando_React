import axios from "axios";

const apiUrl ='https://api.themoviedb.org/3'
const apiKey = "c664df24fdd651ca3bba98c0db5f5499"

export function getPoularMovies(){
    return axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}&language=pt-BR`)
}

export function getMovieDetail(id){
    // return axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}`)
    const options = {
       
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjY0ZGYyNGZkZDY1MWNhM2JiYTk4YzBkYjVmNTQ5OSIsInN1YiI6IjYyNzFjZDlhNTgwMGM0MDA2NWVkZmY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6VM4dEdNLVDq8RzF-rVZBAVrQSvsfeUpxFkA95FFKo'
        }
      };
      
     return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)

}
