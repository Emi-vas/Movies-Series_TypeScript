import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { BlocBtn, Image, PageHome } from "./Home.style";

const Home = () => {
    const navigate = useNavigate()
    const [animationMovie, setAnimationMovie] = useState('')
    const [animationSerie, setAnimationSerie] = useState('')

    return (
       <PageHome>
            <h1>Explore the world of</h1>
            <BlocBtn>
                <button
                    onMouseEnter={() => setAnimationMovie('imgEnter 0.5s both')}
                    onMouseLeave={() => setAnimationMovie('imgLeaveL 0.5s both')}
                    onClick={() => navigate('/movies')}
                >Movies</button>
                <p>and</p>
                <button
                    onMouseEnter={() => setAnimationSerie('imgEnter 0.5s both')}
                    onMouseLeave={() => setAnimationSerie('imgLeaveR 0.5s both')}
                    onClick={() => navigate('/series')}
                >Series</button>
            </BlocBtn>

            <Image>
                <img src='./assets/img/main.jpg' alt="cinema" />
                <img 
                    src="./assets/img/cinema.jpg" alt="movies" 
                    style={{
                        transform: 'translateX(-700px)',
                        opacity: '0',
                        animation: animationMovie
                    }}
                />
                <img 
                    src="./assets/img/series.jpg" alt="series" 
                    style={{
                        transform: 'translateX(700px)',
                        opacity: '0',
                        animation: animationSerie
                    }}
                />
            </Image>
       </PageHome>
    );
};

export default Home;