import { useEffect, useState } from "react";
import axios from "axios"
import MovieCard from "../MovieCard";
import { ListMovies } from "../../styles/Global.style";

interface Props {
    type: "tv" | "movie"
}

const Popular = ({type}: Props) => {
    const [listMovies, setListMovies] = useState<any>([])
    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}`)
        .then((res) => setListMovies(res.data.results))
    }, [])

    useEffect(() => {
        console.log(listMovies)
    }, [listMovies])

    return (
        <div>
            <h1>Most popular {type}</h1>
            <ListMovies>
                {
                    listMovies &&
                    listMovies.map((movie: any, index: number) => (
                        <MovieCard movie={movie} type={type} index={index} key={index}/>
                    ))
                }
            </ListMovies>
        </div>
    );
};

export default Popular;