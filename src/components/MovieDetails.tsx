import { useEffect, useState } from "react";
import { Back, BackgroundImage, BlockText, PageContainer, Poster, ShareLikeBloc } from "./MovieDetails.style";
import axios from "axios"
import { useNavigate } from "react-router";
import Rating from "./Rating";
import { ICONS } from "../assets/constant"
import { Button } from "../styles/Global.style";
import { addToList, isMovieOnList } from "../functions/yourList"

interface Props {
    id: string,
    type: "movie" | "tv",
    reloadCard: boolean,
    setReloadCard: (val:boolean) => void
}

const MovieDetails = ({ id, type, reloadCard, setReloadCard }: Props) => {
    const navigate = useNavigate()
    const [data, setData] = useState<any>(null)
    const [isTel, setIsTel] = useState<"Y" | 'N' | null>(null) //don't use boolean, you need to be sure of the screen before loading image
    const [isFavorit, setIsFavorit] = useState(false)

    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY 

    useEffect(() => {
        let yourList: any = localStorage.getItem('yourList')

        if(!yourList) {
            setIsFavorit(false)
        }
        
        yourList = JSON.parse(yourList)
        if(isMovieOnList(parseInt(id), yourList)){
            setIsFavorit(true)
        } else {
            setIsFavorit(false)
        }
    }, [])

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
    }, [])

    useEffect(() => {
        if(window.innerWidth < 500) {
            setIsTel('Y')
        } else {
            setIsTel('N')
        }
    }, [])

    if(!data) {
        return <></>
    }

    return (
        <PageContainer>

            <Back onClick={() => navigate("")}>
                <i className="fa-solid fa-left-long"></i>
                <p> Back</p>
            </Back>

            <BlockText>
                
                <h1>{type == "movie" ? data.title : data.original_name}</h1>
                <ul>
                    {   
                        data.genres[0] &&
                        data.genres.map((genre: any) => (
                            <li key={genre.id}>{genre.name} </li>
                        ))
                    }
                </ul>
                <p>{data.overview}</p>
                <Rating rate={data.vote_average} />
                <ShareLikeBloc>
                    <Button
                        onClick={() => {
                            addToList({
                                title: type == "movie" ? data.title : data.original_name,
                                id: data.id,
                                img: data.poster_path
                            })
                            setIsFavorit(!isFavorit)
                            setReloadCard(!reloadCard)
                        }}
                    >
                        {
                            isFavorit ? (
                                <>
                                    <p>Remove from your list</p>
                                    <i className={ICONS.heartOn}></i>
                                </>
                            ) : (
                                <>
                                    <p>Add to your list</p>
                                    <i className={ICONS.heartOff}></i>
                                </>
                            )
                        }
                        </Button>
                    <Button>
                        <p>Share</p>
                        <i className={ICONS.share}></i>
                    </Button>
                </ShareLikeBloc>
            </BlockText>


            <Poster>
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </Poster>

            <BackgroundImage>
                {
                    isTel && isTel == "N" && <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
                }
                {
                    isTel && isTel == "Y" && <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.title} />
                }
                
            </BackgroundImage>
        </PageContainer>
    );
};

export default MovieDetails;