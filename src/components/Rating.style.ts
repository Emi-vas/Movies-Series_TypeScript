import styled from "styled-components";

export const RatingContainer = styled.div`
    position: relative;
    z-index: 11;
    color: white;
    font-size: 2em;
    margin-left: 90px;

    i {
        padding: 5px;
        transform: scale(0);
    }

    @keyframes starArrive {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.9);
        }
        100% {
            transform: scale(1);
        }
    }

    @media screen and (max-width: 500px) {
        margin-left: 20px;
    }
`