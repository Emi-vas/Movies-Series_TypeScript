import { useEffect, useState } from "react";
import { BlocBtn, Image, Page } from "./Home.style";

const Home = () => {
    const [animationMovie, setAnimationMovie] = useState('')
    const [animationSerie, setAnimationSerie] = useState('')

    return (
       <Page>
            <h1>All you want to know about</h1>
            <BlocBtn>
                <button
                    onMouseEnter={() => setAnimationMovie('imgEnter 0.5s both')}
                    onMouseLeave={() => setAnimationMovie('imgLeaveL 0.5s both')}
                >Movies</button>
                <p>and</p>
                <button
                    onMouseEnter={() => setAnimationSerie('imgEnter 0.5s both')}
                    onMouseLeave={() => setAnimationSerie('imgLeaveR 0.5s both')}
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
       </Page>
    );
};

export default Home;