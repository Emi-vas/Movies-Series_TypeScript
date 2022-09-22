import { useEffect, useState } from "react";
import { Movie } from "../../assets/interfaces";
import { ListMovies } from "../../styles/Global.style";
import MovieCard from "../MovieCard";

const Yourlist = () => {
    const [listFull, setListFull] = useState<Movie[]>([]) //list with movies AND series
    const [listFiltred, setListFiltred] = useState<Movie[]>([]) // list with movies OR series

    useEffect(() => {
        let yourList = localStorage.getItem('yourList')
        if(yourList) {
            setListFull(JSON.parse(yourList))
        }
    }, [])

    return (
        <div>
            <h1>Movies and Series on your list</h1>
            <ListMovies>
                {
                   /*  listFull && 
                    listFull.map((movie: Movie) => <MovieCard />) */
                }
            </ListMovies>
        </div>
    );
};

export default Yourlist;