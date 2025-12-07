import { API_options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const getNowPlayingmovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            API_options
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(()=>{
        getNowPlayingmovies();
    },[]);

}

export default useNowPlayingMovies;