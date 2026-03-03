import './movies.css'
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css" 
import "swiper/css/navigation"


function Movies(){
  const [movies, setMovies] = useState([]);
    useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);
    return(
        <>
        
       <div className="text-white py-5" style={{background:"#000000"}}>
        <div className="netflix-divider"></div>
      <div className="container p-5">
        <h4 className="fw-bold mb-5">Trending Now</h4>       

        <Swiper modules={[Navigation]} spaceBetween={15} navigation
        breakpoints={{
        320:{slidesPerview: 2},
        576 : {slidesPerView : 2},
        768 : {slidesPerView : 2},
        1024 : {slidesPerView : 4},
        1400 : {slidesPerView : 6},
        }}
        className='px-5'>
          {movies.map((movie) => (
  <SwiperSlide key={movie.id} className="cursor-pointer">
    <img
      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
      alt={movie.title}
      className="movie-card"
    />
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </div>
  
        </>
          )
}
export default Movies;