import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { COLORS } from "../../assets/constant";
import { Movie } from "../../assets/interfaces";
import { ListMovies } from "../../styles/Global.style";
import MovieCard from "../MovieCard";

interface Props {
    reloadCard: boolean,
    setReloadCard: (value: boolean) => void,
    type: "movie" | "tv"
}

const Yourlist = ({reloadCard, setReloadCard, type}: Props) => {
    const navigate = useNavigate()
    const [listFull, setListFull] = useState<Movie[]>([]) //list with movies AND series
    const [listFiltred, setListFiltred] = useState<Movie[]>([]) // list with movies OR series

    useEffect(() => {
        let yourList = localStorage.getItem('yourList')
        if(yourList) {
            setListFull(JSON.parse(yourList))
        } else {
            setListFull([])
        }
    }, [reloadCard])

    useEffect(() => {
        if(listFull[0]) {
            let listFiltredTemp = listFull.filter((movie: Movie) => movie.type == type)
            setListFiltred(listFiltredTemp)
        } else {
            setListFiltred([])
        }
    }, [listFull, type])

    return (
        <div>
            <h1>
                {type == "movie" ? "Movies" : "Series"} on your list
                <span
                    onClick={() => {
                        let navigateLink = type == "movie" ? "/series" : "/movies"
                        navigate(navigateLink)
                    }}

                   className="link"

                   style={{
                        fontSize: "0.7em",
                        paddingLeft: "5px",
                        margin: "10px",
                        borderLeft: `2px solid ${COLORS.boxShadow}`
                   }}

                > see {type == "movie" ? "series" : "movies"}</span>
            </h1>
            <ListMovies>
                {
                    listFiltred && 
                    listFiltred.map((movie: Movie, index: number) => 
                        <MovieCard 
                            movie={movie} 
                            reloadCard={reloadCard} 
                            setReloadCard={setReloadCard} 
                            key={index}
                        />)
                }
            </ListMovies>
            {
                !listFiltred[0] &&
                <p
                    style={{
                        marginLeft: "30px",
                        fontSize: "2em",
                        color: COLORS.boxShadow
                    }}
                >There is no {type == "movie" ? "movies": "series"} in your list</p>
            }
        </div>
    );
};

export default Yourlist;