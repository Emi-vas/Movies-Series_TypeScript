import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import styled from "styled-components";
import { COLORS } from "../assets/constant";

const BackPortfolio = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const ud = searchParams.get('ud')

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(ud == "y") {
            setIsActive(true)
        }
    }, [])

    return (
        <div>
           {
            isActive && 
            <Container>
                <Button href="https://app.underdom.fr/">
                    <img src="./assets/img/emilien5.png" alt="Emilien Vaschalde" />
                    <p >Retour sur le <br /> portfolio</p>
                </Button>
               
            </Container>
           } 
        </div>
    );
};

export default BackPortfolio;


const Container = styled.div`
    color: ${COLORS.red};
    background: ${COLORS.background};
    font-size: 1.1em;
    display: flex;
    justify-content: center;
`

const Button = styled.a`
    display: flex;
    align-items: center;
    background: ${COLORS.yellow};
    border-radius: 30px;
    padding: 0 10px;
    overflow: hidden;
    border: 1px solid ${COLORS.red};
    margin: 15px;

    p {
        text-align: center;
        font-weight: 500;
    }

    img {
        width: 90px;
    }

    @media screen and (max-width: 500px) {
        font-size: 0.9em;
        padding: 0 5px;

        img {
            width: 70px;
        }

    }
`