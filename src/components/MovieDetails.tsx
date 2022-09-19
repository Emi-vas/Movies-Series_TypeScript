import { useEffect, useState } from "react";
import { Back, BackgroundImage, BlockText, PageContainer, Poster } from "./MovieDetails.style";
import axios from "axios"
import { useNavigate } from "react-router";

interface Props {
    id: string,
    type: "movie" | "tv"
}

const MovieDetails = ({ id, type }: Props) => {
    const navigate = useNavigate()
    const [data, setData] = useState<any>(null)

    const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
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
            </BlockText>

            <Poster>
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
            </Poster>

            <BackgroundImage>
                <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
            </BackgroundImage>
        </PageContainer>
    );
};

export default MovieDetails;