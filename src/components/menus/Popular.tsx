import { useEffect, useState } from "react";
import axios from "axios"
import MovieCard from "../MovieCard";
import { ListMovies } from "../../styles/Global.style";
import { API_KEY } from "../../assets/constant";

interface Props {
    type: "tv" | "movie",
    reloadCard: boolean,
    setReloadCard: (val:boolean) => void
}

const Popular = ({type, reloadCard, setReloadCard}: Props) => {
    const [listMovies, setListMovies] = useState<any>([])

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${API_KEY}`)
        .then((res) => setListMovies(res.data.results))
    }, [type])

    useEffect(() => {
        //console.log(listMovies)
    }, [listMovies])

    return (
        <div>
            <h1>Most popular {type}</h1>
            <ListMovies>
                {
                    listMovies &&
                    listMovies.map((movie: any, index: number) => (
                        <MovieCard 
                            movie={{
                                title: type == "movie" ? movie.title : movie.name,
                                id: movie.id,
                                img:  movie.poster_path,
                                type: type
                            }} 
                            key={index} 
                            reloadCard={reloadCard} 
                            setReloadCard={setReloadCard}
                        />
                    ))
                }
            </ListMovies>
        </div>
    );
};

export default Popular;